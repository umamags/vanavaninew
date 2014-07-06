<?php
$folderName = "2014_career_fair";
if (isset($_REQUEST["folderName"]))
	$folderName = $_REQUEST["folderName"];
   
$fromdir = "../images/" . $folderName;

$results = array();
$row = 0;
if ($handle = opendir($fromdir)) {
    while (false !== ($file = readdir($handle)))
    {
   	 if ($file != "." && $file != ".." 
   	   && strtolower(substr($file, strpos($file, '.') + 1)) == 'jpg_medium.jpg')
        {
            $thisrow = array();
        	$row++;
        	$thisrow["sno"] = $row;
        	$thisrow["filename"] = "images/" . $folderName . "/" . $file;
        	$results[] = $thisrow;
        }
    }
}
header('Content-Type: application/json');
echo json_encode($results);
?>
