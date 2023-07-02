<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\customer;
use App\Http\Controllers\API\BookController;

Route::post("/insert",[customer::class, 'insert']);
Route::post("/login",[customer::class, 'login']);
Route::post("/login",[customer::class, 'login']);
Route::post('/upload',[BookController::class,'upload']);
Route::get('/books', [BookController::class,'index']);
Route::get('/books/{id}',[BookController::class,'update']);
Route::put('/books2/{id}',[BookController::class,'update2']);
// Route::put('/books2/{id}', [BookController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

