@extends('layouts.app')

@section('title', $project->project_name)

@section('content')
<section id="portfolio-detail" class="section light-background py-5" data-aos="fade-up">
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">{{ $project->project_name }}</span></p>
    </div><!-- End Section Title -->
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="300">
                <div class="row align-items-start mb-5" data-aos="fade-up" data-aos-delay="400">
                    <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <p><strong>Client:</strong><br> {{ $project->client_name }}</p>
                        <p><strong>Main Contractor:</strong><br> {{ $project->contractor_name }}</p>
                        <p><strong>Working Period:</strong><br> {{ $project->duration }}</p>
                        <p><strong>Scope of Work:</strong><br> {{ $project->scope_of_work }}</p>
                        <p><strong>Category of Work:</strong><br> {{ $project->category_of_work }}</p>
                    </div>
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
                        @if($project->photos->count())
                        <div id="projectPhotosCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                @foreach($project->photos as $key => $photo)
                                    <div class="carousel-item {{ $key == 0 ? 'active' : '' }}">
                                        <img src="{{ asset('storage/' . $photo->photo_path) }}" class="d-block w-100 rounded shadow"
                                             alt="Project Photo" style="max-height:350px; object-fit:cover;">
                                    </div>
                                @endforeach
                            </div>
                            @if($project->photos->count() > 1)
                            <button class="carousel-control-prev" type="button" data-bs-target="#projectPhotosCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#projectPhotosCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                            @endif
                        </div>
                        @else
                            <p>No photos available.</p>
                        @endif
                    </div>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-delay="700">
                    <a href="{{ url('/#projects') }}" class="btn btn-dark px-4 py-2" style="background:#1a7eb8; border:none;">Back to Projects</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
