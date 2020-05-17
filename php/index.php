<?php
    include("delete.php");
	include("savedata.php");
	$user=$_SESSION['username'];

	if (isset($_GET['edit'])) {
		$id = $_GET['edit'];
		$update = true;
		$record = mysqli_query($connect, "SELECT id, name, achieve, budget FROM wishlist WHERE id=$id AND
		username='$user' ");

			$n = mysqli_fetch_array($record);
			$namee = $n['name'];
			$achieve=$n['achieve'];
			$budget=$n['budget'];
			$id=$n['id'];
		}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Your wish list</title>
	<link rel="stylesheet" type="text/css" href="../css/indexcreate.css">
</head>
<body>
	<div id="header">
		<div class="container">
			<a id ="header-title" href="#" style="color: #6E3D38;">SAVABLE</a>
			<ul id="header-nav">
				<li>Home</li>
				<li><a href="about.php">About</a></li>
				<li><a href="contact.php">Contact</a></li>
				<li><a href="userinfo.php">Hi <?php echo $_SESSION["name"] ?></a></li>
				<li><a href="logout.php">Log out</a></li>
			</ul>
		</div>
	</div>

	<div id="content">
	   
	    <div class="container">
		<?php $results=mysqli_query($connect, "SELECT * FROM wishlist WHERE username='$user'order by (achieve/budget*100) DESC");?>

		<table align="center" class="center-table" style="width: 80%">
			<thead>
					<tr>
						<th>Name</th>
						<th>Achieve</th>
						<th>Goal</th>
						<th>Process</th>
						<th colspan="2">Action</th>
					</tr>
			</thead>
			<?php while ($row=mysqli_fetch_array($results)) { ?>
				<tr>
					<td><?php echo $row['name']; ?></td>
					<td><?php echo number_format($row['achieve']); ?></td>
					<td><?php echo number_format($row['budget']); ?></td>
					<td>
					    <?php $phan_tram= $row['achieve']/$row['budget']*100;
					    echo number_format($phan_tram,2, '.', ' ')." %"; ?>
					</td>
					<td>
						<a href="index.php?edit=<?php echo $row['id']; ?>" class="editt_btn">Edit</a>
					</td>
					<td>
						<a href="delete.php?del=<?php echo $row['id']; ?>" class="del_btn">Delete</a>
					</td>
				</tr>
				<?php } ?>
		</table>

		<form action="savedata.php" method="post">
			 <!-- newly added field -->
			<input type="hidden" name="id" value="<?php echo $id; ?>">
			<div class="input-group">
				<label>Name</label>
				<input type="text" name="namee" value="<?php echo $namee; ?>" required>
			</div>
			<div class="input-group">
				<label>Achieve</label>
				<input type="number" name="achieve" value="<?php echo $achieve; ?>">
			</div>
			<div class="input-group">
				<label>Budget</label>
				<input type="number" id =" thisBudget" name="budget" value="<?php echo $budget; ?>" min="1" title="Fill the budget different from 0" required>
			</div>
			<div class="input-group">
				<?php if ($update == true): ?>
					<button class="btn" type="submit" name="update" style="background: #556B2F;" >Update</button>
				<?php else: ?>
					<button class="btn" type="submit" name="save" >Save</button>
				<?php endif ?>
			</div>
			</div>
		</form>
		
	</div>

	<div id="footer">
		<div class="container">
			<div class="column">
				<h4>Contact information</h4>
				<p><a href="https://github.com/s0ys4uc3">Pham Minh Long</a></p>
				<p><a href="https://github.com/PhuongPhg">Trinh Thao Phuong</a></p>
			</div>
			<div class="column">
				<h4>SAVABLE</h4>
				<p>Save the able!</p>
			</div>
		</div>
	</div>

	<script>
		window.onscroll = function() {myFunction()};

		var header = document.getElementById("header");
		var sticky = header.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			} else {
				header.classList.remove("sticky");
			}
		}
	</script>
</body>
</html>
