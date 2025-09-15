@extends('layouts.app')

@section('title', 'PT GLS NUSARAYA - Pipeline | Steel Structure | Mechanical Engineering')
@section('description', 'Reliable solutions for pipelines, steel structures, and mechanical works across Indonesia.')

@section('content')
    @include('sections.hero')
    @include('sections.featured-services')
    @include('sections.values')
    @include('sections.about')
    @include('sections.certifications')
    {{-- @include('sections.skills') --}}
    {{-- @include('sections.stats') --}}
    @include('sections.services')
    @include('sections.portfolio')
    @include('sections.clients')
    {{-- @include('sections.testimonials') --}}
    {{-- @include('sections.team') --}}
    @include('sections.contact')
@endsection
