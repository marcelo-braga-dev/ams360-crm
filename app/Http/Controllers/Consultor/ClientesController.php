<?php

namespace App\Http\Controllers\Consultor;

use App\Http\Controllers\Controller;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientesController extends Controller
{
    public function index(Request $request)
    {
        $offset = $request->page ?? 0;
        $limit = 30;

        $naoAtendidosQuery = (new Clientes)->newQuery()
            ->where('status', 0)->offset($offset)->limit($limit)->get();
        $emAndamento = (new Clientes)->newQuery()
            ->where('status', 1)->offset($offset)->limit($limit)->get();

        $naoAtendidos = $naoAtendidosQuery->map(function ($dados) {
            return [
                'id' => "$dados->id",
                'empresa' => $dados->empresa,
                'data' => date('d/m/y H:i', strtotime($dados->status_data)),
                'obs' => $dados->status_anotacoes,
                'telefone' => $dados->telefone,
                'email' => $dados->email,
                'localidade' => $dados->localidade,
            ];
        });

        $offset += $limit;
        return Inertia::render('Consultor/Clientes/Index',
            compact('naoAtendidos', 'emAndamento', 'offset'));
    }

    public function create()
    {
        return Inertia::render('Consultor/Clientes/Create');
    }

    public function show($id)
    {
        $cliente = (new Clientes())->newQuery()->find($id);
        return Inertia::render('Consultor/Clientes/Show', compact('cliente'));
    }

    public function store(Request $request)
    {
        return redirect()->route('consultor.clientes.index');
    }
}
