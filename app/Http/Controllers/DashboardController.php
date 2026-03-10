<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Services\DashboardService;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function __construct(protected DashboardService $dashboardService)
    {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ApiResponseClass::sendResponse($this->dashboardService->getDashboardData(),'',200);;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
