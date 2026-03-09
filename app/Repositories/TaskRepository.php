<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Task;

class TaskRepository implements RepositoryInterface
{
    public function all()
    {
        return Task::all();
    }

    public function find($id)
    {
        return Task::findOrFail($id);
    }

    public function create(array $data)
    {
        return Task::create($data);
    }

    public function update(Task $task, array $data)
    {
        $task->update($data);

        return $task->fresh();
    }

    public function delete(Task $task)
    {
        return $task->delete();
    }
}