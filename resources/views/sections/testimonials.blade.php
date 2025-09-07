<section id="testimonials" class="testimonials section dark-background">
    <img src="{{ asset('assets/img/testimonials-bg.jpg') }}" class="testimonials-bg" alt="">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper init-swiper">
            <script type="application/json" class="swiper-config">
                {
                    "loop": true,
                    "speed": 600,
                    "autoplay": {
                        "delay": 5000
                    },
                    "slidesPerView": "auto",
                    "pagination": {
                        "el": ".swiper-pagination",
                        "type": "bullets",
                        "clickable": true
                    }
                }
            </script>
            <div class="swiper-wrapper">
                @php
                $testimonials = [
                    [
                        'name' => 'Saul Goodman',
                        'position' => 'Ceo & Founder',
                        'image' => 'testimonials-1.jpg',
                        'content' => 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
                    ],
                    [
                        'name' => 'Sara Wilsson',
                        'position' => 'Designer',
                        'image' => 'testimonials-2.jpg',
                        'content' => 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
                    ],
                    [
                        'name' => 'Jena Karlis',
                        'position' => 'Store Owner',
                        'image' => 'testimonials-3.jpg',
                        'content' => 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
                    ],
                    [
                        'name' => 'Matt Brandon',
                        'position' => 'Freelancer',
                        'image' => 'testimonials-4.jpg',
                        'content' => 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
                    ],
                    [
                        'name' => 'John Larson',
                        'position' => 'Entrepreneur',
                        'image' => 'testimonials-5.jpg',
                        'content' => 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
                    ]
                ];
                @endphp

                @foreach($testimonials as $testimonial)
                <div class="swiper-slide">
                    <div class="testimonial-item">
                        <img src="{{ asset('assets/img/testimonials/' . $testimonial['image']) }}" class="testimonial-img" alt="{{ $testimonial['name'] }}">
                        <h3>{{ $testimonial['name'] }}</h3>
                        <h4>{{ $testimonial['position'] }}</h4>
                        <div class="stars">
                            @for($i = 0; $i < 5; $i++)
                            <i class="bi bi-star-fill"></i>
                            @endfor
                        </div>
                        <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>{{ $testimonial['content'] }}</span>
                            <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
