<?php

namespace App\Http\Controllers\Admin\Fornecedores;

use App\Http\Controllers\Controller;
use App\Models\Fornecedores;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FornecedoresController extends Controller
{
    public function index()
    {
        $fornecedores = (new Fornecedores())->newQuery()->orderByDesc('id')->get();

        return Inertia::render('Admin/Fornecedores/Index', compact('fornecedores'));
    }

    public function store(Request $request)
    {
        (new Fornecedores())->newQuery()
            ->create([
                'nome' => $request->fornecedor
            ]);

        modalSucesso("Fornecedor cadastrado com sucesso!");
        return redirect()->route('admin.fornecedores.index');
    }
}
