
<?php
$name = $_POST["name"];
$email = $_POST["email"];
$messages = $_POST["messages"];
	$to  = "Name &lt;mary@example.com>, " ;
	$to .= "Name1 &lt;kelly@example.com>";

	$subject = "Legal";

	$message = '
	<html>
		<head>
			<title>Legal</title>
		</head>
		<body>
			<p>²ì’ÿ: '.$name.'</p>
			<p>$email: '.$email.'</p>
			<p>Îïèñ</p>
			<p>'.$messages.'</p>
		</body>
	</html>';

	$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
	$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
	$headers .= "Bcc: birthday-archive@example.com\r\n";

	mail($to, $subject, $message, $headers);