<html>
<head>
<title>
Show bookmarks
</title>
<?php
	if (isset($_REQUEST["textarea1"]))
		$textarea1 = $_REQUEST["textarea1"];
	if (isset($_REQUEST["textarea2"]))
		$textarea2 = $_REQUEST["textarea2"];
?>

</head>
<body>
<table><tr><td>
<table><tr><td id="leftmenu">
</td><td>
<!-- Content starts here -->
<div class="main_content">
<?php
if (isset($textarea1)) {
    file_put_contents('../data/textarea1.txt', $textarea1);
    file_put_contents('../data/textarea2.txt', $textarea2);
} else {
	$textarea1 = file_get_contents('../data/textarea1.txt', true);
	$textarea2 = file_get_contents('../data/textarea2.txt', true);
}


?>

<form action="https://49.50.12.74/recaptcha" method="post">
<textarea name="textarea1" rows="20" cols="100">
<?php echo $textarea1 ?>
</textarea>
<br>
<textarea name="textarea2" rows="20" cols="100">
<?php echo $textarea2 ?>
</textarea>
<br>
<input type="submit" />

</form>
</div>
</td><td id="rightmenu">
</td></tr></table>
</td></tr></table>
</body>
</html>
