import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1;
  }

  decreaseCounting(){
    if(this.clickCounter > 0){
      this.clickCounter -= 1;
    }  
  }

  setClasses(){
    let myClasses = {
      greaterThan: this.clickCounter > 4,
      notGreaterThan: this.clickCounter <= 4
    }

    return myClasses;
  }
}
