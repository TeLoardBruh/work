@extends('layouts.app')

@section('title', $post->title)

@section('content')
    @if (now()->diffInMinutes($post->created_at) < 5)
        <div class="alert alert-info">
            New !!
        </div>
    @endif
    <h1>{{ $post->title }}</h1>
    <p>{{ $post->content }}</p>
    <p>Added {{ $post->created_at->diffForHumans() }}</p>
@endsection
