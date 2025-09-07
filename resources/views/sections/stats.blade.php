<section id="stats" class="stats section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
            @php
            $stats = [
                ['icon' => 'bi-emoji-smile', 'number' => 232, 'label' => 'Happy Clients'],
                ['icon' => 'bi-journal-richtext', 'number' => 521, 'label' => 'Projects'],
                ['icon' => 'bi-headset', 'number' => 1463, 'label' => 'Hours Of Support'],
                ['icon' => 'bi-people', 'number' => 15, 'label' => 'Hard Workers']
            ];
            @endphp

            @foreach($stats as $stat)
            <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i class="bi {{ $stat['icon'] }}"></i>
                <div class="stats-item">
                    <span data-purecounter-start="0" data-purecounter-end="{{ $stat['number'] }}" data-purecounter-duration="1" class="purecounter"></span>
                    <p>{{ $stat['label'] }}</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
