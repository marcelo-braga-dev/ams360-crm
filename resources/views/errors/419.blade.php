@extends('errors::minimal')

@section('title', __('Page Expired'))
@section('code', '419')
@section('message', __('Página expirada'))
<script>
    window.location.href = '/';
</script>
