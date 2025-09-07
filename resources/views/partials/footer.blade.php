<footer id="footer" class="footer">
    {{-- <div class="footer-newsletter">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <form action="{{ route('newsletter.subscribe') }}" method="post" class="php-email-form">
                        @csrf
                        <div class="newsletter-form">
                            <input type="email" name="email" required>
                            <input type="submit" value="Subscribe">
                        </div>
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                    </form>
                </div>
            </div>
        </div>
    </div> --}}

    <div class="container footer-top">
        <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
                <a href="{{ url('/') }}" class="logo">
                    <img src="{{ asset('assets/img/gls.jpg') }}" alt="Logo" style="height:40px;">
                    {{-- <img src="{{ asset('assets/img/glsnusaraya.png') }}" alt="Logo" style="height:40px;"> --}}
                </a>
                <div class="footer-contact pt-3">
                    <p>{{ config('site.address.street', 'Jl. Lingkar Selatan, KP Gedong Baya') }}</p>
                    <p>{{ config('site.address.city', 'Kel. Kalitimbang, Kec. Cibeber, Kota Cilegon, Provinsi Banten 42191') }}</p>
                    <p class="mt-3"><strong>Phone:</strong> <span>{{ config('site.phone', '+1 5589 55488 55') }}</span></p>
                    <p><strong>Email:</strong> <span>{{ config('site.contact_email', 'info@example.com') }}</span></p>
                </div>
            </div>

            {{-- <div class="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="{{ route('home') }}">Home</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                </ul>
            </div> --}}

            {{-- <div class="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                </ul>
            </div> --}}

            {{-- <div class="col-lg-4 col-md-12">
                <h4>Follow Us</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div class="social-links d-flex">
                    @if(config('site.social.twitter'))
                        <a href="{{ config('site.social.twitter') }}"><i class="bi bi-twitter-x"></i></a>
                    @endif
                    @if(config('site.social.facebook'))
                        <a href="{{ config('site.social.facebook') }}"><i class="bi bi-facebook"></i></a>
                    @endif
                    @if(config('site.social.instagram'))
                        <a href="{{ config('site.social.instagram') }}"><i class="bi bi-instagram"></i></a>
                    @endif
                    @if(config('site.social.linkedin'))
                        <a href="{{ config('site.social.linkedin') }}"><i class="bi bi-linkedin"></i></a>
                    @endif
                </div>
            </div> --}}
        </div>
    </div>

    <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">{{ config('app.name', 'BizLand') }}</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
        </div>
    </div>
</footer>
