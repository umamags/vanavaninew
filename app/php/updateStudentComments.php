<?PHP

$inputJSON = file_get_contents('php://input');
$input= json_decode( $inputJSON, TRUE ); //convert JSON into array

$regNo = $input["regNo"];
$studentComments = $input["studentComments"];
$filename = '../jsondata/students/' . $regNo . '.json';

$output = array($input);
file_put_contents($filename, json_encode($output));

//Write this into the appropriate file
$data = array(
  array('filename' => $filename)
  );

header('Content-Type: application/json');
echo json_encode($data);
?>