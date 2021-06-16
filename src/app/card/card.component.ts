import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('name') name = ""
  @Input('region') region =""
  @Input('population') population = ""
  @Input('flag') flag = ""
  constructor() { }

  ngOnInit(): void {
  }

}
