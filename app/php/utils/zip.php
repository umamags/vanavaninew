<?php
	echo "tar started..";
    $filename = $_REQUEST["filename"];
    if ($filename > "") {
	   	$command = "tar -cvf files.tar " . $filename;
	   	exec($command);
    } else {
    	echo "Call this url with filename=directory";
    } 
	echo "tar ended<BR>";
?>
<a href="files.tar">Click here to get the zip</a>