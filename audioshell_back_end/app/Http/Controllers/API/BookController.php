<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\bookproduct;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class BookController extends Controller
{
    
    public function update(Request $request, $id)
    {
        // return $id;
        // Find the book by ID
        // $book = bookproduct::find($id);

        $book = bookproduct::select('id', 'book_title', 'authors_name', 'description', 'category')
        ->where('id', $id)
        ->first();

        if ($book) {
            $imagePath = Storage::disk('public')->url('images/' . $book->book_title);
            $imgPath = "http://127.0.0.1:8000/images/" . $book->book_title . ".jpg";
            $audioPath = "http://127.0.0.1:8000/audios/" . $book->book_title . ".mp3";

            $book['image_url'] = $imgPath;
            $book['audio_url'] = $audioPath;
        } 
        else {
            echo "Book not found.";
        }
        return $book;
    }
    
    // public function update2(Request $request, $id)
    // {
    //     $book = bookproduct::select('id', 'book_title', 'authors_name', 'description', 'category')
    //     ->where('id', $id)
    //     ->first();

    //     if ($book) {
    //         $imagePath = Storage::disk('public')->url('images/' . $book->book_title);
    //         $imgPath = "http://127.0.0.1:8000/images/" . $book->book_title . ".jpg";
    //         $audioPath = "http://127.0.0.1:8000/audios/" . $book->book_title . ".mp3";

    //         $book['image_url'] = $imgPath;
    //         $book['audio_url'] = $audioPath;
    //     } 
    //     else {
    //         echo "Book not found.";
    //     }
    //     return $book;
    // }

    public function update2(Request $request, $id)
    {
        $book = bookproduct::select('id', 'book_title', 'authors_name', 'description', 'category')
        ->where('id', $id)
        ->first();

        if ($book) {

            $title = $request->input('book_title');
            $book->book_title = $request->input('book_title');
            $book->authors_name = $request->input('authors_name');
            $book->description = $request->input('description');
            $book->category = $request->input('category');
            
            // $image = $request->file('image_url');
            // $image->move('images/',$title.'.jpg');
            
            $book->save(); // Save the updated book details to the database

            return "Book Detailed";
        } 
        else {
            return "Book not found.";
        }
    }


    public function edit($id)
    {
        $book = bookproduct::findOrFail($id);
        
        return response()->json($book);
    }

    public function index()
    {
        $books = bookproduct::select('id','book_title', 'authors_name', 'description', 'category')->get();
        
        $booksWithImages = $books->map(function ($book) {
            $imagePath = Storage::disk('public')->url('images/' . $book->book_title);
            // $imgpth = "http://127.0.0.1:8000/";
            $imgpth = "http://127.0.0.1:8000/images/".$book->book_title.".jpg";
            $book['image_url'] = $imgpth;
            $audiopath = "http://127.0.0.1:8000/audios/".$book->book_title.".mp3";
            $book['audio_url'] = $audiopath;
            return $book;
        });

        return response()->json($booksWithImages);
    }


    public function upload(Request $request)
    {
        

        $backbook = new bookproduct;
        
        $title = $request->title;
        $authors = $request->authors;
        $description = $request->description;
        $category = $request->category;
        $tags = $request->tags;
        
        $backbook->image_name = $title;
        $backbook->book_title = $title;
        $backbook->audio_name = $title;
        $backbook->authors_name = $authors;
        $backbook->description = $description;
        $backbook->category = $category;
        $backbook->tags = $tags;
        
        //Image antesi
        $image = $request->file('image');
        $image->move('images/',$title.'.jpg');
        
        //Audio antesi
        $audio = $request->file('audio');
        $audio->move('audios/',$title.'.mp3');
        
        $backbook->save();


        $response = array(
            'status' => 200,
            'message' => 'Book Added'
        );
        
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}


//upload function e chilo
// $request->validate([
        //     'title' => 'required|string',
        //     'authors' => 'required|string',
        //     'description' => 'required|string',
        //     'category' => 'required|string',
        //     'tags' => 'required|string',
        //     'image' => 'required|image',
        //     'audio' => 'required|file|mimes:audio/mpeg,mpga,mp3,wav',
        // ]);
        // return $request->title;


                // // Check if the book exists
        // if (!$book) {
        //     return response()->json(['message' => 'Book not found'], 404);
        // }

        // // Update the book attributes
        // $book->book_title = $request->input('book_title');
        // $book->authors_name = $request->input('authors_name');
        // $book->description = $request->input('description');
        // $book->tags = $request->input('tags');
        // $book->category = $request->input('category');
        // if ($request->hasFile('image_url')) {
        //     $image = $request->file('image_url');
        //     $image->move('images/',$title.'.jpg');
        // }

        // if ($request->hasFile('audio_url')) {
        //     $audio = $request->file('audio_url');
        //     $audio->move('audios/',$title.'.mp3');
        // }
        // // Update other attributes as needed...

        // // Save the changes
        // $book->save();

        // // Return the updated book as JSON response
        // return response()->json($book);\

        //Chatgpt er Comment kora code kaaje laage nai
        // $response = array(
        //     'status' => 200,
        //     'message' => 'Customer Added'
        // );
        
        // header('Content-Type: application/json');
        // echo json_encode($response);
        // $image = $request->file('image');
        // $audio = $request->file('audio');

        // $imagePath = $image->store('public/images');
        // $audioPath = $audio->store('public/audios');

        // $book = new Book();
        // $book->image_name = $imagePath;
        // $book->book_title = $request->input('title');
        // $book->audio_name = $audioPath;
        // $book->authors_name = $request->input('authors');
        // $book->description = $request->input('description');
        // $book->category = $request->input('category');
        // $book->tags = $request->input('tags');
        // // $book->save();
        // return "Ok ok ok";

    // public function index()
    // {
    //     $books = bookproduct::select('book_title', 'image_name', 'authors_name', 'description')->get();

    //     return response()->json($books);
    // }
    // public function update(Request $request, $id)
    // {
    //     $book = bookproduct::findOrFail($id);

    //     $book->book_title = $request->input('book_title');
    //     $book->description = $request->input('description');
    //     $book->authors_name = $request->input('authors_name');
    //     $book->category = $request->input('category');
    //     $book->tags = $request->input('tags');

    //     if ($request->hasFile('image_url')) {
    //         $image = $request->file('image_url');
    //         $image->move('images/',$title.'.jpg');
    //     }

    //     if ($request->hasFile('audio_url')) {
    //         $audio = $request->file('audio_url');
    //         $audio->move('audios/',$title.'.mp3');
    //     }

    //     $book->save();

    //     return response()->json(['modifiedCount' => 1]);
    // }