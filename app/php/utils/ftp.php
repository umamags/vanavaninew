<?php
?>

<html>
<head>
<title>
FTP form
</title>
<?php
	$server = $_REQUEST["server"];
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	$filename = $_REQUEST["filename"];
	
	echo "Server:" . $server . "<BR>";
	echo "Username:" . $username . "<BR>";
	echo "Password:" . $password . "<BR>";
	echo "Filename:" . $filename . "<BR>";
	
	if ($server != null) {
        $connect = ftp_connect($server);
        $result = ftp_login($connect, $username, $password);
        
        if(!$result){
            echo "Could not connect.";
            exit;
        }
		
        $result = ftp_put($connect, $filename, $filename, FTP_ASCII);	}
        if($result){
            echo "Sent the file.";
        }
        else {
            echo "Did not send the file.";
        }

        ftp_close($connect);

?>
</head>
<body>
<form action="ftp.php">
	<table>
	<tr>
		<td>Server</td>
		<td><input type="text" name="server" value="donateeverymonth.org"/></td>
	</tr>
	<tr>
		<td>Username</td>
		<td><input type="text" name="username" value="umamags2" /></td>
	</tr>
	<tr>
		<td>Password</td>
		<td><input type="text" name="password" value="Krishna1" /></td>
	</tr>
	<tr>
		<td>Filename</td>
		<td><input type="text" name="filename" value="upload.php" /></td>
	</tr>
	<tr>
		<td><input type="submit" /></td>
	</tr>
		
</form>
</body>
</html>