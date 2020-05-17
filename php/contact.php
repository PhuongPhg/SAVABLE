<?php session_start();
?>

<!DOCTYPE html>
<html>
<head>
  <title>Contact SAVABLE</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
  <style>
    img{
      display: block;
      width: 50%;
      height: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>

<body>
  <div id="header">
    <div class="container">
      <a id ="header-title" href="index.php" style="color: #6E3D38;">SAVABLE</a>
      <ul id="header-nav">
        <li><a href="index.php">Home</a></li>
        <li> <a href="about.php">About</a> </li>
        <li>Contact</li>
        <li><a href="userinfo.php">Hi <?php echo $_SESSION["name"] ?></a></li>
        <li><a href="logout.php">Log out</a></li>
      </ul>
    </div>
  </div>

  <div id="content">

    <div class="contact-content">
      <br><br><br>
          <h1>Contact us!</h1>
          <br>
          <br>
          <p><a href="mailto:thaophuong.trinh.9@gmail.com">Trinh Thao Phuong</a></p>
          <p><a href="mailto:vaicasam@gmail.com">Pham Minh Long</a></p>
          <br>
          <br>
          <br>
          <br>
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
