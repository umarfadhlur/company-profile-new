<section id="team" class="team section light-background">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p><span>Our Hardworking</span> <span class="description-title">Team</span></p>
    </div><!-- End Section Title -->

    <div class="container">
        <div class="row gy-4">
            @php
            $teamMembers = [
                [
                    'name' => 'Walter White',
                    'position' => 'Chief Executive Officer',
                    'image' => 'team-1.jpg',
                    'delay' => 100
                ],
                [
                    'name' => 'Sarah Jhonson',
                    'position' => 'Product Manager',
                    'image' => 'team-2.jpg',
                    'delay' => 200
                ],
                [
                    'name' => 'William Anderson',
                    'position' => 'CTO',
                    'image' => 'team-3.jpg',
                    'delay' => 300
                ],
                [
                    'name' => 'Amanda Jepson',
                    'position' => 'Accountant',
                    'image' => 'team-4.jpg',
                    'delay' => 400
                ]
            ];
            @endphp

            @foreach($teamMembers as $member)
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="{{ $member['delay'] }}">
                <div class="team-member">
                    <div class="member-img">
                        <img src="{{ asset('assets/img/team/' . $member['image']) }}" class="img-fluid" alt="{{ $member['name'] }}">
                        <div class="social">
                            <a href=""><i class="bi bi-twitter-x"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>{{ $member['name'] }}</h4>
                        <span>{{ $member['position'] }}</span>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
