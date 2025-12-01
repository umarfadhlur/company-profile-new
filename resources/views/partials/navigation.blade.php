<nav id="navmenu" class="navmenu d-flex align-items-center">
    <ul>
        <li><a href="#hero" class="{{ request()->is('/') ? 'active' : '' }}">{{ __('Home') }}</a></li>
        <li><a href="#about">{{ __('About') }}</a></li>
        <li><a href="#services">{{ __('Services') }}</a></li>
        <li><a href="#projects">{{ __('Projects') }}</a></li>
        <li><a href="#contact">{{ __('Contact') }}</a></li>
    </ul>

    {{-- Language Switcher --}}
    <div class="lang-switcher d-flex align-items-center ms-3">
        <a href="{{ url('/lang/en') }}" class="me-2">
            <img src="{{ asset('assets/flags/en.jpg') }}" alt="English"
                class="flag-icon {{ app()->getLocale() === 'en' ? 'active-flag' : '' }}">
        </a>
        <a href="{{ url('/lang/ko') }}">
            <img src="{{ asset('assets/flags/ko.png') }}" alt="Korean"
                class="flag-icon {{ app()->getLocale() === 'ko' ? 'active-flag' : '' }}">
        </a>
    </div>

    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
</nav>
<style>
    .flag-icon {
        width: 26px;
        height: 18px;
        border-radius: 3px;
        object-fit: cover;
        opacity: 0.6;
        transition: 0.2s ease;
    }

    .flag-icon:hover {
        opacity: 1;
        transform: scale(1.05);
    }

    .active-flag {
        opacity: 1 !important;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    }

    /* Mobile responsiveness */
    @media (max-width: 992px) {
        .lang-switcher {
            margin-top: 10px;
        }

        .flag-icon {
            width: 24px;
            height: 16px;
        }
    }
</style>
