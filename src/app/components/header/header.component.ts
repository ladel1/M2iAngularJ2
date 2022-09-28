import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mois:number=3;
  name:string="";

  constructor(
    private operation:OperationService // injection de dependence
  ) { }

  ngOnInit(): void {
    console.log("JE suis dans Header",this.operation.mult(11,20))
  }
  changer(){

  }

}
