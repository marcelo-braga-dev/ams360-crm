<?php

namespace App\src\Usuarios;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;

class Admins implements TiposUsuarios
{
    private string $tipo = 'admin';

    public function getTipo(): string
    {
        return $this->tipo;
    }

    function cadastrarUsuario($request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'senha' => 'required|string|max:255',
        ]);

        $user = (new User())
            ->create([
                'name' => $request->nome,
                'tipo' => $this->tipo,
                'email' => $request->email,
                'password' => Hash::make($request->senha),
            ]);

        event(new Registered($user));
    }
}
