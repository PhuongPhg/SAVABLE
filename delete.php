<?php
require("connection.php");
$id=$_REQUEST['id'];
mysqli_query($connect, "DELETE FROM wishlist WHERE id=$id");
header('location: index.php');
exit;
 ?>
