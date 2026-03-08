<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Http\Requests\TaskFilterRequest;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Repositories\TaskRepository;

class TaskController extends Controller
{

    public function __construct(protected TaskRepository $taskRepository){}

    /**
     * Display a listing of the resource filtering by status, priority and name
     */
    public function index(TaskFilterRequest $request)
    {
        $request->validated();

        $query = $request->user()->tasks()->getQuery();

        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (!empty($filters['priority'])) {
            $query->where('priority', $filters['priority']);
        }

        if (!empty($filters['title'])) {
            $query->where('title', 'like', $filters['title'] . '%');
        }

        $tasks = $query->orderBy('due_date')->get();

        return ApiResponseClass::sendResponse(TaskResource::collection($tasks),'',200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;

        $task = $this->taskRepository->create($data);

        return ApiResponseClass::sendResponse(new TaskResource($task),'',201);;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = $this->taskRepository->find($id);

        return ApiResponseClass::sendResponse(new TaskResource($task),'',200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $task = $this->taskRepository->update($task, $request->validated());

        return ApiResponseClass::sendResponse(new TaskResource($task),'',200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return ApiResponseClass::sendResponse('Task Deleted Successfully','',204);
    }
}
