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
        $stats = $this->taskRepo->getStats();

        //calculate the percentage of complete, pending and overdue tasks
        $percentages = [
            'completed' => $stats['total_tasks'] ? round($stats['completed'] / $stats['total_tasks'] * 100) : 0,
            'pending' => $stats['total_tasks'] ? round($stats['pending'] / $stats['total_tasks'] * 100) : 0,
            'overdue' => $stats['total_tasks'] ? round($stats['overdue'] / $stats['total_tasks'] * 100) : 0,
        ];

        return [
            'stats' => $stats,
            'percentages' => $percentages,
            'due_soon' => $this->taskRepo->getDueSoon()
        ];
    }
}