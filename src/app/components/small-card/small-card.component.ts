import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  
  @Input()
  Id:string = "";
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";

  constructor(){}

  ngOnInit(): void {
  }
}
