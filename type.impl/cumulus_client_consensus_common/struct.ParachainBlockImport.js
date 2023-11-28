(function() {var type_impls = {
"parachain_template_node":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParachainBlockImport%3CBlock,+BI,+BE%3E\" class=\"impl\"><a href=\"#impl-ParachainBlockImport%3CBlock,+BI,+BE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, BI, BE&gt; ParachainBlockImport&lt;Block, BI, BE&gt;<span class=\"where fmt-newline\">where\n    Block: Block,\n    BE: Backend&lt;Block&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(inner: BI, backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;BE&gt;) -&gt; ParachainBlockImport&lt;Block, BI, BE&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance.</p>\n<p>The number of leaves per level limit is set to <code>LevelLimit::Default</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_limit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_with_limit</a>(\n    inner: BI,\n    backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;BE&gt;,\n    level_leaves_max: LevelLimit\n) -&gt; ParachainBlockImport&lt;Block, BI, BE&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance with an explicit limit to the number of leaves per level.</p>\n<p>This function alone doesn’t enforce the limit on levels for old imported blocks,\nthe limit is eventually enforced only when new blocks are imported.</p>\n</div></details></div></details>",0,"parachain_template_node::service::ParachainBlockImport"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BlockImport%3CBlock%3E-for-ParachainBlockImport%3CBlock,+BI,+BE%3E\" class=\"impl\"><a href=\"#impl-BlockImport%3CBlock%3E-for-ParachainBlockImport%3CBlock,+BI,+BE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, BI, BE&gt; BlockImport&lt;Block&gt; for ParachainBlockImport&lt;Block, BI, BE&gt;<span class=\"where fmt-newline\">where\n    Block: Block,\n    BI: BlockImport&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    BE: Backend&lt;Block&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = &lt;BI as BlockImport&lt;Block&gt;&gt;::Error</h4></section></summary><div class='docblock'>The error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_block\" class=\"method trait-impl\"><a href=\"#method.check_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check_block</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    block: BlockCheckParams&lt;Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ImportResult, &lt;ParachainBlockImport&lt;Block, BI, BE&gt; as BlockImport&lt;Block&gt;&gt;::Error&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    ParachainBlockImport&lt;Block, BI, BE&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Check block preconditions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.import_block\" class=\"method trait-impl\"><a href=\"#method.import_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">import_block</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    params: BlockImportParams&lt;Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ImportResult, &lt;ParachainBlockImport&lt;Block, BI, BE&gt; as BlockImport&lt;Block&gt;&gt;::Error&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    ParachainBlockImport&lt;Block, BI, BE&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Import a block.</div></details></div></details>","BlockImport<Block>","parachain_template_node::service::ParachainBlockImport"],["<section id=\"impl-ParachainBlockImportMarker-for-ParachainBlockImport%3CB,+BI,+BE%3E\" class=\"impl\"><a href=\"#impl-ParachainBlockImportMarker-for-ParachainBlockImport%3CB,+BI,+BE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, BI, BE&gt; ParachainBlockImportMarker for ParachainBlockImport&lt;B, BI, BE&gt;<span class=\"where fmt-newline\">where\n    B: Block,</span></h3></section>","ParachainBlockImportMarker","parachain_template_node::service::ParachainBlockImport"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ParachainBlockImport%3CBlock,+I,+BE%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ParachainBlockImport%3CBlock,+I,+BE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, I, BE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ParachainBlockImport&lt;Block, I, BE&gt;<span class=\"where fmt-newline\">where\n    Block: Block,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ParachainBlockImport&lt;Block, I, BE&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","parachain_template_node::service::ParachainBlockImport"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()