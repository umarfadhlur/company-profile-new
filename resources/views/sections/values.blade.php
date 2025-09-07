<section id="core-values" class="core-values section">
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Core Values</span></p>
    </div>

    <div class="container">
        <div class="row gy-4 justify-content-center">
            @php
            $coreValues = [
                [
                    'icon' => 'bi-shield-check',
                    'title' => 'Safety First',
                    'description' => 'Prioritizing work safety in every aspect of our operations.',
                    'delay' => 100
                ],
                [
                    'icon' => 'bi-patch-check',
                    'title' => 'Quality Assurance',
                    'description' => 'Meeting international standards for every project delivered.',
                    'delay' => 200
                ],
                [
                    'icon' => 'bi-clock-history',
                    'title' => 'On-Time Delivery',
                    'description' => 'Punctual project completion is our commitment.',
                    'delay' => 300
                ],
                [
                    'icon' => 'bi-currency-dollar',
                    'title' => 'Cost Efficiency',
                    'description' => 'Providing competitive and effective solutions for our clients.',
                    'delay' => 400
                ],
                [
                    'icon' => 'bi-tree',
                    'title' => 'Sustainability',
                    'description' => 'Environmental awareness in every project we undertake.',
                    'delay' => 500
                ],
            ];
            @endphp

            @foreach($coreValues as $index => $value)
            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="{{ $value['delay'] }}">
                <div class="service-item position-relative text-center">
                    <div class="icon mb-2">
                        <i class="bi {{ $value['icon'] }}" style="font-size:2rem;"></i>
                    </div>
                    <h3 style="font-size:1.1rem;">{{ $value['title'] }}</h3>
                    <p style="font-size:0.95rem;">{{ $value['description'] }}</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
