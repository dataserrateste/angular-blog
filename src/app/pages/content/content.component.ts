import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  
  private id:string | null = "0";
  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

  constructor(private route:ActivatedRoute,  private router: Router
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
                      article => article.id.toString() == id)[0]

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
