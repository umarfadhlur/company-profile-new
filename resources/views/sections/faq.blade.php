<section id="faq" class="faq section light-background">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <h2>F.A.Q</h2>
        <p><span>Frequently Asked</span> <span class="description-title">Questions</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
                <div class="faq-container">
                    @php
                    $faqs = [
                        [
                            'question' => 'Non consectetur a erat nam at lectus urna duis?',
                            'answer' => 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
                            'active' => true
                        ],
                        [
                            'question' => 'Feugiat scelerisque varius morbi enim nunc faucibus?',
                            'answer' => 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
                            'active' => false
                        ],
                        [
                            'question' => 'Dolor sit amet consectetur adipiscing elit pellentesque?',
                            'answer' => 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
                            'active' => false
                        ],
                        [
                            'question' => 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
                            'answer' => 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
                            'active' => false
                        ],
                        [
                            'question' => 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
                            'answer' => 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
                            'active' => false
                        ],
                        [
                            'question' => 'Perspiciatis quod quo quos nulla quo illum ullam?',
                            'answer' => 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.',
                            'active' => false
                        ]
                    ];
                    @endphp

                    @foreach($faqs as $faq)
                    <div class="faq-item {{ $faq['active'] ? 'faq-active' : '' }}">
                        <h3>{{ $faq['question'] }}</h3>
                        <div class="faq-content">
                            <p>{{ $faq['answer'] }}</p>
                        </div>
                        <i class="faq-toggle bi bi-chevron-right"></i>
                    </div>
                    @endforeach
                </div>
            </div><!-- End Faq Column-->
        </div>
    </div>
</section>
