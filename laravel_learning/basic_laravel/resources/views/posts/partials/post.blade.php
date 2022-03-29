    <h3><a href="{{ route('posts.show', ['post' => $post->id]) }}"
            class="me-2">{{ $post['title'] }}</a></h3>

    <div class="mb-3 d-flex">
        <a href="{{ route('posts.edit', ['post' => $post->id]) }}" class="btn btn-primary me-2">Edit</a>
        <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST" class="d-line">
            @csrf
            @method('DELETE')
            <input type="submit" value="Delete!" class="btn btn-danger">
        </form>
    </div>
