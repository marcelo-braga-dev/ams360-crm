<?php

namespace App\Http\Middleware\Usuarios;

use Closure;
use Illuminate\Http\Request;

class Admins
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->tipo === 'admin') {
            return $next($request);
        }
        return redirect()->route('home');
    }
}
