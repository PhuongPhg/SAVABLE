<?php
include("connection.php");

session_start();
$namee="";
$achieve=0;
$budget=0;
$id = 0;
$update = false;
$userr=$_SESSION['username'];


	if (isset($_POST['save'])) {
	$namee = $_POST['namee'];
    $achieve=$_POST['achieve'];
    $budget=$_POST['budget'];

    mysqli_query($connect,"INSERT INTO wishlist (id, username, name, achieve, budget) VALUES($id, '$userr', '$namee', $achieve, $budget)");
		header('location: index.php');
		exit;
	}
  if (isset($_POST['update'])) {
		$id = $_POST['id'];
		$namee = $_POST['namee'];
		$achieve = $_POST['achieve'];
  	$budget=$_POST['budget'];

	mysqli_query($connect, "UPDATE wishlist SET name='$namee', achieve=$achieve, budget=$budget WHERE id=$id");
	header('location: index.php');
	exit;
  }

}
?>
