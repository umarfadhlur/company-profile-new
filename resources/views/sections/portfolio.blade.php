<section id="projects" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Projects</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="mb-4" style="font-size:1.1rem;" data-aos="fade-up" data-aos-delay="120">
            Trusted by national and multinational companies, our portfolio includes power plant construction (PLTU &amp; CCPP), oil and gas refinery works, industrial pipeline networks, large-scale steel structures, and mechanical equipment maintenance.
        </div>

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <!-- Filters -->
            <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" class="filter-active">All</li>
                @foreach($projects->pluck('category_of_work')->unique() as $category)
                    <li data-filter=".filter-{{ \Illuminate\Support\Str::slug($category) }}">
                        {{ $category }}
                    </li>
                @endforeach
            </ul><!-- End Portfolio Filters -->

            <!-- Portfolio Items -->
            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                @forelse($projects as $project)
                    @php
                        $photo = $project->photos->first();
                        $categorySlug = \Illuminate\Support\Str::slug($project->category_of_work);
                        $image = $photo ? asset('storage/' . $photo->photo_path) : asset('assets/img/default.jpg');
                    @endphp

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-{{ $categorySlug }}">
                        <img src="{{ $image }}" class="img-fluid" alt="{{ $project->project_name }}">
                        <div class="portfolio-info">
                            <h4>{{ $project->project_name }}</h4>
                            <p>{{ $project->scope_of_work }}</p>

                            <a href="{{ $image }}"
                               title="{{ $project->project_name }}"
                               data-gallery="portfolio-gallery-{{ $categorySlug }}"
                               class="glightbox preview-link">
                                <i class="bi bi-zoom-in"></i>
                            </a>

                            <a href="{{ route('portfolio.details', $project->id) }}"
                               title="More Details"
                               class="details-link">
                                <i class="bi bi-link-45deg"></i>
                            </a>
                        </div>
                    </div>
                @empty
                    <div class="col-12">
                        <p class="text-muted">No projects available at the moment.</p>
                    </div>
                @endforelse
            </div><!-- End Portfolio Container -->
        </div>
    </div>
</section>
