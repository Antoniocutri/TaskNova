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
    public function getStats()
    {
        $tasks = Task::where('user_id', auth()->id());

        return [
            "total_tasks" => (clone $tasks)->count(),
            "completed" => (clone $tasks)->where('status', 3)->count(),
            "pending" => (clone $tasks)->whereIn('status', [1,2])->count(),
            "overdue" => (clone $tasks)->where('status', 4)->count(),
        ];
    }

    /**
     * Get the nearest upcoming tasks that are not completed.
     *
     * @param int $limit Maximum number of tasks to return.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getDueSoon($limit = 5):Collection
    {
        return Task::where('user_id', auth()->id())
            ->whereNotIn('status', [3,4])
            ->orderBy('due_date')
            ->limit($limit)
            ->get();
    }
}