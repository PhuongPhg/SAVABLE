<?php

include "connection.php";

//Khai báo giá trị ban đầu, nếu không có thì khi chưa submit câu lệnh insert sẽ báo lỗi
$name = "";
$usernamee = "";
$email = "";
$passwordd = "";
$check=0;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["name"])) { $name = $_POST['name']; }
    if(isset($_POST["user-name"])) { $usernamee = $_POST['user-name']; }
    if(isset($_POST["email"])) { $email = $_POST['email']; }
    if(isset($_POST["pass-word"])) { $passwordd = $_POST['pass-word']; }
}
    if($name=="" || $usernamee=="" || $email=="" || $passwordd==""){
      echo "Some information is misssing. Do it again please!";
    }
    else {
    //Code xử lý, insert dữ liệu vào table
    $sql = "INSERT INTO UserAccount (name, username, email, password)
    VALUES ('$name', '$usernamee', '$email', '$passwordd')";

    if ($connect->query($sql) === TRUE) {
        echo "";
       $check=1;
    } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }
  }
//Đóng database
include "disconnection.php";
 if ($check==1){ require("welcome.php");}
?>
