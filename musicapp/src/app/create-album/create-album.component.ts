import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService} from '../service/music-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
  animations: [
    trigger('createAlbumState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class CreateAlbumComponent implements OnInit
{

  show = false;

  album:Album = new Album(Math.floor(Math.random() * 1000000), "", "", "", 0, "", null);
  tracksRaw:string = "";
  wasSubmitted:boolean = false;

  constructor(private service: MusicServiceService) { }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit()
  {
  }

  public onSubmit()
  {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let tracks:Track[] = [];
    let tracksAll = this.tracksRaw.split('\n');
    for(let x=0;x < tracksAll.length;++x)
    {
      let title = "";
      let lyrics = "";
      let video = "";
      let trackInfo = tracksAll[x];
      let trackParts = trackInfo.split(':');
      if(trackParts.length == 3)
      {
        title = trackParts[0];
        lyrics = trackParts[1];
        video = trackParts[2];
      }
      else if(trackParts.length == 2)
      {
        title = trackParts[0];
        lyrics = trackParts[1];
      }
      else
      {
        title = trackParts[0];
      }
      tracks.push(new Track(Math.floor(Math.random() * 1000000), x+1, title, lyrics, video));
    }
    this.album.Tracks = tracks;
    let status = this.service.createAlbum(this.album);
    console.log("The return from createAlbum() was " + status);
    this.wasSubmitted = true;
  }
}
