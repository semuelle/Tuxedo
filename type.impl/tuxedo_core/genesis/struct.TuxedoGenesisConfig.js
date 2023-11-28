(function() {var type_impls = {
"tuxedo_template_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TuxedoGenesisConfig%3CV,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#116\">source</a><a href=\"#impl-TuxedoGenesisConfig%3CV,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V, C&gt; <a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#119\">source</a><h4 class=\"code-header\">pub fn <a href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html#tymethod.new\" class=\"fn\">new</a>(\n    wasm_binary: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,\n    genesis_transactions: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"tuxedo_core/types/struct.Transaction.html\" title=\"struct tuxedo_core::types::Transaction\">Transaction</a>&lt;V, C&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <code>TuxedoGenesisConfig</code> from a WASM binary and a list of transactions.\nMake sure to pass the transactions in order: the inherents should be first, then the extrinsics.</p>\n</div></details><section id=\"method.get_transaction\" class=\"method\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#126\">source</a><h4 class=\"code-header\">pub fn <a href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html#tymethod.get_transaction\" class=\"fn\">get_transaction</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"tuxedo_core/types/struct.Transaction.html\" title=\"struct tuxedo_core::types::Transaction\">Transaction</a>&lt;V, C&gt;&gt;</h4></section></div></details>",0,"tuxedo_template_runtime::genesis::RuntimeGenesisConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#106\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, V, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#106\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","tuxedo_template_runtime::genesis::RuntimeGenesisConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#106\">source</a><a href=\"#impl-Serialize-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#106\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","tuxedo_template_runtime::genesis::RuntimeGenesisConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#131-136\">source</a><a href=\"#impl-BuildStorage-for-TuxedoGenesisConfig%3CV,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V, C&gt; BuildStorage for <a class=\"struct\" href=\"tuxedo_core/genesis/struct.TuxedoGenesisConfig.html\" title=\"struct tuxedo_core::genesis::TuxedoGenesisConfig\">TuxedoGenesisConfig</a>&lt;V, C&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"tuxedo_core/verifier/trait.Verifier.html\" title=\"trait tuxedo_core::verifier::Verifier\">Verifier</a>,\n    C: <a class=\"trait\" href=\"tuxedo_core/constraint_checker/trait.ConstraintChecker.html\" title=\"trait tuxedo_core::constraint_checker::ConstraintChecker\">ConstraintChecker</a>&lt;V&gt;,\n    <a class=\"struct\" href=\"tuxedo_core/types/struct.Transaction.html\" title=\"struct tuxedo_core::types::Transaction\">Transaction</a>&lt;V, C&gt;: Encode,\n    <a class=\"struct\" href=\"tuxedo_core/types/struct.Output.html\" title=\"struct tuxedo_core::types::Output\">Output</a>&lt;V&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tuxedo_core/genesis.rs.html#140\">source</a><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">assimilate_storage</a>(&amp;self, storage: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Assimilate the storage into the genesis block.\nThis is done by inserting the genesis extrinsics into the genesis block, along with their outputs.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","tuxedo_template_runtime::genesis::RuntimeGenesisConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()