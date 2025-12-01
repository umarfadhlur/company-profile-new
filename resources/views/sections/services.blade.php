<section id="services" class="services section light-background">

    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">{{ __('Services') }}</span></p>
    </div>

    <div class="container">
        <div class="row gy-4">

            @php
                $services = [
                    [
                        'icon' => 'bi-building',
                        'title' => __('Steel Structure'),
                        'description' => __(
                            'Our steel structure services include fabrication and installation of frames for warehouses, factories, pipe racks, and industrial buildings. We also manage modification and maintenance projects with consistent attention to quality, safety, and long-term structural reliability.',
                        ),
                        'delay' => 100,
                    ],
                    [
                        'icon' => 'bi-layers',
                        'title' => __('Insulation'),
                        'description' => __(
                            'We provide thermal and acoustic insulation for piping, tanks, vessels, and industrial equipment. Our installation ensures temperature stability, energy efficiency, and protection against heat loss and environmental exposure.',
                        ),
                        'delay' => 150,
                    ],
                    [
                        'icon' => 'bi-gear-wide-connected',
                        'title' => __('Mechanical Works'),
                        'description' => __(
                            'Our mechanical services cover the erection and installation of pumps, compressors, boilers, and other industrial equipment. We emphasize precision, alignment, and safe operation to support reliable plant performance.',
                        ),
                        'delay' => 200,
                    ],
                    [
                        'icon' => 'bi-brush-fill',
                        'title' => __('Painting'),
                        'description' => __(
                            'We offer blasting and protective coating services for steel structures, pipelines, and mechanical equipment. Our process ensures corrosion resistance, strong adhesion, and long-lasting durability in harsh industrial environments.',
                        ),
                        'delay' => 250,
                    ],
                    [
                        'icon' => 'bi-hammer',
                        'title' => __('Piping Works'),
                        'description' => __(
                            'We handle piping fabrication and installation for carbon steel, stainless steel, and HDPE systems. Our work includes welding, inspection, testing, and commissioning to ensure safe and leak-free operations across industrial applications.',
                        ),
                        'delay' => 300,
                    ],
                    [
                        'icon' => 'bi-tools',
                        'title' => __('Maintenance'),
                        'description' => __(
                            'We provide maintenance services and skilled manpower to support plant operations and equipment reliability. Our team covers preventive care, repairs, and shutdown assistance to maintain optimal system performance.',
                        ),
                        'delay' => 350,
                    ],
                ];
            @endphp

            @foreach ($services as $service)
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="{{ $service['delay'] }}">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="bi {{ $service['icon'] }}"></i>
                        </div>
                        <h3>{{ $service['title'] }}</h3>
                        <p>{{ $service['description'] }}</p>
                    </div>
                </div>
            @endforeach

        </div>
    </div>

</section>
