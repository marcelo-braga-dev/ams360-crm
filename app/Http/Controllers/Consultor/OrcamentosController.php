<?php

namespace App\Http\Controllers\Consultor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrcamentosController extends Controller
{
    public function index()
    {
        return Inertia::render('Integrador/Orcamentos/Index');
    }
}
