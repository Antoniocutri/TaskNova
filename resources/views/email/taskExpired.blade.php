<h1>Task scaduto!</h1>
<p>Ciao {{ $task->user->name }},</p>
<p>Il tuo "{{ $task->title }}" è scaduto il {{ $task->due_date->format('d M Y') }}.</p>