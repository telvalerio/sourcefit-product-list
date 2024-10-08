<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function list()
    {
        $response = Http::get('https://dummyjson.com/products');
        return $response->json();
    }

    public function search(Request $request)
    {
        $search = $request->query('q', '');
        $response = Http::get("https://dummyjson.com/products/search?q={$search}");
        return $response->json();
    }
}
