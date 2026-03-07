<?php

namespace App\Enum;

enum TaskStatus:int
{
    case pending=0 ;
    case inProgress = 1;
    case completed = 2;
    case expired = 3;
}
