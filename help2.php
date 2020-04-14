<?php

include("connection.php");

session_start();

header('Content-Type: text/html; charset=UTF-8');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	include "connection.php";
	$newpass = "";
	$reenpass = "";
	if(isset($_POST["pass"])){
		$newpass = $_POST["pass"];
	}
	if(isset($_POST["reenterpass"])){
		$reenpass = $_POST["reenterpass"];
	}
}

if($newpass == ""||$reenpass == ""){
	echo "Please enter your new password! <a href='javascript: history.go(-1)'>Return</a>";
	exit;
}

if($newpass != $reenpass){
	echo "Re-enter password doesn't match your new password! <a href='javascript: history.go(-1)'>Return</a>";
	exit;
}

mysqli_query($connect, "UPDATE UserAccount SET password='$newpass' WHERE email=$_SESSION['email']");

require("index.php");
die();

?>