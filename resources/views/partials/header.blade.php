<header id="header" class="header sticky-top">
    <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-between">
            <a href="{{ url('/') }}" class="logo">
                    <img src="{{ asset('assets/img/gls.jpg') }}" alt="Logo" style="height:40px;">
                    {{-- <img src="{{ asset('assets/img/glsnusaraya.png') }}" alt="Logo" style="height:40px;"> --}}
            </a>
            @include('partials.navigation')
        </div>
    </div>
</header>
