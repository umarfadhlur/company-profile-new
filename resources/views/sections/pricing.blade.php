<section id="pricing" class="pricing section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p><span>Check our</span> <span class="description-title">Pricing</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="row gy-3">
            @php
            $pricingPlans = [
                [
                    'name' => 'Free',
                    'price' => 0,
                    'features' => [
                        'Aida dere',
                        'Nec feugiat nisl',
                        'Nulla at volutpat dola',
                        ['name' => 'Pharetra massa', 'available' => false],
                        ['name' => 'Massa ultricies mi', 'available' => false]
                    ],
                    'featured' => false,
                    'advanced' => false,
                    'delay' => 100
                ],
                [
                    'name' => 'Business',
                    'price' => 19,
                    'features' => [
                        'Aida dere',
                        'Nec feugiat nisl',
                        'Nulla at volutpat dola',
                        'Pharetra massa',
                        ['name' => 'Massa ultricies mi', 'available' => false]
                    ],
                    'featured' => true,
                    'advanced' => false,
                    'delay' => 200
                ],
                [
                    'name' => 'Developer',
                    'price' => 29,
                    'features' => [
                        'Aida dere',
                        'Nec feugiat nisl',
                        'Nulla at volutpat dola',
                        'Pharetra massa',
                        'Massa ultricies mi'
                    ],
                    'featured' => false,
                    'advanced' => false,
                    'delay' => 400
                ],
                [
                    'name' => 'Ultimate',
                    'price' => 49,
                    'features' => [
                        'Aida dere',
                        'Nec feugiat nisl',
                        'Nulla at volutpat dola',
                        'Pharetra massa',
                        'Massa ultricies mi'
                    ],
                    'featured' => false,
                    'advanced' => true,
                    'delay' => 400
                ]
            ];
            @endphp

            @foreach($pricingPlans as $plan)
            <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="{{ $plan['delay'] }}">
                <div class="pricing-item {{ $plan['featured'] ? 'featured' : '' }}">
                    @if($plan['advanced'])
                    <span class="advanced">Advanced</span>
                    @endif
                    <h3>{{ $plan['name'] }}</h3>
                    <h4><sup>$</sup>{{ $plan['price'] }}<span> / month</span></h4>
                    <ul>
                        @foreach($plan['features'] as $feature)
                        @if(is_array($feature))
                        <li class="{{ $feature['available'] ? '' : 'na' }}">{{ $feature['name'] }}</li>
                        @else
                        <li>{{ $feature }}</li>
                        @endif
                        @endforeach
                    </ul>
                    <div class="btn-wrap">
                        <a href="#" class="btn-buy">Buy Now</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
