<?php

namespace App\Console\Commands;

use App\Enum\TaskStatus;
use App\Mail\ExpireTaskMail;
use App\Models\Task;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

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
        $expiredTasks = Task::whereNot('status', TaskStatus::completed->value)
            ->where('due_date', '<', now())
            ->get();

        Log::info($expiredTasks);
        foreach ($expiredTasks as $task) {
            $task->update(['status' => TaskStatus::expired->value]);

            Mail::to('hello@example.com')->queue(new ExpireTaskMail($task));
        }
            

        return $this->info('completed');
    }
}
