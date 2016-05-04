<?php 

error_reporting(E_ERROR);


$select_all = $_GET['select'];



if($select_all) {

      $mysqli = new mysqli('localhost', 'root', '', 'nirs_shop');
      $mysqli->set_charset("utf8");
   
      $myArray = array();
      
      if ($result = $mysqli->query("SELECT * FROM items")) {
        $tempArray = array();
        while($row = $result->fetch_object()) {
                $tempArray = $row;
                array_push($myArray, $tempArray);
            }
      }

      $result->close();
      $mysqli->close();

      echo json_encode($myArray);
}


?>