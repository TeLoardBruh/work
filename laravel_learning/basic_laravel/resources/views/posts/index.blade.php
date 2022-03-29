@extends('layouts.app')

@section('title', 'Post Details')

@section('content')
    @forelse ($posts as $key => $post)
        @include('posts.partials.post')
    @empty
        <div>No posts for now</div>

    @endforelse

@endsection
