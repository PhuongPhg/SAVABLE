<!DOCTYPE html>
<html>
  <head>
    <title>Welcome back</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="header">
      <div class="container">
        <a id ="header-title" href="#" style="color: #6E3D38;">SAVABLE</a>
        <ul id="header-nav">
          <li>Home</li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li>Hi <?php echo $_SESSION["name"] ?></li>
          <li><a href="logout.php">Log out</a></li>
        </ul>
      </div>
    </div>

    <div id="content">
      <div class="container">

      </div>
    </div>

    <div id="footer">
      <div class="container">
        <div class="column">
          <h4>Contact information</h4>
          <p><a href="">Pham Minh Long</a></p>
          <p><a href="https://github.com/PhuongPhg">Trinh Thao Phuong</a></p>
        </div>

        <div class="column">
          <h4>SAVABLE</h4>
          <p>Save the able!</p>
        </div>

      </div>
    </div>
  </body>
</html>
