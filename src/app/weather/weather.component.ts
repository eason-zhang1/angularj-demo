import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []

})
export class WeatherComponent implements OnInit {
  id_city = "";
  id_state = "";
  op_city = "";
  op_region = "";
  op_country = "";
  op_date = "";
  op_text = "";
  op_temp = "";
  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
  }

  callWeatherService() {
    this._sharedService.findWeather(this.id_city, this.id_state)
      .subscribe(
        lstresult => {
          this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
          this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
          this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
          this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
          this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
          this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"];
        },
        error => {
          console.log("Error. The findWeather result JSON value is as follows:");
          console.log(error);
        }
      );
  }
}
