<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\books;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'authors' => 'required|string',
            'description' => 'required|string',
            'category' => 'required|string',
            'tags' => 'required|string',
            'image' => 'required|image',
            'audio' => 'required|file|mimes:audio/mpeg,mpga,mp3,wav',
        ]);

        $image = $request->file('image');
        $audio = $request->file('audio');

        // Move image to the 'images' directory
        $imagePath = $image->store('images');

        // Move audio to the 'audios' directory
        $audioPath = $audio->store('audios');

        // Store book data in the 'books' table
        $book = new Book();
        $book->image_name = $imagePath;
        $book->book_title = $request->input('title');
        $book->audio_name = $audioPath;
        $book->authors_name = $request->input('authors');
        $book->description = $request->input('description');
        $book->category = $request->input('category');
        $book->tags = $request->input('tags');
        $book->save();

        return response()->json(['message' => 'Book uploaded successfully']);
    }
}

// class BooksController extends Controller
// {
//     // public function upload(Request $request)
//     // {
//     //     // $request->validate([
//     //     //     'image' => 'required|file',
//     //     //     'audio' => 'required|file',
//     //     //     'title' => 'required|string',
//     //     //     'author' => 'required|string',
//     //     //     'category' => 'required|string',
//     //     //     'description' => 'required|string',
//     //     //     'tags' => 'required|string',
//     //     // ]);

//     //     if ($request->file('image')->isValid() && $request->file('audio')->isValid()) {
//     //         $path1 = $request->file('image')->store('images');
//     //         $path2 = $request->file('audios')->store('audios');
            
//     //         // Retrieve the text values
//     //         $title = $request->input('title');
//     //         $author = $request->input('author');
//     //         $category = $request->input('categtory');
//     //         $description = $request->input('description');
//     //         $tags = $request->input('tags');
            
//     //         // Process the uploaded files and text as needed
            
//     //         return response()->json(['message' => 'Files and text uploaded successfully']);
//     //     } else {
//     //         return response()->json(['error' => 'Upload failed'], 400);
//     //     }
//     // }
//     public function upload(Request $request) {
    
//         if($request->has('image')) {
//             $books = new books;
//             $books->image_name = $request->title;
//             $books->audio_name = $request->title;
//             $books->book_title = $request->title;
//             $books->authors_name = $request->author;
//             $books->description = $request->description;
//             $books->category = $request->category;
//             $books->tags = $request->tags;
//             $okk = $request->title;
            
            
//             $ForName = $request->title;

//             $image = $request->file('image');
//             $image_namex = $ForName.'.jpg'; //time().'.'.$image->getClientOriginalExtension();
//             $image->move('images/',$image_namex);
//             // // books::create([['image'=>$image_name]]);
//             // $audio = $request->file('audio');
//             // $audio_namex = $ForName.'.mp3';//time().'.'.$audio->getClientOriginalExtension();
//             // $audio->move('audios/',$audio_namex);

//             // // $books->image_name = $image_name;
//             // // $books->audio_name = $audio_name;
//             return $ForName;
//             return response()->json(['success'=>'Book Uploeaded Successfully']); 
//         }
//         return response()->json('please try again');
//     }
// }


