<?php

namespace App\Services;

class Images
{
    public function armazenar($request, $file, $path = 'images')
    {
        $disjuntor = null;
        if ($request->hasFile($file)) {
            if ($request->file($file)->isValid()) {
                $disjuntor = $request->$file->store($path);
            }
        }
        return $disjuntor;
    }
}
