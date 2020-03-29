<!DOCTYPE html>
<html>

<head>
  <title>SAVABLE</title>
  <link rel="stylesheet" type="text/css" href="style.css">
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
        <li>Home</li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li>Hi <?php echo $_POST['name'] ?></li>
      </ul>
    </div>
  </div>

  <div id="content">
    <div class="content-container">
      <div id="img-introduction">
        <img src="imgintro.jpg">
      </div>
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
