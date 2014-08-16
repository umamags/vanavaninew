<?php


$host = 'https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json';

$process = curl_init($host);
	curl_setopt($process, CURLOPT_HEADER, 0);
	//curl_setopt($process, CURLOPT_USERPWD, $username . ":" . $password);
	curl_setopt($process, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($process, CURLOPT_RETURNTRANSFER, 1);
	$return = curl_exec($process);

echo $return;

?>