//! Unit tests for the Parachain Info inherent piece

use super::*;
use tuxedo_core::dynamic_typing::{testing::Bogus, DynamicallyTypedData};
use ParachainError::*;

/// The mock config always says the block number is two.
pub struct AlwaysBlockTwo;

impl ParachainPieceConfig for AlwaysBlockTwo {
    fn block_height() -> u32 {
        2
    }
}

#[test]
fn update_parachain_info_happy_path() {
    let old: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let new: DynamicallyTypedData = new_data_from_relay_parent_number(4).into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Ok(0),
    );
}

#[test]
fn update_parachain_info_relay_block_not_increasing() {
    let old: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let new: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(RelayBlockNotIncreasing),
    );
}

#[test]
fn update_parachain_info_extra_inputs() {
    let old1: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let old2: DynamicallyTypedData = Bogus.into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old1.into(), old2.into()];
    let new: DynamicallyTypedData = new_data_from_relay_parent_number(4).into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(ExtraInputs)
    );
}

#[test]
fn update_parachain_info_missing_input() {
    let inputs: Vec<Output<UpForGrabs>> = vec![];
    let new: DynamicallyTypedData = new_data_from_relay_parent_number(4).into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(MissingPreviousInfo)
    );
}

#[test]
fn update_parachain_info_bogus_input() {
    let old: DynamicallyTypedData = Bogus.into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let new: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(BadlyTyped)
    );
}

#[test]
fn update_parachain_info_extra_outputs() {
    let old: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let new1: DynamicallyTypedData = new_data_from_relay_parent_number(4).into();
    let new2: DynamicallyTypedData = Bogus.into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new1.into(), new2.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(ExtraOutputs)
    );
}

#[test]
fn update_parachain_info_missing_output() {
    let old: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let outputs: Vec<Output<UpForGrabs>> = vec![];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(MissingNewInfo)
    );
}

#[test]
fn update_parachain_info_bogus_output() {
    let old: DynamicallyTypedData = new_data_from_relay_parent_number(3).into();
    let inputs: Vec<Output<UpForGrabs>> = vec![old.into()];
    let new: DynamicallyTypedData = Bogus.into();
    let outputs: Vec<Output<UpForGrabs>> = vec![new.into()];

    assert_eq!(
        SetParachainInfo::<AlwaysBlockTwo>(Default::default()).check(&inputs, &[], &outputs),
        Err(BadlyTyped)
    );
}
