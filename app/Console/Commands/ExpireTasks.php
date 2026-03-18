<?php

namespace App\Console\Commands;

use App\Enum\TaskStatus;
use App\Models\Task;
use Illuminate\Console\Command;

class ExpireTasks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:expire-tasks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change status to expired to every task not completed in time';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Task::whereNot('status', TaskStatus::completed->value)
            ->where('due_date', '<', now())
            ->update(['status' => TaskStatus::expired->value]);

        return Command::SUCCESS;
    }
}
