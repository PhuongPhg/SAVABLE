<?php
session_start();
include "connection.php";

$nickname = $_SESSION["username"];

$todo = 0;
$achievedd = 0;
$targett = 0;

$todolist = mysqli_query($connect, "SELECT COUNT(id) FROM wishlist WHERE username =   '$nickname';");
while ($row = $todolist->fetch_assoc()) {
    $todo = $row['COUNT(id)'];
}

$achieved = mysqli_query($connect, "SELECT SUM(achieve) FROM wishlist WHERE username ='$nickname';");
while ($row = $achieved->fetch_assoc()) {
    $achievedd = $row['SUM(achieve)'];
}

$target = mysqli_query($connect, "SELECT SUM(budget) FROM wishlist WHERE username =   '$nickname';");
while ($row = $target->fetch_assoc()) {
    $targett = $row['SUM(budget)'];
}

$percentage= ($achievedd/$targett)*100;

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Profile</title>
        <link rel="stylesheet" type="text/css" href="../css/userprofile.css">
    </head>
    <body>
        <div id="header">
            <div class="container">
                <a id ="header-title" href="index.php" style="color: #6E3D38;">SAVABLE</a>
                <ul id="header-nav">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li>Hi <?php echo $_SESSION["name"] ?></li>
                    <li><a href="logout.php">Log out</a></li>
                </ul>
            </div>
        </div>

        <div id="content">
            <div id="user-logo">
                <img src="../images/user.svg" >
            </div>
            
            <div id="name">
              <p><?php echo $_SESSION["name"] ?></p>
            </div>

            <div id="inforow">
                <div id="user" onclick="location.href='userinfo.php';" style="cursor: pointer;">
                    <img src="../images/identity.svg">
                    Information
                </div>
                <div id="achieve" onclick="location.href='userachieve.php';" style="cursor: pointer;">
                    <img src="../images/achieve.svg">
                    Achievement
                </div>
                <div id="progressd">
                    <img src="../images/notes.svg">
                    Progress
                </div>
            </div>

            <div id="mainprogress">
                <p><b>To-do:   </b><?php echo $todo; ?></p>
                <p><b>Total saved:   </b><?php echo number_format($achievedd,0, '', ','); ?> VND</p>
                <p><b>Total target:   </b><?php echo number_format($targett,0, '', ','); ?> VND</p>
                <div>
                    <div id = "achievetext">
                        <p>ACHIEVED: <?php echo number_format($percentage,2, '.', ' ')." %"; ?></p>
                    </div>
                    <div id="myProgress">
                        <div id="myBar" style="width: <?php echo $percentage; ?>%"></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>