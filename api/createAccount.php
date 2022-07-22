<?php
if ($_REQUEST) {
    include_once '../config/database.php';
    include_once '../models/user.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $user->fullname = $_REQUEST['fullname'];
    $user->password = $_REQUEST['password'];
    $user->status = $_REQUEST['status'];
    $user->created = $_REQUEST['created'];

    if (isset($_REQUEST['fullname']) && !empty($_REQUEST['fullname']) && isset($_REQUEST['email']) && !empty($_REQUEST['email']) && isset($_REQUEST['password']) && !empty($_REQUEST['password'])) {
        if($user->emailExist($_REQUEST['email'])){
            $res = array();

            $res['message'] = "This Email has been registered!";
            $res['err'] = 301;
            $res['state'] = false;

            return $res;
        }else{
            if ($user->createAccount()) {
                $_REQUEST = [];
                
                $res['message'] = "Account has been sucessfully created!";
                $res['err'] = null;
                $res['state'] = true;

                echo "Account has been created!";
                return true;
            } else {
                echo "Something went wrong! That's all we know.";
                return true;
            }
        }
    } else {
        echo "Invalid Request!";
    }
}
?>