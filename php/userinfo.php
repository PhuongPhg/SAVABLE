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
                    <li>Hi <?php echo $_SESSION['name'] ?></li>
                    <li><a href="logout.php">Log out</a></li>
                </ul>
            </div>
        </div>

        <div id="content">
            <div id="user-logo">
                <img src="../images/user.svg" >
            </div>
            
            <div id="name">
              <p><?php echo $_SESSION['name'] ?></p>
            </div>

            <div id="inforow">
                <div id="userd">
                    <img src="../images/identity.svg">
                    Information
                </div>
                <div id="achieve" onclick="location.href='userachieve.php';" style="cursor: pointer;">
                    <img src="../images/achieve.svg">
                    Achievement
                </div>
                <div id="progress" onclick="location.href='userprogress.php';" style="cursor: pointer;">
                    <img src="../images/notes.svg">
                    Progress
                </div>
            </div>

            <div id="maininfo">
                <p><b>Username: </b><?php echo $_SESSION["username"] ?></p>
                <br>
                <p><b>Year of birth: </b><?php echo $_SESSION["yearofbirth"] ?></p>
                <br>
                <p><b>Email: </b><?php echo $_SESSION["email"] ?></p>
                <br>
                <p><b>Status: </b>Activated</p>
            </div>
        </div>
    </body>
</html>