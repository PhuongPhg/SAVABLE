<?php session_start();
  $_SESSION['name']=$_POST['name'];
  $_SESSION['username']=$_POST['user-name'];
?>

<!DOCTYPE html>
<html>
<head>
  <title>Contact SAVABLE</title>
  <link rel="stylesheet" type="text/css" href="style.css">
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
        <li>Hi <?php echo $_SESSION["name"] ?></li>
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

</body>
</html>
