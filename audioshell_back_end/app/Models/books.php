<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class books extends Model
{
    use HasFactory;
    protected $fillable = ['image_name', 'book_title', 'audio_name', 'authors_name', 'description', 'category','tags'];
}
