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

    public function show($id)
    {
        $project = \App\Models\Project::with('photos')->findOrFail($id);
        return view('sections.portfolio-details', compact('project'));
    }
}
