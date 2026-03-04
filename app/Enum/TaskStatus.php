<?php

namespace App;

enum TaskStatus:int
{
    case pending=0 ;
    case inProgress = 1;
    case completed = 2;
}
