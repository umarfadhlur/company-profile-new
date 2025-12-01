@extends('layouts.app')

@section('title', __('PT GLS NUSARAYA - Pipeline | Steel Structure | Mechanical Engineering'))
@section('description',
    __('Reliable solutions for pipelines, steel structures, and mechanical works across
    Indonesia.'))

@section('content')
    @include('sections.hero')
    @include('sections.featured-services')
    @include('sections.values')
    @include('sections.about')
    @include('sections.certifications')
    @include('sections.services')
    @include('sections.portfolio')
    @include('sections.clients')
    @include('sections.contact')
@endsection
