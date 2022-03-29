<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostsController;
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

Route::get('/', [HomeController::class, 'home'])->name('home.index');



Route::resource('posts', PostsController::class);



// Route::get('/posts', function () use ($posts) {
//     return view('posts.index', ['posts' => $posts]);
// })->name('posts.index');


// Route::get('/posts/{id}', function ($id) use ($posts) {

//     abort_if(!isset($posts[$id]), 404);
//     return view('posts.show', ['post' => $posts[$id]]);
// })->name('posts.show');

// Route::get('/recent-posts/{days_ago?}', function ($dayAgo = 1) {
//     return 'Recently post ' . $dayAgo;
// })->name('posts.recently.index');
