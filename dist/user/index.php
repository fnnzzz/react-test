<?php
  date_default_timezone_set("America/Vancouver");

	$data = false;

	ini_set("display_errors", 1);
	ini_set("error_reporting", E_ALL | E_STRICT);

	// this is a demonstrator function, which gets called when new users register
	function registration_callback($username, $email, $userdir)
	{
		// all it does is bind registration data in a global array,
		// which is echoed on the page after a registration
		global $data;
		$data = array($username, $email, $userdir);
	}

	require_once("user.php");
	$USER = new User("registration_callback");
?>
<!DOCTYPE html>
<html>
	<head>
	

		<script type="text/javascript" src="js/sha1.js"></script>
		<script type="text/javascript" src="js/user.js"></script>
		<link rel="stylesheet" type="text/css" href="style.css"></link>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Регистрация</title>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cerulean/bootstrap.min.css">	

		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.0.7/remodal.min.css">
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.0.7/remodal-default-theme.min.css">

		<script type="text/javascript" src="php_registration/js/sha1.js"></script>
		<script type="text/javascript" src="php_registration/js/user.js"></script>

		<script   
			src="https://code.jquery.com/jquery-2.2.3.min.js"   
			integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   
			crossorigin="anonymous">
		</script>




	</head>

	<body>

	<div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="dist/#" class="navbar-brand">Medicine</a><button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="navbar-collapse collapse" id="navbar-main"><ul class="nav navbar-nav"><li><a href="/dist/#" class="active_link_header">Main page</a></li><li><a href="/dist/#about">About page</a></li><li><a href="/dist/#contacts">Contacts</a></li></ul></div></div></div>


		

		<table style="width: 50%; margin: 100px auto;"><tr><td style="width: 24em; padding-top:1em;">
<?php		if(!$USER->authenticated) { ?>

			<!-- Allow a new user to register -->
			<form class="controlbox" name="Зарегистрироваться" id="registration" action="index.php" method="POST">
				<input type="hidden" name="op" value="register"/>
				<input type="hidden" name="sha1" value=""/>
				<table>
					<tr><td>имя пользователя</td><td><input type="text" name="username" value="" /></td></tr>
					<tr><td>email </td><td><input type="text" name="email" value="" /></td></tr>
					<tr><td>пароль </td><td><input type="password" name="password1" value="" /></td></tr>
					<tr><td>подтвердить пароль </td><td><input type="password" name="password2" value="" /></td></tr>
				</table>
				<input type="button" value="зарегистрироваться" onclick="User.processRegistration()"/>
			</form>
<?php 		}

			if(!$USER->authenticated) { ?>
			
			<br><br>

			<!-- Allow a user to log in -->
			<form class="controlbox" name="Войти" id="login" action="index.php" method="POST">
				<input type="hidden" name="op" value="login"/>
				<input type="hidden" name="sha1" value=""/>
				<table>
					<tr><td>имя пользователя </td><td><input type="text" name="username" value="" /></td></tr>
					<tr><td>пароль </td><td><input type="password" name="password1" value="" /></td></tr>
				</table>
				<input type="button" value="войти" onclick="User.processLogin()"/>
			</form>
<?php 		}


			if($USER->authenticated) { ?>

			<script type="text/javascript" charset="utf-8">
				localStorage.setItem('loggedIn', true);	
				localStorage.setItem('loggedName', '<?php echo $_SESSION["username"]; ?>');	
			</script>

			<!-- Log out option -->
			<form class="controlbox" name="Аккаунт" id="logout" action="index.php" method="POST">
				<input type="hidden" name="op" value="logout"/>
				<input type="hidden" name="username"value="<?php echo $_SESSION["username"]; ?>" />
				<p>Вы вошли в систему как <?php echo $_SESSION["username"]; ?></p>

				<br>
				<p>Теперь вы можете <a href="/dist">вернуться на сайт</a> и совершать покупки.</p>
				<input type="submit" onclick="localStorage.removeItem('loggedIn');" value="Выйти"/>
			</form>
<?php 		}

?>


		</td></tr><table>



	</body>
</html>