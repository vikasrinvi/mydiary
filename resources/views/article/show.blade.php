@extends('layouts.app')

@section('title', $article->title)

@section('content')
    @component('particals.jumbotron')
        <h4>{{ $article->title }}</h4>

        <h6>{{ $article->subtitle }}</h6>

        <div class="header">
            <i class="fas fa-user"></i>{{ $article->user->name ?? 'null' }}，
            @if(count($article->tags))
            <i class="fas fa-tags"></i>
                @foreach($article->tags as $tag)
                    <a href="{{ url('tag', ['tag' => $tag->tag]) }}">{{ $tag->tag }}</a>，
                @endforeach
            @endif
            <i class="fas fa-clock"></i>{{ $article->published_at->diffForHumans() }}
        </div>
    @endcomponent

    <div class="article container">
    <div class="row text-center">
            <div class="col-md-8 offset-md-2">
            <img class="img-fluid" alt="{{ $article->slug }}" src="{{ $article->page_image }}"  style="borde-radius:50px">
            </div>
            <div class="col-md-8 offset-md-2">
        <script type="text/javascript" language="javascript">
          var aax_size='728x90';
          var aax_pubname = 'vikas0af6-21';
          var aax_src='302';
        </script>
        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
        </div>
        
        </div>
        <br>

        <div class="row">
            <div class="col-md-8 offset-md-2">

            <parse content="{{ $article->content['raw'] }}"></parse>

            @if($article->is_original)
                @endif
                @if(config('blog.social_share.article_share'))
                <div class="footing">
                    <div class="social-share"
                        data-title="{{ $article->title }}"
                        data-description="{{ $article->title }}"
                        {{ config('blog.social_share.sites') ? "data-sites=" . config('blog.social_share.sites') : '' }}
                        {{ config('blog.social_share.mobile_sites') ? "data-mobile-sites=" . config('blog.social_share.mobile_sites') : '' }}
                        initialized></div>
                </div>
            @endif
            <div id="766779035">
                <script type="text/javascript">
                    try {
                        window._mNHandle.queue.push(function (){
                            window._mNDetails.loadTag("766779035", "160x600", "766779035");
                        });
                    }
                    catch (error) {}
                </script>
            </div>
            @if ($next_article) 
                <div class="col-12 px-0 py-4">
                    <h4>{{lang('Next Article')}}</h4>
                    <h5><a href="{{$next_article->slug}}" style="color:#9CAEBF;">{{$next_article->title}}</a></h5>
                </div>
            @endif
            <script type="text/javascript" language="javascript">
              var aax_size='728x90';
              var aax_pubname = 'vikas0af6-21';
              var aax_src='302';
            </script>
            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
            </div>
        </div>
    </div>

	<comment title="Comments"
	commentable-type="articles"
	commentable-id="{{ $article->id }}"
	@can('comment',$article)
	username="{{ Auth::user()->name }}"
	user-avatar="{{ Auth::user()->avatar }}"
	can-comment
	@endcan
	></comment>

@endsection

@section('scripts')
    <script>
        hljs.initHighlightingOnLoad();
    </script>
@endsection
