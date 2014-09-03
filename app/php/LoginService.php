<?PHP
$username = '';
$password = '';
$command = '';
$loggedin = 'false';
$error = '';

if (isset($_REQUEST["username"]))
	$username = $_REQUEST["username"];
if (isset($_REQUEST["password"]))
	$password = $_REQUEST["password"];

if ($username != 'admin') {
	$error = "Please check username";
}
if ($username == 'admin' && $password != 'Salem98!') {
	$error = "Please check password";
}
if ($username == 'admin' && $password == 'Salem98!') {
	$loggedin = 'true';
	setcookie("username", $username,  time() + (10 * 365 * 24 * 60 * 60));
}

$data = array(
  array('loggedin' => $loggedin, 'error' => $error)
  );

header('Content-Type: application/json');
echo json_encode($data);
?>