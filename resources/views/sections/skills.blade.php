<section id="skills" class="skills section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row skills-content skills-animation">
            @php
            $skills = [
                ['name' => 'HTML', 'percentage' => 100],
                ['name' => 'CSS', 'percentage' => 90],
                ['name' => 'JavaScript', 'percentage' => 75],
                ['name' => 'PHP', 'percentage' => 80],
                ['name' => 'WordPress/CMS', 'percentage' => 90],
                ['name' => 'Photoshop', 'percentage' => 55]
            ];
            $leftSkills = array_slice($skills, 0, 3);
            $rightSkills = array_slice($skills, 3, 3);
            @endphp

            <div class="col-lg-6">
                @foreach($leftSkills as $skill)
                <div class="progress">
                    <span class="skill"><span>{{ $skill['name'] }}</span> <i class="val">{{ $skill['percentage'] }}%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="{{ $skill['percentage'] }}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="col-lg-6">
                @foreach($rightSkills as $skill)
                <div class="progress">
                    <span class="skill"><span>{{ $skill['name'] }}</span> <i class="val">{{ $skill['percentage'] }}%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="{{ $skill['percentage'] }}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
