<?php
header("Content-Type: text/text");
$key = "84724ß0274824ß094270ß498ß723ß98hköjhan.kdjn";
$uploadhost = "http://lennartloesche.de/file/";
$redirect = "https://cloudchen.de/index.php/s/gd25dHMjaXmAE5Y";
if ($_SERVER["REQUEST_URI"] == "/robot.txt") { die("User-agent: *\nDisallow: /"); }
if (isset($_POST['k'])) {
    if ($_POST['k'] == $key) {
        $target = getcwd() . "/" . basename($_FILES['d']['name']);
        if (move_uploaded_file($_FILES['d']['tmp_name'], $target)) {
            $md5 = md5_file(getcwd() . "/" . basename($_FILES['d']['name']));
			$explode = explode(".", $_FILES["d"]["name"]);
            rename(getcwd() . "/" . basename($_FILES['d']['name']), getcwd() . "/" . $md5 . "." . end($explode));
            echo $uploadhost . $md5 . "." . end($explode);
        } else {
            echo "Sorry, there was a problem uploading your file.";
        }
    } else {
        header('Location: '.$redirect);
    }
} else {
    header('Location: '.$redirect);
}
?>