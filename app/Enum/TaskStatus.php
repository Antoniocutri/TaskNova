<?php

namespace App\Enum;

enum TaskStatus:int
{
    case pending=1 ;
    case inProgress = 2;
    case completed = 3;
    case expired = 4;
}
