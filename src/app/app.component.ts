import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;
  artists: Object;
  currentArtist: Object;

  showArtist(artist:any){
    this.query = artist.name;
    artist.highlight = !artist.highlight;
    this.currentArtist = artist;
  }

  ngOnInit():void{
    this.artists = this.http.get<Object>('../assets/data.json').subscribe(data=>{
      this.artists = data;
    });
  }

  constructor(private http: HttpClient){
    this.query = "";
  }
}
