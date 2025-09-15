<section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <p><span class="description-title">Contact Us</span></p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
            <!-- Contact Info -->
            <div class="col-lg-5">
                <div class="info-wrap">
                    <div class="info-item d-flex">
                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>Address</h3>
                            <p>
                                {{ config('site.address.street', 'Jl. Lingkar Selatan, KP Gedong Baya') }},
                                {{ config('site.address.city', 'Kel. Kalitimbang, Kec. Cibeber, Kota Cilegon, Provinsi Banten 42191') }}
                            </p>
                        </div>
                    </div>

                    <div class="info-item d-flex">
                        <i class="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>Call Us</h3>
                            <p>{{ config('site.phone', '+62 821 4867 2240 / +62 812 1282 9292') }}</p>
                        </div>
                    </div>

                    <div class="info-item d-flex">
                        <i class="bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>Email Us</h3>
                            <p>{{ config('site.contact_email', 'glsnusaraya@gmail.com') }}</p>
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6118076897665!2d106.04293917576265!3d-6.047876159369647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f005f7bf849%3A0x40e7912273d80f88!2sPT%20GLS%20Nusa%20Raya!5e0!3m2!1sid!2sid!4v1756988808286!5m2!1sid!2sid"
                            frameborder="0"
                            style="border:0; width: 100%; height: 270px;"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="col-lg-7">
                <form action="{{ route('contact.submit') }}" method="post" class="php-email-form" id="contact-form">
                    @csrf
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <label for="name-field" class="pb-2">Your Name</label>
                            <input type="text" name="name" id="name-field" class="form-control" required value="{{ old('name') }}">
                            @error('name')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-6">
                            <label for="email-field" class="pb-2">Your Email</label>
                            <input type="email" class="form-control" name="email" id="email-field" required value="{{ old('email') }}">
                            @error('email')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12">
                            <label for="subject-field" class="pb-2">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject-field" required value="{{ old('subject') }}">
                            @error('subject')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12">
                            <label for="message-field" class="pb-2">Message</label>
                            <textarea class="form-control" name="message" rows="10" id="message-field" required>{{ old('message') }}</textarea>
                            @error('message')
                                <div class="text-danger small">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="col-md-12 text-center">
                            @if(session('success'))
                                <div class="alert alert-success">{{ session('success') }}</div>
                            @endif

                            @if(session('error'))
                                <div class="alert alert-danger">{{ session('error') }}</div>
                            @endif

                            <button type="submit" class="btn btn-primary" id="submit-btn">
                                <span class="btn-text">Send Message</span>
                                <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </form>

                <script>
                    document.addEventListener("DOMContentLoaded", function () {
                        const form = document.getElementById("contact-form");
                        const submitBtn = document.getElementById("submit-btn");
                        const btnText = submitBtn.querySelector(".btn-text");
                        const spinner = submitBtn.querySelector(".spinner-border");

                        form.addEventListener("submit", function () {
                            btnText.textContent = "Sending...";
                            spinner.classList.remove("d-none");
                            submitBtn.disabled = true;
                        });
                    });
                </script>
            </div><!-- End Contact Form -->
        </div>
    </div>
</section>
