<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    public function up()
    {
        Schema::create('Okbooks', function (Blueprint $table) {
            $table->id();
            $table->string('image_name');
            $table->string('book_title');
            $table->string('audio_name');
            $table->string('authors_name');
            $table->text('description');
            $table->string('category');
            $table->string('tags');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('books');
    }
}
