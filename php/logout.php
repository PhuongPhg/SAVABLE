<?php
  session_start();
  unset($_SESSION["name"]);
  unset($_SESSION['username']);
  unset($_SESSION["email"]);
  header("Location:..\index.html");
?>
