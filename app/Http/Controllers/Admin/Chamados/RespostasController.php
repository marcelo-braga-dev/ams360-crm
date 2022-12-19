<?php

namespace App\Http\Controllers\Admin\Chamados;

use App\Http\Controllers\Controller;
use App\Models\PedidosChamados;
use App\Models\PedidosChamadosHistoricos;
use App\src\Chamados\Status\NovoChamadoStatus;
use App\src\Chamados\Status\RespondidoChamadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RespostasController extends Controller
{
    public function show($id)
    {
        $chamado = (new PedidosChamados())->dados($id);
        $mensagens = (new PedidosChamadosHistoricos())->getMensagens($chamado['id']);

        return Inertia::render('Admin/Chamados/Responder/Show', compact('chamado', 'mensagens'));
    }

    public function update(Request $request)
    {
        (new RespondidoChamadoStatus())->responder($request->id, $request->mensagem);

        return redirect()->route('admin.chamados.index');
    }
}
