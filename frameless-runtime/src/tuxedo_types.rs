//! The common types that will be used across a Tuxedo runtime, and not specific to any one piece

// My IDE added this at some point. I'll leave it here as a reminder that maybe I don't need to
// re-invent the type-id wheel;
// use core::any::TypeId;

use sp_runtime::traits::Extrinsic;
use sp_std::vec::Vec;
use parity_scale_codec::{Encode, Decode};
use sp_core::H256;
#[cfg(feature = "std")]
use serde::{Deserialize, Serialize};

/// A reference to a output that is expected to exist in the state.
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, parity_util_mem::MallocSizeOf))]
#[derive(Encode, Decode, Debug, PartialEq, Eq, Clone)]
pub struct OutputRef {
    /// A hash of the transaction that created this output
    pub tx_hash: H256,
    /// The index of this output among all outputs created by the same transaction
    pub index: u32,
}

/// A UTXO Transaction
/// 
/// Each transaction consumes some UTXOs (the inputs) and creates some new ones (the outputs).
/// 
/// The Transaction type is generic over two orthogonal pieces of validation logic:
/// 1. Redeemers - A redeemer checks that an individual input may be consumed. A typical example
///    of a redeemer is checking that there is a signature by the proper owner. Other examples
///    may be that anyone can consume the input or no one can, or that a proof of work is required.
/// 2. Verifiers - A verifier checks that the transaction as a whole meets a set of requirements.
///    For example, that the total output value of a cryptocurrency transaction does not exceed its
///    input value. Or that a cryptokitty was created with the correct genetic material from its parents.
/// 
/// In the future, there may be additional notions of peeks (inputs that are not consumed)
/// and evictions (inputs that are forcefully consumed.)
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, parity_util_mem::MallocSizeOf))]
#[derive(Encode, Decode, Debug, PartialEq, Eq, Clone)]
pub struct Transaction<R, V> {
    pub inputs: Vec<Input>,
    //Todo peeks: Vec<Input>,
    pub outputs: Vec<Output<R>>,
    pub verifier: V,
}

// We must implement this Extrinsic trait to use our Transaction type as the Block's Transaction type
// See https://paritytech.github.io/substrate/master/sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic
//
// This trait's design has a preference for transactions that will have a single signature over the
// entire block, so it is not very useful for us. We still need to implement it to satisfy the bound
// , so we do a minimal implementation.
impl<R, V> Extrinsic for Transaction<R, V> {
	type Call = Self;
	type SignaturePayload = ();

	fn new(data: Self, _: Option<Self::SignaturePayload>) -> Option<Self> {
		Some(data)
	}

    // This function has a default implementation that returns None.
    // TODO what are the consequences of returning Some(false) vs None?
    fn is_signed(&self) -> Option<bool> {
		Some(false)
	}
}

/// A reference the a utxo that will be consumed along with proof that it may be consumed
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, parity_util_mem::MallocSizeOf))]
#[derive(Encode, Decode, Debug, PartialEq, Eq, Clone)]
pub struct Input {
    /// a reference to the output being consumed
    pub output_ref: OutputRef,
    // Eg the signature
    pub witness: Vec<u8>,
}

/// An opaque piece of Transaction output data. This is how the data appears at the Runtime level. After
/// the redeemer is checked, strongly typed data will be extracted and passed to the verifier.
/// In a cryptocurrency, the data represents a single coin. In Tuxedo, the type of
/// the contained data is generic.
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, parity_util_mem::MallocSizeOf))]
#[derive(Encode, Decode, Debug, PartialEq, Eq, Clone)]
pub struct Output<R> {
    pub payload: TypedData,
    pub redeemer: R,
}

/// A piece of encoded data with a type id associated
/// Strongly typed data can be extracted
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, parity_util_mem::MallocSizeOf))]
#[derive(Encode, Decode, Debug, PartialEq, Eq, Clone)]
pub struct TypedData {
    pub data: Vec<u8>,
    pub type_id: [u8; 4],
}

/// A trait that must be implemented for any data that can be contained in a UTXO.
/// It is not recommended to implement this trait directly for primitive types, but rather to
/// use the newtype pattern: https://doc.rust-lang.org/book/ch19-04-advanced-types.html.
/// Using a new type allows strong type disambiguation between bespoke use-cases in which
/// the same primitive may be stored.
pub trait UtxoData: Encode + Decode {
    //TODO this is ugly. But at least I'm not stuck anymore.
    /// A unique identifier for this type. For now choosing this value and making sure it
    /// really is unique is the problem of the developer. Ideally this would be better.
    /// Maybe macros... Doesn't frame somehow pass info about the string in construct runtime to the pallet-level storage items?
    const TYPE_ID: [u8; 4];
}

impl TypedData {
    /// Extracts strongly typed data from an Output, iff the output contains the type of data
    /// specified. If the contained data is not the specified type, or decoding fails, this errors.
    pub fn extract<T: UtxoData>(&self) -> Result<T, ()> {
        
        // The first four bytes represent the type id that that was encoded. If they match the type
        // we are trying to decode into, we continue, otherwise we error out.
        if self.type_id == <T as UtxoData>::TYPE_ID {
            T::decode(&mut &self.data[..]).map_err(|_| ())
        } else {
            Err(())
        }
    }
}

/// A helper function that allows tuxedo pieces to read the current block height
pub fn block_height() -> u32 {
    //TODO this is copied from lib.rs. Figure out the right separation between
    // tuxedo core and the runtime template
    const HEADER_KEY: &[u8] = b"header";

    //TODO The header type is also copied.
    sp_io::storage::get(HEADER_KEY)
        .and_then(|d| crate::Header::decode(&mut &*d).ok())
        .expect("A header is always stored at the beginning of the block")
        .number
}