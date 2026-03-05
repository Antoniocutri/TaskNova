<?php

namespace App\Enum;

enum TaskPriority:int
{
    case low = 0 ;
    case medium = 1;
    case high = 2;
}
