<?php
$_SESSION['name']=$_POST['name']
?>
<!DOCTYPE html>
<html>

<head>
  <title>SAVABLE</title>
  <link rel="stylesheet" type="text/css" href="../css/welcome.css">
  <style>
    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  </style>
</head>

<body>
  <div id="header">
    <div class="container">
      <a id ="header-title" href="index.html" style="color: #6E3D38;">SAVABLE</a>
      <ul id="header-nav">
        <li><a href="">Home</a></li>
        <li><a href="about.php">About</a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="userinfo.php">Hi <?php echo $_SESSION["name"] ?></a></li>
        <li><a href="logout.php">Log out</a></li>
      </ul>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <div class="hovereffect">
        <img class="img-responsive" src="../images/imgintro.jpg" width="100%" height="100%">
            <div class="overlay">
              <br>
                <h2>Achieve your goals</h2>
                <p>
                    <a href="index.php"> >> Click here! << </a>
                </p>
            </div>
        </div>
    </div>
  </div>

  <div id="footer">
    <div class="container">
      <div class="column">
        <h4>Contact information</h4>
        <p><a href="https://github.com/s0ys4uc3">Pham Minh Long</a></p>
        <p><a href="https://github.com/PhuongPhg">Trinh Thao Phuong</a></p>
      </div>

      <div class="column">
        <h4>SAVABLE</h4>
        <p>Save the able!</p>
      </div>

    </div>
  </div>
  <script>
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  </script>
</body>
</html>
