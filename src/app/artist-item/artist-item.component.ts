import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css'],
  inputs: ['artist']
})
export class ArtistItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
