import { Component } from '@angular/core';
import { Song } from './models/song';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

const LastFmKey = '9a8a3facebbccaf363bb9fd68fa37abf';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public http: HttpClient){}

   artistName : string = "";
   albumName : string = "";
   imageUrl : string = "";
   albums : Song[] = [];
   songs : Song[] = [];
   artistInput : string = "";

  
   //function to get the albums made by the artist entered in the input field
  async getAlbumSearch(){
    let x = await lastValueFrom(this.http.get<any>(`http://ws.audioscrobbler/2.0/?method=artist.gettopalbums&artist=${this.artistInput}&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json`));
    console.log(x);

    this.songs = []; // array to store the albums 
    this.artistName = this.artistInput; 


    this.albums = [];
    for(let album of x.topalbums.album){
      let imageUrl = album.image[1]["#text"];
      this.albums.push(new Song(album.name, imageUrl));
      
    }

    
  }

  async getTopSongs(){
    let x = await lastValueFrom(this.http.get<any>("https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json"));
    console.log(x);

  }

}
