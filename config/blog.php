<?php

return [

    // Mail Notification
    'mail_notification' => env('MAIL_NOTIFICATION') ?: false,

    // Super Admin
    'super_admin' => env('APP_SUPER_ADMIN') ?: 1,

    // Admin Credentials
    'admin_name' => env('ADMIN_NAME') ?: 'admin',
    'admin_email' => env('ADMIN_EMAIL') ?: 'admin@pigjian.com',
    'admin_password' => env('ADMIN_PASSWORD') ?: 'admin',

    // Default Avatar
    'default_avatar' => env('DEFAULT_AVATAR') ?: '/images/default.png',

    // Default Icon
    'default_icon' => env('DEFAULT_ICON') ?: '/images/favicon.ico',

    // Color Theme
    'color_theme' => 'gray-theme',

    // Meta
    'meta' => [
        'keywords' => 'MyDiary, Diary, Blog, blog,News,Poem,Story,Jnv,Navodaya,NVS,RNV,School, Memories',
        'description' => 'Diary Blog, lets Share our creation'
    ],

    // Social Share
    'social_share' => [
        'article_share'    => env('ARTICLE_SHARE') ?: true,
        'discussion_share' => env('DISCUSSION_SHARE') ?: true,
        'sites'            => env('SOCIAL_SHARE_SITES') ?: 'google,twitter,weibo,facebook',
        'mobile_sites'     => env('SOCIAL_SHARE_MOBILE_SITES') ?: 'google,twitter,weibo,qq,wechat,facebook',
    ],

    // Google Analytics
    'google' => [
        'id'   => env('GOOGLE_ANALYTICS_ID', 'Google-Analytics-ID'),
        'open' => env('GOOGLE_OPEN') ?: false
    ],

    // Article Page
    'article' => [
        'title'       => 'Article.',
        'description' => 'Write it out',
        'number'      => 15,
        'sort'        => 'desc',
        'sortColumn'  => 'published_at',
    ],

    // Discussion Page
    'discussion' => [
        'number' => 20,
        'sort'   => 'desc',
        'sortColumn' => 'created_at',
    ],

    // Footer
    'footer' => [
        'github' => [
            'open' => true,
            'url'  => 'https://github.com/vikasrinvi',
        ],
        'twitter' => [
            'open' => true,
            'url'  => 'https://twitter.com/vikasrnv'
        ],
        'facebook' => [
            'open' => true,
            'url'  => 'https://www.facebook.com/mydiarynavodyan'
        ],
        'meta' => '© My Diary 2020. Powered By Vikas Rinvi',
    ],

    'license' => 'Powered By Jiajian Chan.<br/>This article is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',

];
