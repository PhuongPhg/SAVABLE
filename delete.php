<?php
require("connection.php");
if (isset($_GET['del'])) {
	$id = $_GET['del'];
	mysqli_query($connect, "DELETE FROM wishlist WHERE id=$id");
	header('location: index.php');
	exit;
}

 ?>
