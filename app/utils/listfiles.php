<html>
<head>
<title>
Show all files
</title>
<?php
	$folder = $_REQUEST["folder"];
?>

</head>
<body>
<table><tr><td>
<table><tr><td id="leftmenu">
</td><td>
<!-- Content starts here -->
<div class="main_content">
<?php
$fromdir = $folder;
$thelist = "<table>";
$thelist .= "<tr>";
$row = 0;
if ($handle = opendir($fromdir)) {
    while (false !== ($file = readdir($handle)))
    {
	   	 if ($file != "." && $file != "..")
        {
	    	$thelist .= "<td><a href='" . $fromdir . "/" . $file . "'>" . $fromdir . "/" . $file . "</a></td>";
	        $thelist .= "</tr><tr>";
	      	$row++;
        }
    }

    closedir($handle);
    $thelist .= '</table>';
}
?>
<?=$thelist?>
</div>
</td><td id="rightmenu">
</td></tr></table>
</td></tr></table>
</body>
</html>
