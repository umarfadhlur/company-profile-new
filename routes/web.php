<?php

use Illuminate\Support\Facades\Route;

// ==============================
// LANGUAGE SWITCHER (SESUAI JSON LOCALIZATION)
// ==============================
Route::get('/lang/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'ko'])) {
        session(['locale' => $locale]);
    }
    return redirect()->back();
})->name('lang.switch');


// ==============================
// MAINTENANCE MODE
// ==============================
if (env('APP_MAINTENANCE') === true) {
    Route::get('{any}', function () {
        return response()->view('maintenance', [], 503);
    })->where('any', '.*');
    return;
}


// ==============================
// NORMAL ROUTES
// ==============================
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProjectController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/contact', [HomeController::class, 'contactSubmit'])
    ->name('contact.submit');

Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])
    ->name('newsletter.subscribe');

Route::get('/portfolio', [ProjectController::class, 'index'])
    ->name('portfolio');

Route::get('/project/{slug}', [ProjectController::class, 'show'])
    ->name('project.detail');
