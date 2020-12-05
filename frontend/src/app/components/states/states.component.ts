import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// import * as statesData from './statesData.json';
import  data from './data.json';
 
 
@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  title: string = "All States of Somalia";
 
//Get all states data
//allStates: any = (data as any).default;
states: any [];

  constructor() { }

 
  ngOnInit(): void {
    //console.log(statesData.states.banadir)
    //console.log(states.banadir.city);
    console.log(data.states.Ford.Taurus);
      //console.log(data);
      this.states = data;
//      this._http.getRequest().subscribe(res=>this.requests=res);

    
 
 
  }

}
//https://www.codegrepper.com/code-examples/javascript/json+with+multiple+objects