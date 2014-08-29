<?PHP

$username = "";
$loggedin = false;
$error = "";

if (isset($_REQUEST["action"])) {
	if ($_REQUEST["action"] == "delete") {
		setcookie("username", "", time()-3600);
	}
	if ($_REQUEST["action"] == "read") {
		if (isset($_COOKIE["username"])) {
	   		$username = $_COOKIE["username"];
   	   		$loggedin = true;
   	   	}	
	}	
}

$data = array(
  array('username' => $username, 'loggedin' => $loggedin, 'error' => $error)
  );

header('Content-Type: application/json');
echo json_encode($data);
?>