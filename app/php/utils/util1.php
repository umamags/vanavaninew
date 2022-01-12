<html>
<head>
<title>
Utility 1</title>
</head>
<body>
Upload a file: <BR>
You can specify ../filename to save it to the root directory. <br>
You can specify docs/filename to save it to the docs directory <br>
  <FORM
        ENCTYPE="multipart/form-data" 
        ACTION="util1.php" method="post">
        Upload this file: <INPUT NAME="userfile" TYPE="file" />
        <BR>
        Filename: <input type="text" name="filename" />
        <BR>
        <INPUT TYPE="submit" VALUE="Send File" />
    </FORM>
</body>
</html>
<?php
    $outfile = $_REQUEST["filename"];
    $outhandle = fopen($outfile, "wb");
    
    if ($outfile > "") {
	    
		$file = $_FILES['userfile']['tmp_name'];
	    $handle = fopen($file, "rb");
	    
	    $text = fread($handle, filesize($file));
	    if (fwrite($outhandle, $text) == FALSE) {
	    	echo "Problem in writing to file"; 
	    } else {
	    	echo "Write to file successful";
	    }	
	    fclose($handle);
	    fclose($outhandle);	    
    }

?>
