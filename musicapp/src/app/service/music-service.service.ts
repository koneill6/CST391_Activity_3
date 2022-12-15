import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';
import { Track } from '../models/Track';

@Injectable({providedIn: 'root'})
export class MusicServiceService
{
  artists: Artist[] = [];
  albums: Album[] = [];

  constructor()
  {
    // Create a list of Artists
    this.artists.push(new Artist(0, "Rites of Spring"));

    // Loop over the JSON Music Data and create a list of Albums and its Tracks
    for(let x =0;x < exampledata.length;++x)
    {
      if(exampledata[x].artist == "Rites of Spring")
      {
        let tracks: Track[] = [];
        for(let y =0;y < exampledata[x].tracks.length;++y)
          tracks.push(new Track(exampledata[x].tracks[y].id, exampledata[x].tracks[y].number, exampledata[x].tracks[y].title, exampledata[x].tracks[y].lyrics, exampledata[x].tracks[y].video));
        this.albums.push(new Album(exampledata[x].id, exampledata[x].title, exampledata[x].artist, exampledata[x].description, exampledata[x].year, exampledata[x].image, tracks));
      }
    }
  }

  public getArtists(): Artist[]
  {
    // Return the list of Artists
    return this.artists;
  }

  public getAlbums(artist:string):Album[]
  {
    // Return the list of Albums
    return this.albums;
  }

  public getAlbum(artist:string, id:number):Album
  {
    // Search for the Album in list of Albums and return the Album when found
    for(let x =0;x < this.albums.length;++x)
    {
      if(this.albums[x].Artist == artist && this.albums[x].Id == id)
      {
        let tracks: Track[] = [];
        for(let y =0;y < this.albums[x].Tracks.length;++y)
          tracks.push(new Track(this.albums[x].Tracks[y].Id, this.albums[x].Tracks[y].Number, this.albums[x].Tracks[y].Title, this.albums[x].Tracks[y].Lyrics, this.albums[x].Tracks[y].Video));
        return new Album(this.albums[x].Id, this.albums[x].Title, this.albums[x].Artist, this.albums[x].Description, this.albums[x].Year, this.albums[x].Image, tracks);
      }
    }
  }

  public createAlbum(album:Album):number
  {
    // Add a new Album to the list of Albums
    this.albums.push(album);
    return 1;
  }

  public updateAlbum(album:Album):number
  {
    // Search for the Album in the list of Albums and replace it in the list
    for(let x =0;x < this.albums.length;++x)
    {
      if(this.albums[x].Id == album.Id)
      {
        this.albums.splice(x, 1, album);
        return 0;
      }
    }
    return -1;
  }

  public deleteAlbum(id:number, artist:string):number
  {
    // Search for the Album in the list of Albums and delete from the list
    for(let x =0;x < this.albums.length;++x)
    {
      if(this.albums[x].Id == id)
      {
        this.albums.splice(x, 1);
        return 0;
      }
    }
    return -1;
  }
}
