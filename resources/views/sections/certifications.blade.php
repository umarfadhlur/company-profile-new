<section id="certification" class="certification section">
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Certifications</span></p>
    </div>
    <div class="container">
        <div class="row gy-3">
            <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                <ul class="list-group">
                    @forelse($certifications as $cert)
                        <li class="list-group-item d-flex justify-content-between align-items-center mb-2 rounded bg-light" style="font-size:1.1rem;">
                            <span>{{ $cert->name }}</span>
                            @if($cert->file_path)
                                <a href="{{ asset('storage/' . $cert->file_path) }}" target="_blank" title="Download PDF">
                                    <i class="bi bi-filetype-pdf" style="font-size:1.5rem; color:#1a6ee3;"></i>
                                </a>
                            @else
                                <span style="width:28px;"></span>
                            @endif
                        </li>
                    @empty
                        <li class="list-group-item rounded bg-light">No certifications found.</li>
                    @endforelse
                </ul>
            </div>
        </div>
    </div>
</section>
