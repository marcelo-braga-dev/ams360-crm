<?php

if(!function_exists('getNomeCliente')) {
    function getNomeCliente($id) {
        return (new \App\Models\PedidosClientes())->getNomeCliente($id);
    }
}
