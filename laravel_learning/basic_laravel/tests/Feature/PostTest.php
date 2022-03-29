<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/posts');

        $response->assertSeeText('No posts for now');
    }

    public function testSee1BlogPostWhenThereIs1()
    {
        // Arrange
        $post = new BlogPost();
        $post->title = 'New title';
        $post->content = 'Content of the blog post';
        $post->save();

        // Act
        $response = $this->get('/posts');

        // Assert
        $response->assertSeeText('New title');

        $this->assertDatabaseHas('blog_posts', [
            'title' => 'New title'
        ]);
    }
    
    public function testPostStore()
    {
        $params = [
            'title' => 'this must be more than 5',
            'content' => 'this must be more than 10'
        ];
        $this->post('/posts', $params)->assertStatus(302)->assertSessionHas('status');
        $this->assertEquals(session('status'), 'The blog post has created');
    }
}
