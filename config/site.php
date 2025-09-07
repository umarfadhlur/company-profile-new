<?php

return [
    'contact_email' => env('SITE_CONTACT_EMAIL', 'glsnusaraya@gmail.com'),
    'phone' => env('SITE_PHONE', '+62 821 4867 2240 / +62 812 1282 9292'),
    'logo' => env('SITE_LOGO', null),

    'address' => [
        'street' => env('SITE_ADDRESS_STREET', 'Jl. Lingkar Selatan, KP Gedong Baya'),
        'city' => env('SITE_ADDRESS_CITY', 'Kel. Kalitimbang, Kec. Cibeber, Kota Cilegon, Provinsi Banten 42191'),
    ],

    'social' => [
        'twitter' => env('SITE_SOCIAL_TWITTER', null),
        'facebook' => env('SITE_SOCIAL_FACEBOOK', null),
        'instagram' => env('SITE_SOCIAL_INSTAGRAM', null),
        'linkedin' => env('SITE_SOCIAL_LINKEDIN', null),
    ],
];
