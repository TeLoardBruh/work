@extends('layouts.app')

@section('title', 'Update Blog')

@section('content')

    <form action="{{ route('posts.update', ['post' => $post->id]) }}" method="POST">
        @csrf
        @method('PUT')
        @include('posts.partials.form')
        <div class="d-grid gap-2 mt-2">
            <input type="submit" value="Update" class="btn btn-primary btn-block" />
        </div>
    </form>
@endsection
