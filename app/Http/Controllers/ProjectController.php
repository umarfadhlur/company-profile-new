<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with(['photos' => function($q) {
            $q->limit(1);
        }])->get();

        return view('sections.portfolio', compact('projects'));
    }

    public function show($slug)
    {
        $project = Project::with('photos')->where('slug', $slug)->firstOrFail();
        return view('portfolio-details', compact('project'));
    }
}
