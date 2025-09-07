<section id="projects" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Projects</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="mb-4" style="font-size:1.1rem;" data-aos="fade-up" data-aos-delay="120">
            Trusted by national and multinational companies, our portfolio includes power plant construction (PLTU & CCPP), oil and gas refinery works, industrial pipeline networks, large-scale steel structures, and mechanical equipment maintenance.
        </div>
        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
            </ul><!-- End Portfolio Filters -->

            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                @php
                $portfolioItems = [
                    ['type' => 'app', 'title' => 'App 1', 'image' => 'masonry-portfolio-1.jpg', 'gallery' => 'app'],
                    ['type' => 'product', 'title' => 'Product 1', 'image' => 'masonry-portfolio-2.jpg', 'gallery' => 'product'],
                    ['type' => 'branding', 'title' => 'Branding 1', 'image' => 'masonry-portfolio-3.jpg', 'gallery' => 'branding'],
                    ['type' => 'app', 'title' => 'App 2', 'image' => 'masonry-portfolio-4.jpg', 'gallery' => 'app'],
                    ['type' => 'product', 'title' => 'Product 2', 'image' => 'masonry-portfolio-5.jpg', 'gallery' => 'product'],
                    ['type' => 'branding', 'title' => 'Branding 2', 'image' => 'masonry-portfolio-6.jpg', 'gallery' => 'branding'],
                    ['type' => 'app', 'title' => 'App 3', 'image' => 'masonry-portfolio-7.jpg', 'gallery' => 'app'],
                    ['type' => 'product', 'title' => 'Product 3', 'image' => 'masonry-portfolio-8.jpg', 'gallery' => 'product'],
                    ['type' => 'branding', 'title' => 'Branding 3', 'image' => 'masonry-portfolio-9.jpg', 'gallery' => 'branding']
                ];
                @endphp

                @foreach($portfolioItems as $item)
                <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-{{ $item['type'] }}">
                    <img src="{{ asset('assets/img/masonry-portfolio/' . $item['image']) }}" class="img-fluid" alt="{{ $item['title'] }}">
                    <div class="portfolio-info">
                        <h4>{{ $item['title'] }}</h4>
                        <p>Lorem ipsum, dolor sit</p>
                        <a href="{{ asset('assets/img/masonry-portfolio/' . $item['image']) }}" title="{{ $item['title'] }}" data-gallery="portfolio-gallery-{{ $item['gallery'] }}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                    </div>
                </div>
                @endforeach
            </div><!-- End Portfolio Container -->
        </div>
    </div>
</section>
