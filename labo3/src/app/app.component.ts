import { Component } from '@angular/core';
import { Song } from './models/song';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  artistName : string = "";
  genre : string = "";

  similarArtists : string[] = [];
  topSongs : Song[] = [];

  async getSimilarArtists(){



  }

  async getTopSongs(){



  }

}
