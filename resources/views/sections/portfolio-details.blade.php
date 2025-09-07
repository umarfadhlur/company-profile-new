@extends('layouts.app')

@section('title', $project->project_name)
@section('content')
    <h1>{{ $project->project_name }}</h1>
    <p>{{ $project->scope_of_work }}</p>
    <div>
        @foreach($project->photos as $photo)
            <img src="{{ asset('storage/' . $photo->photo_path) }}" alt="Photo" style="max-width:300px;">
        @endforeach
    </div>
    <!-- Tambahkan detail lain sesuai kebutuhan -->
@endsection
