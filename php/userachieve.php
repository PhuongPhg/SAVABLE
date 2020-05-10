<?php
session_start();
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
                <div id="achieved">
                    <img src="../images/achieve.svg">
                    Achievement
                </div>
                <div id="progress" onclick="location.href='userprogress.php';" style="cursor: pointer;">
                    <img src="../images/notes.svg">
                    Progress
                </div>
            </div>

            <div id="mainachieve">
                <p><img src="../images/done.svg">Newbie!</p>
            </div>
        </div>
    </body>
</html>