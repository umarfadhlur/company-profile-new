<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/portfolio', [ProjectController::class, 'index'])->name('portfolio');
Route::get('/portfolio/{id}', [ProjectController::class, 'show'])->name('portfolio.details');
