<?php

namespace App\Services;

use App\Repositories\TaskRepository;

class DashboardService
{

    public function __construct(protected TaskRepository $taskRepo)
    {

    }

    public function getDashboardData()
    {

    }
}