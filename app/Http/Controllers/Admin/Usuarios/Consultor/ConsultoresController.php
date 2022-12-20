<?php

namespace App\Http\Controllers\Admin\Usuarios\Consultor;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\User;
use App\src\Pedidos\StatusPedidos;
use App\src\Usuarios\Consultores;
use App\src\Usuarios\Usuarios;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConsultoresController extends Controller
{
    public function index()
    {
        $tipo = (new Consultores())->getTipo();
        $consultores = (new User())->newQuery()->where('tipo', $tipo)->get();

        return Inertia::render('Admin/Usuarios/Consultores/Index', compact('consultores'));
    }

    public function create()
    {
        return Inertia::render('Admin/Usuarios/Consultores/Create');
    }

    public function store(Request $request)
    {
        (new Usuarios())->cadastrar($request, new Consultores);

        modalSucesso('Cadastrado com sucesso!');
        return redirect()->route('admin.usuarios.usuario.index');
    }

    public function show($id)
    {
        $consultor = (new User())->newQuery()->findOrFail($id);
        $pedidos = (new Pedidos())->newQuery()
            ->where('users_id', $id)->orderByDesc('id')->get();

        $pedidos = $pedidos->map(function ($dado) {
            return [
                'id' => $dado->id,
                'cliente' => '',
                'status' => (new StatusPedidos())->getNomeStatus($dado->status),
                'data_criacao' => date('d/m/y H:i', strtotime($dado->created_at))
            ];
        });

        return Inertia::render('Admin/Usuarios/Consultores/Show', compact('consultor', 'pedidos'));
    }
}
