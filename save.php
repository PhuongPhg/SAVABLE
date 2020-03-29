<?php
$username = "id13053030_trialsavable"; // Khai báo username
$password = "**********";      // Khai báo password
$server   = "localhost";   // Khai báo server
$dbname   = "id13053030_trialsavable";      // Khai báo database

// Kết nối database tintuc
$connect = new mysqli($server, $username, $password, $dbname);

//Nếu kết nối bị lỗi thì xuất báo lỗi và thoát.
if ($connect->connect_error) {
    die("Không kết nối :" . $conn->connect_error);
    exit();
}

//Khai báo giá trị ban đầu, nếu không có thì khi chưa submit câu lệnh insert sẽ báo lỗi
$name = "";
$usernamee = "";
$email = "";
$passwordd = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["name"])) { $name = $_POST['name']; }
    if(isset($_POST["user-name"])) { $usernamee = $_POST['user-name']; }
    if(isset($_POST["email"])) { $email = $_POST['email']; }
    if(isset($_POST["pass-word"])) { $password = $_POST['pass-word']; }
}


    //Code xử lý, insert dữ liệu vào table
    $sql = "INSERT INTO UserAccount (name, username, email, password)
    VALUES ('$name', '$usernamee', '$email', '$passwordd')";

    if ($connect->query($sql) === TRUE) {
        echo "Success";
    } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }

//Đóng database
$connect->close();
require("contact.html");
?>