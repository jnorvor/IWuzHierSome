<?php
if(!isset($_REQUEST['cmd'])){
	echo '{"result": 0, "message": "Unknown command"}';
	return;
}

$cmd = $_REQUEST['cmd'];

switch ($cmd) {
 case 1: 
 login(); 
 break; 
 case 2: 
 signUp(); 
 break; 
 case 3: 
 createEvent(); 
 break; 
 case 4: 
 loginCheck(); 
 break;
 case 5:
 getEvents();
 break;
//  case 6:
//  editEquipment();
//  break;
//  case 7:
//  deleteEquipment();
//  break;
//  case 8:
//  sendSMS();
//  break;
//  case 9:
//  getBorrowed();
//  break;
//  case 10:
//  total();
//  break;
//  case 11:
//  logout();
//  break;
  default:
  echo '{"result": 0, "message": "Unknown command"}';
  //return;
}

/**
*Method to check user credentials
*/
//function login(){ // include "adb.php"; // $eqp = new adb(); // // $username = $_GET['username']; // $password = $_GET['password']; // $sql="SELECT * from xx_user where email='$username' AND authentication='$password'"; // $eqp->query($sql); // $row=$eqp->fetch(); // // if($row){ // // session_destroy(); // session_start(); // // $_SESSION['username'] = $username; // $_SESSION['password'] = $password; // echo '{"result": 1, "message": "Sign in successful"}'; // return; // } // echo '{"result": 0, "message": "Wrong details"}'; // return; // //} // ///** //*Method to add a new user //*/ //function signUp(){ // include "adb.php"; // $eqp = new adb(); // $fname = $_GET['fname']; // $lname = $_GET['lname']; // $password = $_GET['pass']; // $email = $_GET['email']; // $address = $_GET['address']; // $card = $_GET['card']; // $code = $_GET['code']; // $month = $_GET['month']; // $year= $_GET['year']; // // // $sql="INSERT INTO xx_user(f_name,l_name,authentication,email,address,card_type,security_code,expiration_month,years)VALUES('$fname','$lname','$password', '$email','$address','$card',$code,'$month',$year)"; // if(!$eqp->query($sql)){ // echo '{"result": 0, "message": "User not signed up"}'; // return; // } // echo '{"result": 1, "message": "User successfully created"}'; //return; //} // ///** //*Method to create an event //*/ //function createEvent(){ // include "adb.php"; // $eqp = new adb(); // $name = $_GET['name']; // $sdate = $_GET['sdate']; // $edate = $_GET['edate']; // $picture = $_GET['picture']; // $location = $_GET['location']; // $description = $_GET['description']; // // $sql="INSERT INTO events(name,start_date,end_date,picture,location, description)VALUES('$name',$sdate,$edate, '$picture','$location','$description')"; // if(!$eqp->query($sql)){ // echo '{"result": 0, "message": "event error"}'.mysqli_error(); // return; // } // echo '{"result": 1, "message": "Event created!"}'; //return; //} // ///** //* Bring up data for an event //*/ //function getEvent(){ // include "adb.php"; // $id=$_REQUEST['id']; // $eqp = new adb(); // $str_query="SELECT * FROM inven_products WHERE id='$id'"; // $rows = $eqp->query($str_query); // // if(!$rows){ // // echo '{"result": 0, "message": "No Events in database"}'; // return; // } //$rows=$eqp->fetch(); // echo '{"result": 1, "equipment": ['; // echo json_encode($rows); // echo "]}"; // return; //}

/**
* Bring up events data 
*/
function getEvents(){
   include_once "adb.php";
    $eqp = new adb();
    $str_query="select * from inven_products";
    if(!$eqp->query($str_query)){
   echo '{"result": 0, "message": "No Events in database"}';
        return;
    }
    $data = array();
    $row = $eqp->fetch();
		while ($row) {
			$row_array['id'] = $row['id'];
			$row_array['owner'] = $row['product_id'];			
			$row_array['name'] = $row['products'];
			$row_array['des'] = $row['quantity'];
			$row_array['contact'] = $row['price'];			
 $row = $eqp->fetch();
	// 		//push the values in the array
			array_push($data,$row_array);
		}
	echo json_encode($data);
}

function createEvent(){
   include_once "adb.php";
    $eqp = new adb();
     $event=$_REQUEST['events'];
    $host=$_REQUEST['host'];
    $start=$_REQUEST['start'];
    $end=$_REQUEST['end'];
    $gmt=$_REQUEST['gmt'];
    $location=$_REQUEST['location'];
    $description=$_REQUEST['description'];
    $tag=$_REQUEST['tag'];
    
    $target_dir = "../pics/";
    $target_file = $target_dir . basename($_FILES["thepic"]["name"]);
    $file= $target_file;

    
//    if($file!=""){  "../pics/".$_FILES["thepic"]["name"]
    if(move_uploaded_file($_FILES["thepic"]["tmp_name"],  $target_file)){
       // echo $file;
       echo "yes!";
        $query="INSERT INTO events(name, start_date, end_date, start_time, end_time, picture, location, user_id, description, category)
        VALUES ('$event',$start,$end,$gmt,$location, '$description', '$category')";
//        $sql = array(); 
//foreach( $data as $row ) {
//    $sql[] = '("'.mysql_real_escape_string($row['text']).'", '.$row['category_id'].')';
//}
//mysql_query('INSERT INTO table (text, category) VALUES '.implode(',', $sql));
//	}else { 
//        echo "error!";
//         //Gives and error if its not // 
////        echo '{"res":"Sorry, there was a problem updating your profile."}';
//         }
    
}
}


        
//    $str_query="select * from inven_products";
//    if(!$eqp->query($str_query)){
//   echo '{"result": 0, "message": "No Events in database"}';
//        return;
//    }
//    $data = array(); // $row = $eqp->fetch(); // while ($row) { // $row_array['id'] = $row['id']; // $row_array['owner'] = $row['product_id']; // $row_array['name'] = $row['products']; // $row_array['des'] = $row['quantity']; // $row_array['contact'] = $row['price']; // $row = $eqp->fetch(); // // //push the values in the array // array_push($data,$row_array); // } // echo json_encode($data);
//}
/**
* check if user is logged in
**/
//function loginCheck(){
//
//    if(!$_SESSION['username']||!$_SESSION['password']){
//        echo '{"result": 0, "message": "User not loged in"}';
//        return;
//    }
//    echo '{"result": 1, "message": "Loged out successfully"}';
//    return;
//}
//
///**
//* Bring up events data for specific user
//*/
//function getMyEvents(){
//   include "adb.php";
//   $id=$_REQUEST['id'];
//    $eqp = new adb();
//    $str_query="SELECT * FROM events WHERE id='$id'";
//    $rows = $eqp->query($str_query);
//   
//    if(!$rows){
//         
//        echo '{"result": 0, "message": "No Events in database"}';
//        return;
//    }
//$row=$eqp->fetch();
//    echo '{"result": 1, "equipment": [';
//     while($row){
//        echo json_encode($row);
//         $row = $eqp->fetch();
//         if($row){
//             echo ',';
//         }
//     }
//    echo "]}";
//    return;
//}
//
///**
//* Bring up events data created by specific user
//* by recent first
//*/
//function getCreatedEvents(){
//   include "adb.php";
//   $id=$_REQUEST['id'];
//    $eqp = new adb();
//    $str_query="SELECT * FROM events WHERE id='$id'";
//    $rows = $eqp->query($str_query);
//   
//    if(!$rows){
//         
//        echo '{"result": 0, "message": "No Events in database"}';
//        return;
//    }
//$row=$eqp->fetch();
//    echo '{"result": 1, "equipment": [';
//     while($row){
//        echo json_encode($row);
//         $row = $eqp->fetch();
//         if($row){
//             echo ',';
//         }
//     }
//    echo "]}";
//    return;
//}
//
///**
//* Function to get suggested events from database
//*/
//function suggestedEvents(){
//   include "adb.php";
//   $id=$_REQUEST['id'];
//    $eqp = new adb();
//    $str_query="SELECT * FROM inven_products WHERE id='$id'";
//    $rows = $eqp->query($str_query);
//   
//    if(!$rows){
//         
//        echo '{"result": 0, "message": "You have no equipment in the database"}';
//        return;
//    }
//$rows=$eqp->fetch();
//    echo '{"result": 1, "equipment": [';
//    // while($row){
//        echo json_encode($rows);
//        // $row = $myLab->fetch();
//        // if($row){
//            // echo ',';
//        // }
//    // }
//    echo "]}";
//    return;
//}
//
//
///**
//* User logout
//**/
//function logout(){
//
//    if(!$_SESSION['username']){
//        echo '{"result": 0, "message": "User not logged in"}';
//        return;
//    }
//    session_start();
//    session_destroy();
//    echo '{"result": 1, "message": "Logged out successfully"}';
//    return;
//}
//
///**
//*Function to return all the inventory in the database
//*/
//function getEquipments(){
//	include("adb.php");
//		$obj=new adb();
//		$sql="SELECT * FROM inven_products";
//    
//	if($obj->query($sql)){
//       $row=$obj->fetch();
//    echo '{"result": 1, "equipment": [';
//    while($row){
//        echo json_encode($row);
//        $row=$obj->fetch();
//        if($row){
//            echo ',';
//        }
//        
//    }
//    echo "]}";
////        return;
//    }else{
//        echo "error ".mysql_error();
//    }
//}
//
//function editEquipment(){ 
//    include "adb.php"; 
//    $eqp = new adb(); 
//    $id = $_GET['id']; 
//     $code = $_GET['cde']; 
//     $name = $_GET['name']; 
//     $price = $_GET['price']; 
//     $quantity = $_GET['quant']; 
//     $manu = $_GET['manu'] ;
//    $str_query = "UPDATE inven_products SET product_id= $code,products='$name',quantity=$quantity,price=$price,manufacturer='$manu' WHERE id=$id";
//     if(!$eqp->query($str_query)){
//     echo '{"result": 0, "message": "equipment was not edited"}'; 
//     return; 
//}  echo '{"result": 1, "message": "Equipment was edited successfully"}'; 
//return; 
//}
//
//function deleteEquipment(){ 
//    include "adb.php";
//    $eqp = new adb();
//    $labId = $_GET['id'];
//    $str_query="DELETE FROM inven_products WHERE id = $labId";
//    if(!$eqp->query($str_query)){
//        echo '{"result": 0, "message": "Equipment was not deleted "}';
//        return;
//    }
//    echo '{"result": 1, "message": "Lab was deleted successfully"}';
//
//    return;
//}
//
//
//function sendSMS(){
//    //%2B$number
//    $number=$_GET['number'];
//    $pass=$_GET['prod'];
//    
//    $url = "https://api.smsgh.com/v3/messages/send?"
//    . "From=MobileW"
//    . "&To=%2B$number"
//    . "&Content=Manufactured%20product%20$pass%20is%20running%20low"
//    . "&ClientId=odfbifrp"
//    . "&ClientSecret=rktegnml"
//    . "&RegisteredDelivery=true";
// // Fire the request and wait for the response
// $response = file_get_contents($url) ;
// var_dump($response);
//}
//
//function getBorrowed(){
//    	include("adb.php");
//		$obj=new adb();
//		$sql="SELECT * FROM items_borrowed";
//    
//	if($obj->query($sql)){
////        $obj->fetch();
//        $row=$obj->fetch();
//    echo '{"result": 1, "equipment": [';
//    while($row){
//        echo json_encode($row);
//        $row=$obj->fetch();
//        if($row){
//            echo ',';
//        }
//        
//    }
//    echo "]}";
////        return;
//    }else{
//        echo "error ".mysql_error();
//    }
//}
//
//function total(){
//    include("adb.php");
//		$obj=new adb();
//		$sql="SELECT SUM(price) AS price FROM inven_products";
//     $row = $obj->query($sql);
//   
//    if(!$row){
//         
//        echo '{"result": 0, "message": "You have no equipment in the database"}';
//        return;
//    }
//$rows=$obj->fetch();
//    echo '{"result": 1, "total": [';
//    // while($row){
//        echo json_encode($rows);
//        // $row = $myLab->fetch();
//        // if($row){
//            // echo ',';
//        // }
//    // }
//    echo "]}";
//    return;
//}
//

?>