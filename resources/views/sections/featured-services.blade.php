<section id="featured-services" class="featured-services section">
  <div class="container">
    <div class="row gy-4">
      @php
      $featuredServices = [
          [
              'icon' => 'bi-eye',
              'title' => 'Vision',
              'description' => 'To be a leading construction company in Indonesia, trusted for delivering world-class pipeline, steel structure, and mechanical solutions.',
              'delay' => 100
          ],
          [
              'icon' => 'bi-bullseye',
              'title' => 'Mission',
              'description' => '
                <ul>
                  <li>Deliver safe, high-quality, and efficient construction services.</li>
                  <li>Build long-term client relationships based on professionalism and integrity.</li>
                  <li>Develop skilled and competitive human resources.</li>
                  <li>Apply the latest technology to improve productivity and quality.</li>
                </ul>
              ',
              'delay' => 200
          ]
      ];
      @endphp

      @foreach($featuredServices as $service)
      <div class="col-xl-6 col-md-6" data-aos="fade-up" data-aos-delay="{{ $service['delay'] }}">
        <div class="service-item position-relative">
          <div class="icon"><i class="bi {{ $service['icon'] }} icon"></i></div>
          <h4>{{ $service['title'] }}</h4>
          {!! $service['description'] !!}
        </div>
      </div>
      @endforeach
    </div>
  </div>
</section>
