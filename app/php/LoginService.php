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
if ($username == 'admin' && $password != 'vanavani') {
	$error = "Please check password";
}
if ($username == 'admin' && $password == 'vanavani') {
	$loggedin = 'true';
}

$data = array(
  array('loggedin' => $loggedin, 'error' => $error)
  );

header('Content-Type: application/json');
echo json_encode($data);
?>