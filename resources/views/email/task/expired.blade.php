<x-mail::message>
# ⚠️ Task Scaduto

Ciao {{ $task->user->name }},

Il task **{{ $task->title }}** è scaduto il  
{{ $task->due_date->format('d/m/Y') }}.

<x-mail::button :url="'http://tasknova.test/tasks'">
Vai ai tuoi task
</x-mail::button>

Grazie,<br>
{{ config('app.name') }}
</x-mail::message>