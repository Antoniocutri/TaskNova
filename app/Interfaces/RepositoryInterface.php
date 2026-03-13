<?php

namespace App\Interfaces;

use App\Models\Task;
use App\Models\User;

interface RepositoryInterface
{
    public function all(User $user, $filters );
    public function find($id);
    public function create(array $data);
    public function update(Task $task, array $data);
    public function delete(Task $task);
}
