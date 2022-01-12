<?php
    $outfile = $_REQUEST["filename"];
    if ($outfile > "") {
    	$command = "tar -xvf " . $outfile;
    	exec($command); 
    } else {
    	echo "Call this url with filename=zipfile";
    }
?>
