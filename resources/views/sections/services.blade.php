<section id="services" class="services section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Services</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="row gy-4">
            @php
            $services = [
          [
              'icon' => 'bi-diagram-3',
              'title' => 'Pipeline Construction',
              'description' => 'We provide comprehensive pipeline construction services for various industries, including oil & gas, petrochemical, water, and chemical sectors. Our expertise covers carbon steel, stainless, HDPE, and PVC pipelines, as well as hydrotesting and commissioning.',
              'delay' => 100
          ],
          [
              'icon' => 'bi-building',
              'title' => 'Steel Structure',
              'description' => 'Our steel structure services cover fabrication and installation of frames for warehouses, factories, and hangars. We also handle modification and maintenance projects with a strong focus on quality, safety, and durability.',
              'delay' => 200
          ],
          [
              'icon' => 'bi-gear',
              'title' => 'Mechanical Works',
              'description' => 'We specialize in the installation of industrial equipment such as pumps, compressors, boilers, and turbines. Our services include machine alignment, balancing, and general mechanical fabrication to ensure reliability and efficiency.',
              'delay' => 300
          ],
      ];
            @endphp

            @foreach($services as $service)
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
