<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Certification;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::with(['photos' => function($q) {
            $q->limit(1);
        }])->get();

        $certifications = Certification::all();

        return view('home', compact('projects', 'certifications'));
    }

}
