# ASA MUSIC PLAYER 
The A.S.A. Music Player is a project created for CIS 472 Software Engineering. The goal of our music player is to create a convenient website where users can listen to music. There are
several features that have been incorporated and removed from the music player throughout the duration of the project.  A.S.A. music player is a website that allows the users to select a song from genre, search for a song using a search bar, sign up for a membership
to use the service, sign in for a membership to use the music service. The music playeris also able to  play, pause,scrub, next, and rewind.
 
The code can be run on repl.it 


# Code 


body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(201, 201, 201, 0.62);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #222;
  color: white;

}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;

}

.title {
  color: white;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #FFF;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}
 168  about.html 
@@ -0,0 +1,168 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="about.css">

<style>
  /* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

</style>
</head>
<body>

<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->

  <a href="login.htm" "#login" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-bars w3-xxlarge"></i>
    <p>LOGIN</p>
  </a>

  <a href="home.htm" "#main" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="music.htm" "#music" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>MUSIC</p>
  </a>
  <a href="about.htm" "#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>

</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>


  </div>
</div>



<div class="w3-padding-large" id="about">
  <div class="w3-padding-64 w3-content" id="home">
    <div class="about-section">
      <h1>ABOUT US</h1>
      <p>Project Description</p>
      <p>For this project, we are creating a music player than can play, rewind, 
	fast forward, pause, replay and stop playing a song. Additional functions include 
	adding a progress meter that moves across the page as the music plays, showing the 
	album cover while the music plays, randomly selecting another song from a different 
	artist.</p>
  </div>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <a href="https://ibb.co/vXwJMxY"><img src="https://i.ibb.co/VwjvkWm/aboutme-PHOTO-AK.jpg" 
	 width="200" height="250"alt="aboutme-PHOTO-AK" border="0"></a>
      <div class="container">
        <h2 style="color: white">Angela Kihiko</h2>
        <p class="title">Creator</p>
        <p style="color: white">Hello! My name is Angela Kihiko. I am a computer scientist and musician from Louisville, KY. 
	In high school, I was the first chair in my symphonic band. 
	Since then, I am finding ways to combine my loves of music and technology. 
	At Spelman College, I have had several opportunities to make such connections. 
	I am creating my own soundboards, coding music sounds, 
	and now creating a virtual music player with my colleagues.</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <a href="https://ibb.co/dLM6fW9"><img src="https://i.ibb.co/dLM6fW9/Mimmi.jpg" 
	 width="240" height="250" alt="Mimmi" border="0"></a>
      <div class="container">
        <h2 style="color: white">Stephanie Obwar</h2>
        <p class="title">Creator</p>
        <p style="color: white">I believe that the greatest benefit of using music is as a therapeutic 
	idiom in any setting is that fact that music and sound helps us make connections. 
	Connections to others, connections to thoughts and feelings and, perhaps most importantly, 
	connections to ourselves. Music can help us retrieve and find the real self that is still inside, 
	even when confusion may take over.As a computer science major and a self proclaimed music connoisseur, 
	i was more than glad to create and join a team that has the same passion as me and work on this 
	project together and make everyone realize that Music is a moral law. It gives soul to the universe, 
	wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.” — Plato.</p> 
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <a href="https://ibb.co/h2Zc5Cb"><img src="https://i.ibb.co/JryqLCV/aboutme-PHOTO.jpg" 
	 width="190" height="250" alt="aboutme-PHOTO" border="0"></a>
      <div class="container">
        <h2 style="color:white">Angela Stewart</h2>
        <p class="title">Creator</p>
        <p style="color: white">I’m a just cool kid at Spelman College majoring in Computer Science. 
	I have always been a techy nerd and a music lover. I grew up singing in choirs 
	and acting in musicals by day, and playing tons of video games and browsing through 
	social media by night. There’s not a day that goes by that I am not listening to music, 
	singing a song, or not using my phone or computer. As I would play my video games, I always 
	had my music by my side. Similar to how music can help set the tone of a movie, I always used music 
	to set a tone for my life. It even sets a tone for my virtual gaming life as I play make believe 
	with my characters in the many RPG’s I’ve played. Music and technology have always been my escape 
	from reality. I am happy to be part of a team that wants to help others create their own realities 
	with our Music Player.</p>

      </div>
    </div>
  </div>
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
</div>

</body>
</html>
 39  home.css 
@@ -0,0 +1,39 @@
[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}

 155  home.html 
@@ -0,0 +1,155 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="index.css">
<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}


</style>






<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->

  <a href="login.html" "#login" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-bars w3-xxlarge"></i>
    <p>LOGIN</p>
  </a>

  <a href="home.html" "#main" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="music.html" "#music" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>MUSIC</p>
  </a>
  <a href="about.html" "#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
    <a href="#member" class="w3-bar-item w3-button" style="width:25% !important">JOIN</a>


  </div>
</div>

<!-- Page Content -->
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
<div class="w3-padding-small" id="main">

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
    <a href="#member" class="w3-bar-item w3-button" style="width:25% !important">JOIN</a>


  </div>
</div>




<!-- Page Content -->
<div class="w3-padding-large" id="main">
  <!-- Header/Home -->
  <header class="w3-padding-32 w3-center" id="home">
    <h1 class="w3-jumbo"><span class="w3-hide-small">A.S.A.</span> Playlist</h1>
    <p>Awesome, Sweet, Amazing</p>

 <!--<h3 class="w3-padding-16 w3-text-light-grey">Memebership</h3>
    <div class="w3-row-padding" style="margin:0 -16px"> 
    <div class="w3-half w3-margin-bottom">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">Student</li>
          <li class="w3-padding-16">Endless Streaming</li>
          <li class="w3-padding-16">No Ads</li>
         
          <li class="w3-padding-16">
            <h2>$ 2.99</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black"
	     onclick="window.location.href='member.htm'">Sign Up</button>
          </li>
        </ul>
      </div>
      <div class="w3-half">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">General</li>
          <li class="w3-padding-16">Endless Streaming</li>
          <li class="w3-padding-16">No Ads</li>
          <li class="w3-padding-16">
            <h2>$ 9.99</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black"
	     onclick="window.location.href='member.htm'">Sign Up</button>
          </li>
        </ul>
      </div>
    <!-- Footer 
  <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  <!-- End footer 
  </footer>
</body>
<!-- END PAGE CONTENT -->
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
</div>
</head>
</body>
</html>





 27  index.css 
@@ -0,0 +1,27 @@
[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}
 153  index.html 
@@ -0,0 +1,153 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="index.css">
<style>

 body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}







</style>

<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) --> 
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->

  <a href="login.html" "#login" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-bars w3-xxlarge"></i>
    <p>LOGIN</p>
  </a>

 <!--- <a href="index.html" "#main" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="Music.html" "#music" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>MUSIC</p>
  </a>-->
  <a href="about.html" "#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a> 
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
    <a href="#member" class="w3-bar-item w3-button" style="width:25% !important">JOIN</a>


  </div>
</div>

<!-- Page Content -->
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
<div class="w3-padding-small" id="main">

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
    <a href="#member" class="w3-bar-item w3-button" style="width:25% !important">JOIN</a>


  </div>
</div>




<!-- Page Content -->
<div class="w3-padding-large" id="main">
  <!-- Header/Home -->
  <header class="w3-padding-32 w3-center" id="home">
    <h1 class="w3-jumbo"><span class="w3-hide-small">A.S.A.</span> Playlist</h1>
    <p>Awesome, Sweet, Amazing</p>

 <!--<h3 class="w3-padding-16 w3-text-light-grey">Memebership</h3>-->
    <div class="w3-row-padding" style="margin:0 -16px"> 
    <div class="w3-half w3-margin-bottom">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">Student</li>
          <li class="w3-padding-16">Endless Streaming</li>
          <li class="w3-padding-16">No Ads</li>

          <li class="w3-padding-16">
            <span class="w3-opacity">free first 6 months</span>
            <h2>$ 2.99</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black"
	     onclick="window.location.href='member.html'">Sign Up</button>
          </li>
        </ul>
      </div>

      <div class="w3-half">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">General</li>
          <li class="w3-padding-16">Endless Streaming</li>
          <li class="w3-padding-16">No Ads</li>

          <li class="w3-padding-16">
            <span class="w3-opacity">free first 6 months</span>
            <h2>$ 9.99</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black"
	     onclick="window.location.href='member.html'">Sign Up</button>
          </li>
        </ul>
      </div>



    <!-- Footer -->
  <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  <!-- End footer -->
  </footer>

<!-- END PAGE CONTENT -->
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
</div>
</head>
</body>
</html>



 3  index.js 
@@ -0,0 +1,3 @@



 98  login.css 
@@ -0,0 +1,98 @@
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
  color: white;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
 .signupbtn {
     width: 100%;
  }
}

[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
} 
 53  login.html 
@@ -0,0 +1,53 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="login.css">

<body>

<form action="home.html" style="border:1px solid #ccc">
  <div class="container">
    <h1>Log In</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>



    <div class="clearfix">

      <button type="submit" class="signupbtn">Log In</button>
    </div>
  </div>
</form>

</body>
</html>





<!-- partial -->
 <script  src="login.js"></script>






<div class="underlay-photo"></div>
<div class="underlay-black"></div> 


</html> 
 43  login.js 
@@ -0,0 +1,43 @@
$(document).ready(function() {

  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");

  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };

  $(document).on("click", ".login__submit", function(e) {
    if (animating) return;
    animating = false;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

}); 
 106  member.css 
@@ -0,0 +1,106 @@
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .signupbtn {
     width: 100%;
  }
}










[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
} 
 114  member.html 
@@ -0,0 +1,114 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="member.css">

<style>
 body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

</style>

<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->

  <a href="login.html" "#login" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-bars w3-xxlarge"></i>
    <p>LOGIN</p>
  </a>

 <!-- <a href="index.htm" "#main" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="Music.htm" "#music" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>MUSIC</p>
  </a>
  <a href="About.htm" "#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a> -->
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<!--<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>-->



  </div>
</div>

<!-- Page Content -->
<div class="underlay-photo"></div>
<div class="underlay-black"></div> 
<div class="w3-padding-small" id="main">






</head>
<body>

<form action="login.html" style="border:1px solid #ccc">
  <div class="container">
    <h1>ASA Subscription Form</h1>
    <p>Please fill in this form to create an account and register for membership.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <div class="clearfix">
      <button type="submit" class="signupbtn">Create Account</button>
    </div>
  </div>
</form>

</body>
</html>



</body>
</html>


<div class="underlay-photo"></div>
<div class="underlay-black"></div> 

<script src="member.js"></script>


</html> 
 43  member.js 
@@ -0,0 +1,43 @@
$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

}); 
 156  music.css 
@@ -0,0 +1,156 @@
body {
  background-color: lightgreen;

  /* Smoothly transition the background color */
  transition: background-color .5s;
}

.player {
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.details {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
}

.track-art {
  margin: 25px;
  height: 250px;
  width: 250px;
  background-image: url("https://images.pexels.com/photos/262034/pexels-photo-262034.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-size: cover;
  border-radius: 15%;
}

.now-playing {
  font-size: 1rem;
}

.track-name {
  font-size: 3rem;
}

.track-artist {
  font-size: 1.5rem;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.playpause-track, .prev-track, .next-track {
  padding: 25px;
  opacity: 0.8;

  /* Smoothly transition the opacity */
  transition: opacity .2s;
}

.playpause-track:hover, .prev-track:hover, .next-track:hover {
  opacity: 1.0;
}

.slider_container {
  width: 75%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modify the appearance of the slider */
.seek_slider, .volume_slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 5px;
  background: white;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

/* Modify the appearance of the slider thumb */
.seek_slider::-webkit-slider-thumb, .volume_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
}

.seek_slider:hover, .volume_slider:hover {
  opacity: 1.0;
}

.seek_slider {
  width: 60%;
}

.volume_slider {
  width: 30%;
}

.current-time, .total-duration {
  padding: 10px;
}

i.fa-volume-down, i.fa-volume-up {
  padding: 10px;
}

i.fa-play-circle, i.fa-pause-circle, i.fa-step-forward, i.fa-step-backward {
  cursor: pointer;
}







[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: url('https://i.ibb.co/4J5C0Yq/background-photo.jpg');
  background-size: cover;
  -webkit-filter: grayscale(30%);
  z-index: -1;
}
.underlay-black {
  background: rgba(17,29,49,0.33);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
} 





 104  music.html 
@@ -0,0 +1,104 @@
<!DOCTYPE html>
<html>
<title>ASA MUSIC</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="music.css">

<style>

/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
</style>
</head>
<body>


<body class="w3-black">

<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->

  <a href="login.html" "#login" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-bars w3-xxlarge"></i>
    <p>LOGIN</p>
  </a>

  <a href="index.html" "#main" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#music" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>MUSIC</p>
  </a>
  <a href="about.html" "#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>

</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="#music" class="w3-bar-item w3-button" style="width:25% !important">MUSIC</a>
    <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>



  </div>
</div>
<!----------page content-------------->
<div class="underlay-photo"></div>
<div class="underlay-black"></div>



<div class="w3-padding-large" id="home">
  <div class="w3-padding-64 w3-content" id="music">
       <!-- Load FontAwesome icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

  <!-- Load the custom CSS style file -->
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="player">
    <div class="details">
      <div class="now-playing">PLAYING x OF y</div>
      <div class="track-art"></div>
      <div class="track-name">Track Name</div>
      <div class="track-artist">Track Artist</div>
    </div>
    <div class="buttons">
      <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
      <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i></div>
      <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
    </div>
    <div class="slider_container">
      <div class="current-time">00:00</div>
      <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
      <div class="total-duration">00:00</div>
    </div>

  </div>

<script src="music.js"></script>


<!-- END PAGE CONTENT -->

</div>
</body>
</html>
 155  music.js 
@@ -0,0 +1,155 @@

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },

];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
