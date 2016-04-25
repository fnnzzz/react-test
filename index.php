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
				              <h1 id="tables">Products</h1>
				            </div>

				            <div class="bs-component">
				              <table class="table table-striped table-hover ">
				                <thead>
				                  <tr>
				                    <th>#</th>
				                    <th>User</th>
				                    <th>Datetime</th>
				                    <th>Price</th>
				                  </tr>

				                  <tr>
				                  	<td id="test">1</td>
				                  	<td>Andrew</td>
				                  	<td>10.01.2016 16:00</td>
				                  	<td>140 $</td>
				                  </tr>

				                  <tr>
				                  	<td>1</td>
				                  	<td>George</td>
				                  	<td>12.01.2016 11:10</td>
				                  	<td>100 $</td>
				                  </tr>

				                  <tr>
				                  	<td>1</td>
				                  	<td>Scott</td>
				                  	<td>22.02.2016 12:03</td>
				                  	<td>101 $</td>
				                  </tr>


				                </thead>
				                <tbody id="insert_products">
				                  
				                </tbody>
				              </table> 
				            <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div></div><!-- /example -->
				          </div>
			</div>
		</div>
	</div>	

	


	<?php     require_once('_footer.html');    ?>



</body>
</html>