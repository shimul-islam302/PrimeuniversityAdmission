<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/register', function () {
    return view('register');
});

Route::post('/submit-registration', function () {
    return 'Registration Successful!';  // Later you can handle saving to DB
});
