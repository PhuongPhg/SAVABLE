<?php session_start();
?>

<!DOCTYPE html>
<html>
<head>
  <title>About SAVABLE</title>
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
        <li>About</li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="userinfo.php">Hi <?php echo $_SESSION["name"] ?></a></li>
        <li><a href="logout.php">Log out</a></li>
      </ul>
    </div>
  </div>

  <div id="content">
    <img src="../images/logo-background.jpg">
    <div class="about-content">
      <br><br>
        <p><strong>This application help you manage your own money and achieve the goals!</strong></p>
        <div class="more-detail">
          <br>
          <br>
          <p><a href="https://github.com/PhuongPhg/SAVABLE/blob/master/SAVABLE_proposal.md">More detail!</a></p>
          <br>
          <br>
          <br>
        </div>
    </div>
  </div>

  <div id="footer">
    <div class="container">

    </div>
  </div>
</body>
</html>
