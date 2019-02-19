import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  
  @Output() rated = new EventEmitter<number>();
  
  rates: number[] = [1,2,3,4,5];
  rate: number = 0;
  previewRate: number = 0;
  constructor() { }

  ngOnInit() {
  }

  setRateValue(index:number) {
    this.rate = index
    this.rated.emit(this.rate)
  }

  setPreview(index:number) {
    this.rate = index;
    this.previewRate = this.rate;
  }

  resetRating() {
    this.rate = this.previewRate;
  }

}
