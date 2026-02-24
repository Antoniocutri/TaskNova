<?php

namespace Database\Factories;

use App\Models\User;
use App\TaskPriority;
use App\TaskStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'description' => fake()->text(),
            'status' => fake()->randomElement(TaskStatus::cases())->value,
            'priority' => fake()->randomElement(TaskPriority::cases())->value,
            'due_date' => fake()->dateTimeBetween('tomorrow', '+1 year'),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
