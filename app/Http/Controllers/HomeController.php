<?php

namespace App\Http\Controllers;

use App\Models\Project;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::with(['photos' => function($q) {
            $q->limit(1);
        }])->get();

        return view('home', compact('projects'));
    }

}
