<!DOCTYPE HTML>
<html>
<head>
	<link rel="icon" type="image/svg" href="img/logo.jpg">
	<meta charset="UTF-8">
    <meta name="viewport" content="width=480">
	<title>Silvia's Art</title>
	<!-- css -->
	 <link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- fonts -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
	<!-- js -->
	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
	<script>
  		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-71624396-3', 'auto');
  		ga('send', 'pageview');
	</script>
	<div class="main" id="main1">
		<div id="firbac">
			<div class="bac" id="g">
			</div>
			<div class="bac" id="p">
			</div>
		</div>
		<div id="main1title">
			<span>Silvia Salvagno Art</span>
		</div>
	</div>
	<div class="main" id="main2">
	</div>
	<div class="main" id="main3">
		<div id="me"></div>
		<div id="metxt">
			<p>				
				I am an Argentinean Artist.
				<br>
				My paintings tell stories
				<br>
				About my life, my modern nomad life,
				<br>
				About the life that surrounds me
				<br>
				About the places and people I met
				<br>
				And left lasting impressions in my soul
				<br>
				Everyone of them transformed me
				<br>
				I keep discovering myself through people and cultures that embraced me
				<br>
				My paintings allow me to show my deepest feelings and curiosity, in a way words can’t.				 
				<br>
				I am thankful to this life that gives me the opportunity to explore the world and the myriad of cultures and colors around it.
			</p>
		</div>
	</div>
	<div class="main" id="main4">
		<div id="form">
			<h2>Email Me</h2>
			<form target="framename" action="https://formspree.io/silvia.salvagno.art@gmail.com" method="POST">
				<h3><span style="color:red;">*</span>Name:</h3>
				<input class="line" type="text" name="name" required>
				<h3><span style="color:red;">*</span>Email:</h3>
				<input class="line" type="email" name="_replyto" required>
				<h3><span style="color:red;">*</span>Text:</h3>
				<textarea class="depth" name="text" cols="25" rows="5" required></textarea><br>
				<input type="submit" value="Send">
			</form>
		</div>
	</div>
	<div class="fb-like" data-href="https://www.facebook.com/Silvia-Salvagno-Art-1423412684626329/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
	<nav>
		<div id="li1" onclick="changemain(1)">
			<p>Silvia's Art</p>
			<img src="img/underline.jpg">
		</div>
		<div id="li2" onclick="changemain(2)">
			<p>Gallery</p>
			<img src="img/underline.jpg">
		</div>
		<div id="li3" onclick="changemain(3)">
			<p>About</p>
			<img src="img/underline.jpg">
		</div>
		<div id="li4" onclick="changemain(4)">
			<p>Contact</p>
			<img src="img/underline.jpg">
		</div>
	</nav>
</body>
</html>