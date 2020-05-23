<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function aboutUs()
    {
    	return view('general.about-us');
    }
    public function privacyPolicy()
    {
    	return view('general.privacy-policy');
    }
}
