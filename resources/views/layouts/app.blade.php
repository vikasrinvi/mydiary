    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="{{ config('blog.meta.keywords') }}">
    <meta name="description" content="{{ config('blog.meta.description') }}">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="text/javascript">
    window._mNHandle = window._mNHandle || {};
    window._mNHandle.queue = window._mNHandle.queue || [];
    medianet_versionId = "3121199";
    </script>
<script src="https://contextual.media.net/dmedianet.js?cid=8CU7R7723" async="async"></script>
    <meta name="propeller" content="56b81495bdf067849c1c0c30500766eb">
    <meta name="google-site-verification" content="HeQPL9wxgcyQM-5zjq5dgXPXAt8FzJ7ddqQ-mUJu-gU" />

    <link rel="shortcut icon" href="{{ config('blog.default_icon') }}">

    <title>@yield('title', config('app.name'))</title>

    <link rel="stylesheet" href="{{ mix('css/home.css') }}">
    <link rel="stylesheet" href="{{ mix('css/themes/' . config('blog.color_theme') . '.css') }}">

    <!-- Scripts -->
    <script>
        window.Language = '{{ config('app.locale') }}';

        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>

    @yield('styles')
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167000093-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-167000093-1');
    </script>



</head>
<body>
    <div id="app">
        @include('particals.navbar')

        <div class="main">
            @yield('content')
            <div class="col-md-8 offset-md-2">
            <script type="text/javascript" language="javascript">
              var aax_size='728x90';
              var aax_pubname = 'vikas0af6-21';
              var aax_src='302';
            </script>
            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
        </div>
        
        </div>

        @include('particals.footer')
    </div>

    <!-- Scripts -->
        <script data-ad-client="ca-pub-4329833524801916" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <script src="{{ mix('js/home.js') }}"></script>

    @yield('scripts')

    <script>
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
    </script>

    @if(config('blog.google.open'))
    <script>
        
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '{{ config('blog.google.id') }}', 'auto');
        ga('send', 'pageview');
    </script>
    @endif
</body>
</html>
