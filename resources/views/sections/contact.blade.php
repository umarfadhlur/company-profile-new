<section id="contact" class="contact section">

    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">{{ __('Contact Us') }}</span></p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">

            <!-- Contact Info -->
            <div class="col-lg-5">
                <div class="info-wrap">

                    <div class="info-item d-flex">
                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>{{ __('Address') }}</h3>
                            <p>
                                {{ config('site.address.street', 'Jl. Lingkar Selatan, KP Gedong Baya') }},
                                {{ config('site.address.city', 'Kel. Kalitimbang, Kec. Cibeber, Kota Cilegon, Provinsi Banten 42191') }}
                            </p>
                        </div>
                    </div>

                    <div class="info-item d-flex">
                        <i class="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>{{ __('Call Us') }}</h3>
                            <p>{{ config('site.phone', '+62 821 4867 2240 / +62 812 1282 9292') }}</p>
                        </div>
                    </div>

                    <div class="info-item d-flex">
                        <i class="bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>{{ __('Email Us') }}</h3>
                            <p>{{ config('site.contact_email', 'glsnusaraya@gmail.com') }}</p>
                        </div>
                    </div>

                    <iframe …></iframe>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="col-lg-7">
                <form action="{{ route('contact.submit') }}" method="post" class="php-email-form" id="contact-form">
                    @csrf

                    <div class="row gy-4">

                        <div class="col-md-6">
                            <label for="name-field" class="pb-2">{{ __('Your Name') }}</label>
                            <input type="text" name="name" id="name-field" class="form-control" required
                                value="{{ old('name') }}">
                            @error('name')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-6">
                            <label for="email-field" class="pb-2">{{ __('Your Email') }}</label>
                            <input type="email" class="form-control" name="email" id="email-field" required
                                value="{{ old('email') }}">
                            @error('email')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12">
                            <label for="subject-field" class="pb-2">{{ __('Subject') }}</label>
                            <input type="text" class="form-control" name="subject" id="subject-field" required
                                value="{{ old('subject') }}">
                            @error('subject')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12">
                            <label for="message-field" class="pb-2">{{ __('Message') }}</label>
                            <textarea class="form-control" name="message" rows="10" id="message-field" required>{{ old('message') }}</textarea>
                            @error('message')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12 text-center">

                            @if (session('success'))
                                <div class="alert alert-success">{{ session('success') }}</div>
                            @endif

                            @if (session('error'))
                                <div class="alert alert-danger">{{ session('error') }}</div>
                            @endif

                            <button type="submit" class="btn btn-primary" id="submit-btn">
                                <span class="btn-text">{{ __('Send Message') }}</span>
                                <span class="spinner-border spinner-border-sm d-none" role="status"
                                    aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </form>

                <script>
                    document.addEventListener("DOMContentLoaded", function() {
                        const form = document.getElementById("contact-form");
                        const submitBtn = document.getElementById("submit-btn");
                        const btnText = submitBtn.querySelector(".btn-text");
                        const spinner = submitBtn.querySelector(".spinner-border");

                        form.addEventListener("submit", function() {
                            btnText.textContent = "{{ __('Sending...') }}";
                            spinner.classList.remove("d-none");
                            submitBtn.disabled = true;
                        });
                    });
                </script>
            </div>
        </div>
    </div>

</section>
