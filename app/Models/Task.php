<?php

namespace App\Models;

use App\Enum\TaskPriority;
use App\Enum\TaskStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        "title",
        "description",
        "status",
        "due_date",
        "priority"
    ];

    protected $casts = [
        'status' => TaskStatus::class,
        'priority' => TaskPriority::class,
        'due_date' => 'date',
    ];

    /**
    * Get the user that owns the task.
    */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
