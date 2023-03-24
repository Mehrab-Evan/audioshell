<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer_Model;
use Illuminate\Support\Facades\DB;

class customer extends Controller
{
    function insert(Request $req)
    {
        $customer = new Customer_Model;
        $password = $req->password;
        $cpassword = $req->cpassword;

        if($password == $cpassword)
        {
            $customer->name = $req->name;
            $customer->email = $req->gmail;
            $customer->password = $req->password;
            $result = $customer->save();
            if($result)
            {
                $response = array(
                    'status' => 200,
                    'message' => 'Customer Added'
                );
                
                header('Content-Type: application/json');
                echo json_encode($response);
            }
            else
            {
                return ["Data Denied"];
            }
        }
        else
        {
            return "PASSWORD NOT MATCHED";
        }
        
        // return response()->json([
        //     'status' => 200,
        //     'message' => 'Student Added',
        // ]

        // );
        // return $req->input();
    }

    function login(Request $req)
    {
        $email = $req->email;
        $password = $req->password;
        
        $result = DB::select('SELECT * FROM customers WHERE email = ? AND password = ?',[$email, $password]);
        // $user = DB::table('customers')
        // ->where('email', $email)
        // ->where('password', $password)
        // ->first();

        if($result)
        {
            return ["HAHA"];
        }
        else
            return ["NO"];
    }
}
