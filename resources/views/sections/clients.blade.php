<section id="clients" class="clients section light-background">
    <div class="container">
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
                    },
                    "breakpoints": {
                        "320": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "480": {
                            "slidesPerView": 3,
                            "spaceBetween": 60
                        },
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 80
                        },
                        "992": {
                            "slidesPerView": 6,
                            "spaceBetween": 120
                        }
                    }
                }
            </script>

            <div class="swiper-wrapper align-items-center">
                @for ($i = 1; $i <= 8; $i++)
                    <div class="swiper-slide">
                        <img src="{{ asset('assets/img/clients/client-' . $i . '.png') }}" class="img-fluid"
                            alt="{{ __('Client') }} {{ $i }}">
                    </div>
                @endfor
            </div>
        </div>
    </div>
</section>
