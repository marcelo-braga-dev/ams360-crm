<?php

namespace App\Http\Controllers\Admin\Usuarios\Status;

class AtivoUsuarios
{
    private string $status = 'ativo';

    public function getStatus()
    {
        return $this->status;
    }
}
