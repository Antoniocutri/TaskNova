<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

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

    /**
     * Retrieve task statistics including total, completed, pending, and overdue tasks.
     *
     * @return object
     */
    public function getStats():Task
    {
        throw new \Exception('Not implemented');
    }

    /**
     * Retrieve the most recently created tasks.
     *
     * @param int $limit Maximum number of tasks to retrieve.
     * @return \Illuminate\Database\Eloquent\Collection<int, Task>
     */
    public function getRecentActivity():Collection
    {
        throw new \Exception('Not implemented');
    }

    /**
     * Get the nearest upcoming tasks that are not completed.
     *
     * @param int $limit Maximum number of tasks to return.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getDueSoon():Collection
    {
        throw new \Exception('Not implemented');
    }
}