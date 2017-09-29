import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  id_movie = "";
  mv_Title = "";
  mv_Rated = "";
  mv_Released = "";
  mv_Director = "";
  mv_Actors = "";
  mv_Plot = "";
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callMovieService() {
    this._sharedService.findMovie(this.id_movie)
      .subscribe(
        lstresult => {
          this.mv_Title = lstresult["Title"];
          this.mv_Rated = lstresult["Rated"];
          this.mv_Released = lstresult["Released"];
          this.mv_Director = lstresult["Director"];
          this.mv_Actors = lstresult["Actors"];
          this.mv_Plot = lstresult["Plot"];
        },
        error => {
          console.log("Error. The findMovie result JSON value is as follows:");
          console.log(error);
        }
      );
  }
}
