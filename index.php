<?php
	include("savedata.php");
	$user=$_SESSION['username'];

	if (isset($_GET['edit'])) {
		$id = $_GET['edit'];
		$update = true;
		$record = mysqli_query($connect, "SELECT id, name, achieve, budget FROM wishlist WHERE id=$id AND
		username='$user' ");

		if (count($record) == 1 ) {
			$n = mysqli_fetch_array($record);
			$namee = $n['name'];
			$achieve=$n['achieve'];
			$budget=$n['budget'];
			$id=$n['id'];
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Your wish list</title>
	<link rel="stylesheet" type="text/css" href="indexcreate.css">
</head>
<body>
	<div id="header">
		<div class="container">
			<a id ="header-title" href="#" style="color: #6E3D38;">SAVABLE</a>
			<ul id="header-nav">
				<li>Home</li>
				<li><a href="about.php">About</a></li>
				<li><a href="contact.php">Contact</a></li>
				<li>Hi <?php echo $_SESSION["name"] ?></li>
				<li><a href="logout.php">Log out</a></li>
			</ul>
		</div>
	</div>

	<div id="content">

		<?php $results=mysqli_query($connect, "SELECT * FROM wishlist WHERE username='$user'");?>

		<table>
			<thead>
					<tr>
						<th>Name</th>
						<th>Goal</th>
						<th>Achieve</th>
						<th colspan="3">Action</th>
					</tr>
			</thead>
			<?php while ($row=mysqli_fetch_array($results, MYSQLI_ASSOC)) { ?>
				<tr>
					<td><?php echo $row['name']; ?></td>
					<td><?php echo $row['achieve']; ?></td>
					<td><?php echo $row['budget']; ?></td>
					<td>
						<a href="index.php?edit=<?php echo $row['id']; ?>" class="edit_btn">Edit</a>
					</td>
					<td>
						<a href="delete.php?id=<?php echo $row['id']; ?>" class="del_btn">Delete</a>
					</td>
				</tr>
				<?php } ?>
		</table>

		<form action="savedata.php" method="post">
			 <!-- newly added field -->
			<input type="hidden" name="id" value="<?php echo $id; ?>">
			<div class="input-group">
				<label>Name</label>
				<input type="text" name="namee" value="<?php echo $namee; ?>">
			</div>
			<div class="input-group">
				<label>Achieve</label>
				<input type="number" name="achieve" value="<?php echo $achieve; ?>">
			</div>
			<div class="input-group">
				<label>Budget</label>
				<input type="number" name="budget" value="<?php echo $budget; ?>">
			</div>
			<div class="input-group">
				<?php if ($update == true): ?>
					<button class="btn" type="submit" name="update" style="background: #556B2F;" >Update</button>
				<?php else: ?>
					<button class="btn" type="submit" name="save" >Save</button>
				<?php endif ?>
			</div>

		</form>
	</div>

	<div id="footer">
		<div class="container">
			<div class="column">
				<h4>Contact information</h4>
				<p><a href="#">Pham Minh Long</a></p>
				<p><a href="https://github.com/PhuongPhg">Trinh Thao Phuong</a></p>
			</div>
			<div class="column">
				<h4>SAVABLE</h4>
				<p>Save the able!</p>
			</div>
		</div>
	</div>
</body>
</html>
