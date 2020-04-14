<?php

include("connection.php");

session_start();

header('Content-Type: text/html; charset=UTF-8');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	include "connection.php";
	$imeol = "";
	if(isset($_POST["imeo"])){
		$imeol = $_POST["imeo"];
	}
}

if($imeol == ""){
	echo "Please provide your email address! <a href='javascript: history.go(-1)'>Return</a>";
	exit;
}

$sql=("SELECT email, username, name, password FROM UserAccount WHERE email='$imeol'");
$kt=mysqli_query($connect, $sql);
if (mysqli_num_rows($kt) == 0) {
echo "Please provide your email address associated with your SAVABLE account! <a href='javascript: history.go(-1)'>Return</a>";
exit;
}

$row = mysqli_fetch_array($kt);

$_SESSION['name'] = $row['name'];
$_SESSION['email'] = $_POST['imeo'];
$_SESSION['username'] = $row['username'];

require("help2.html");
die();

?>