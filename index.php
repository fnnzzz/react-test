<?php 

	require_once('_header.html');
	require_once('_navigation.html');
?>
	

	<div class="page-header" id="banner">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="bs-component">
			              <div class="jumbotron">
			                <h1>TestShop</h1>
			                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			                <p><a class="btn btn-primary btn-lg">Learn more</a></p>
			              </div>
			        <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div></div>
					
				</div>


				<div class="col-lg-12">
		            <div class="page-header">
		              <h1 id="tables">Products <span data-remodal-target="add_drug" class="plus_sign">+</span></h1>
		            </div>
			
					<!-- react entry point -->
		            <div class="bs-component" id="items_table">
		            <!-- // -->

		            <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div></div><!-- /example -->
				</div>
			</div>
		</div>
	</div>	

	


	<?php     require_once('_footer.html');     ?>



</body>
</html>