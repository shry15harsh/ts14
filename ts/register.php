<!DOCTYPE html>
<html>
  <head>
    <title>Registration for TechSpardha 2014</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/register.css" rel="stylesheet">
	<meta property="og:title" content="Registration for TechSpardha-2014, NIT Kurukshetra (28-31 March)" /> 
	<meta property="og:site_name" content="TechSpardha-14"/>
	<meta property="og:url" content="http://techspardha.org/register.php"/>
	<meta name="description" property="og:description"     content="The larger the dream, the more important the team. TechSpardha is annual technical fest of NIT Kurukshetra." /> 
	<meta property="og:image"     content="http://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn2/t1/1506060_279964482159500_746667693_n.jpg" /> 
  </head>
  <body>
	<form class="register">
		<h1 class="details">Please fill up the form below to register for TechSpardha 2014.</h1>
		<input type="text" name="name" placeholder="Full Name"/>
		<input type="text" name="college" placeholder="College/Institute"/>
		<select name="course" id="course">
			<option value="btech">B.Tech/B.E.</option>
			<option value="other">Other</option>
		</select>
		<input type="text" name="otherCourse" id="otherCourse" placeholder="Course"/>
		<label>Year</label>
		<select name="year" id="year">
			<option value="first">1</option>
			<option value="second">2</option>
			<option value="third">3</option>
			<option value="fourth">4</option>
		</select>
		<input type="text" name="college" placeholder="Branch, e.g., IT"/>
		<input type="tel" name="number" placeholder="Mobile Number"/>
		<input type="email" name="email" placeholder="E-Mail Address"/>
		<input type="button" name="submit" id="submit" value="Submit"/>
	</form>
	<div class="icon"><img src="images/ts_icon.png"></div>
    <script src="js/jquery.js"></script>
    <script src="js/register.js"></script>
  </body>
</html>