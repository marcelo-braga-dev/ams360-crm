<?php

namespace App\Http\Middleware\Usuarios;

use Closure;
use Illuminate\Http\Request;

class Consultores
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->tipo === (new \App\src\Usuarios\Consultores())->getTipo()) {
            return $next($request);
        }
        return redirect()->route('home');
    }
}
