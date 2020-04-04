<?php

include "connection.php";
//Khai báo sử dụng session
session_start();
//Khai báo utf-8 để hiển thị được tiếng việt
header('Content-Type: text/html; charset=UTF-8');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include "connection.php";
  $usernamee="";
  $passwordd="";
  if(isset($_POST["user-name"])) {
    $usernamee=$_POST["user-name"];
    $email=$_POST["email"];
  }
  if(isset($_POST["pass-word"])) { $passwordd=$_POST["pass-word"];}
}
if($usernamee=="" || $passwordd=="") {
  echo "Some information is missing. Check it again! <a href='javascript: history.go(-1)'>Return</a>";
  exit;
}
//Kiểm tra tên đăng nhập có tồn tại không
$sql=("SELECT username, password FROM UserAccount WHERE username='$usernamee'");
$kt=mysqli_query($connect, $sql);
if (mysql_num_rows($kt) == 0) {
echo "This username does not exist. Check it again! <a href='javascript: history.go(-1)'>Return</a>";
exit;
}
//Lấy mật khẩu trong database ra
$row = mysqli_fetch_array($kt);
//So sánh 2 mật khẩu có trùng khớp hay không
if ($passwordd != $row['password']) {
echo "Wrong password. Check it again! <a href='javascript: history.go(-1)'>Return</a>";
exit;
}

//Lưu tên đăng nhập
$_SESSION['username'] = $usernamee;
echo "Welcome back <b>" .$usernamee . "</b>. Success login! <a href=''>Log out</a>";
die();
}
?>
