<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Contact;
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

    public function contactSubmit(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        // redirect ke home + scroll ke section #contact
        return redirect()
            ->route('home', [], 302)
            ->with('success', 'Your message has been submitted successfully!')
            ->withFragment('contact');
    }

}
