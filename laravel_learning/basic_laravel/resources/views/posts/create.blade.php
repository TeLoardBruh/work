@extends('layouts.app')

@section('title', 'Create Blog')

@section('content')

    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        @include('posts.partials.form')
        <div class="d-grid gap-2 mt-2">
            <input type="submit" value="Create" class="btn btn-primary btn-block" />
        </div>
    </form>
@endsection
