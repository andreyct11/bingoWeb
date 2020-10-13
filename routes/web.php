<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/bingo', function(){
    return view('bingo');
});

Route::get('/tablero', function(){
    return view('tablero');
});
//Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
