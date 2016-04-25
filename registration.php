<?php 

	require_once('_header.html');
	require_once('_navigation.html');
?>
	
	
	<div class="page-header" id="banner">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
				
					
					<form class="form-horizontal">

					  <br><br><br>

					  <fieldset>
					    <legend>Registration</legend>
					    <div class="form-group">
					      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
					      <div class="col-lg-10">
					        <input type="text" class="form-control" id="inputEmail" placeholder="Email">
					      </div>
					    </div>
					    <div class="form-group">
					      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
					      <div class="col-lg-10">
					        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
					        <div class="checkbox">
					          <label>
					            <input type="checkbox"> Checkbox
					          </label>
					        </div>
					      </div>
					    </div>
					    <div class="form-group">
					      <label for="textArea" class="col-lg-2 control-label">Textarea</label>
					      <div class="col-lg-10">
					        <textarea class="form-control" rows="3" id="textArea"></textarea>
					        <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
					      </div>
					    </div>

					    <div class="form-group">
					      <div class="col-lg-10 col-lg-offset-2">
					        <button type="reset" class="btn btn-default">Cancel</button>
					        <button type="submit" class="btn btn-primary">Submit</button>
					      </div>
					    </div>

					  </fieldset>
					</form>


				</div>			
			</div>
		</div>
	</div>	

	
	<script src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

	<!-- react -->
	<script src="https://fb.me/react-15.0.1.js"></script>
	<script src="https://fb.me/react-dom-15.0.1.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>

		<script type="text/babel">


		productsList = [
			{
				id: '1',
				title: "product1",
				datetime: '10.11.2001',
			},
			{
				id: '2',
				title: "product2",
				datetime: '10.11.2001',
			},
		]

    	var productsList = React.createClass({
    		render: function() {
    			return (	
    				false,
    				false
    			);
    		}
    	});
    	</script>

</body>
</html>