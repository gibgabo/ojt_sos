<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    protected $model = \App\Models\Post::class; // Specify the model

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'PIN' => $this->faker->unique()->numberBetween(1000, 9999), // Unique PIN
            'IncidentType' => $this->faker->numberBetween(1, 5), // Adjust range as needed
            'Name' => $this->faker->name(), // Use faker's name method
            'Comment' => $this->faker->sentence(), // Shorter text
            'src' => $this->faker->url(), // Generate a URL
        ];
    }
}
