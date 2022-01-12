<html>
<head>
<title>
Show bookmarks
</title>
<?php
	$q = $_REQUEST["q"];
	if (isset($_REQUEST["textarea1"]))
		$textarea1 = $_REQUEST["textarea1"];
	if (isset($_REQUEST["textarea2"]))
		$textarea2 = $_REQUEST["textarea2"];
	if (isset($_REQUEST["textarea3"]))
		$textarea3 = $_REQUEST["textarea3"];
	if (isset($_REQUEST["textarea4"]))
		$textarea4 = $_REQUEST["textarea4"];
	if (isset($_REQUEST["textarea5"]))
		$textarea5 = $_REQUEST["textarea5"];
	if (isset($_REQUEST["textarea6"]))
		$textarea6 = $_REQUEST["textarea6"];
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
    file_put_contents('../data/textarea3.txt', $textarea3);
    file_put_contents('../data/textarea4.txt', $textarea4);
    file_put_contents('../data/textarea5.txt', $textarea5);
    file_put_contents('../data/textarea6.txt', $textarea6);
} else {
	$textarea1 = file_get_contents('../data/textarea1.txt', true);
	$textarea2 = file_get_contents('../data/textarea2.txt', true);
	$textarea3 = file_get_contents('../data/textarea3.txt', true);
	$textarea4 = file_get_contents('../data/textarea4.txt', true);
	$textarea5 = file_get_contents('../data/textarea5.txt', true);
	$textarea6 = file_get_contents('../data/textarea6.txt', true);
}

if (! isset($q)) {
	$textarea1 = "";
	$textarea2 = "";
	$textarea3 = "";
	$textarea4 = "";
	$textarea5 = "";
	$textarea6 = "";
}

?>

<form method="post">
<input type="submit" /><br>
<textarea name="textarea1" rows="20" cols="100">
<?php echo $textarea1 ?>
</textarea>
<textarea name="textarea2" rows="20" cols="100">
<?php echo $textarea2 ?>
</textarea>
<textarea name="textarea3" rows="20" cols="100">
<?php echo $textarea3 ?>
</textarea>
<textarea name="textarea4" rows="20" cols="100">
<?php echo $textarea4 ?>
</textarea>
<textarea name="textarea5" rows="20" cols="100">
<?php echo $textarea5 ?>
</textarea>
<textarea name="textarea6" rows="20" cols="100">
<?php echo $textarea6 ?>
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
