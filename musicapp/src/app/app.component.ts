import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'My Music Collection';
  version = "1.0";

  constructor(private router: Router)
  {

  }

  public displayVersion()
  {
    // Display Version in a JavaScript Alertbox
    alert(this.title + " Version: " + this.version);
  }

  public displayArtistList()
  {
    // Navigate to the List Artist Component and tack on a timestamp so the component gets reinitilized
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }
}
