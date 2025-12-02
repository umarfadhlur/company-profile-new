<section id="about" class="about section light-background">
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">{{ __('About Us') }}</span></p>
    </div>

    <div class="container">
        <div class="row gy-3">
            <div class="col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <div style="max-width: 350px;">
                    <img src="{{ asset('assets/img/about.png') }}" alt="" class="img-fluid rounded-3 shadow-sm">
                </div>
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="about-content ps-0 ps-lg-3">

                    <h3 class="fw-bold mb-3">PT GLS NUSARAYA</h3>

                    <p class="fst-italic">
                        {{ __('An industrial construction company specializing in high-quality engineering and fabrication services:') }}
                    </p>

                    <ul class="list-unstyled">

                        <li class="d-flex mb-3">
                            <i class="bi bi-building text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Steel Structure') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Expert in fabrication and erection of industrial steel structures with precision and safety.') }}
                                </p>
                            </div>
                        </li>

                        <li class="d-flex mb-3">
                            <i class="bi bi-layers text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Insulation') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Providing thermal and acoustic insulation installation for energy efficiency and protection.') }}
                                </p>
                            </div>
                        </li>

                        <li class="d-flex mb-3">
                            <i class="bi bi-gear-wide-connected text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Mechanical Works') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Handling erection and installation of mechanical systems for industrial facilities.') }}
                                </p>
                            </div>
                        </li>

                        <li class="d-flex mb-3">
                            <i class="bi bi-brush-fill text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Painting') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Professional blasting and painting services ensuring corrosion protection and durability.') }}
                                </p>
                            </div>
                        </li>

                        <li class="d-flex mb-3">
                            <i class="bi bi-hammer text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Piping Works') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Fabrication and installation of process piping for oil, gas, and industrial applications.') }}
                                </p>
                            </div>
                        </li>

                        <li class="d-flex mb-3">
                            <i class="bi bi-tools text-primary fs-3 me-3"></i>
                            <div>
                                <h5 class="mb-1">{{ __('Maintenance') }}</h5>
                                <p class="mb-0 text-muted">
                                    {{ __('Comprehensive maintenance and manpower supply to sustain plant performance.') }}
                                </p>
                            </div>
                        </li>

                    </ul>

                    <p class="mt-3">
                        {{ __('We serve industries such as energy, oil & gas, petrochemical, power plants, and infrastructure — upholding safety, quality, and efficiency as our core values.') }}
                    </p>

                </div>
            </div>
        </div>
    </div>
</section>
