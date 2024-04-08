import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  counterData: any = [{"number":"16K","title":"Clients"},
  {"number":"189+","title":"Team Members"},
  {"number":"13K","title":"Active Work"}]

  ngOnInit(): void {
  }

}
