<?php
	$username = "id13053030_trialsavable"; // Khai báo username
	$password = "1032010320";      // Khai báo password
	$server   = "localhost";   // Khai báo server
	$dbname   = "id13053030_trialsavable";      // Khai báo database

	// Kết nối database 
	$connect = new mysqli($server, $username, $password, $dbname);

	//Nếu kết nối bị lỗi thì xuất báo lỗi và thoát.
	if ($connect->connect_error) {
    	die("Không kết nối :" . $conn->connect_error);
   	 exit();
	}
?>