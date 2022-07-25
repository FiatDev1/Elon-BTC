<?php
if ($_REQUEST) {
    include_once '../config/database.php';
    include_once '../models/user.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $user->fullname = $_REQUEST['fullname'];
    $user->email = $_REQUEST['email'];
    $user->password = $_REQUEST['password'];
    $user->access_level = 'user';
    $user->access_code = '';
    $user->status = 0;

    if (isset($_REQUEST['fullname']) && !empty($_REQUEST['fullname']) && isset($_REQUEST['email']) && !empty($_REQUEST['email']) && isset($_REQUEST['password']) && !empty($_REQUEST['password'])) {
        if($user->emailExist($_REQUEST['email'])){
            $res = array();

            $res['message'] = "This Email has been registered!";
            $res['err'] = 301;
            $res['state'] = false;

            $response = json_encode($res);

            echo $response;
            return $response;
        }else{
            $res = array();

            if ($user->createAccount()) {
                $_REQUEST = array();
                
                $res['message'] = "Account has been sucessfully created!";
                $res['err'] = null;
                $res['state'] = true;

            } else {
                $res['message'] = "Something went wrong! That's all we know.";
                $res['err'] = 404;
                $res['state'] = false;
            }

            $response = json_encode($res);

            echo $response;
            return $response;
        }
    } else {
        echo "Invalid Request!";
    }
}
?>