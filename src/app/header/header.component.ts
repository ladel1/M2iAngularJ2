import { Component, OnInit } from '@angular/core';
import { PassService } from '../services/pass.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mois:number=3;
  name:string="";

  constructor(
    private p:PassService,
  ) { }

  ngOnInit(): void {
    console.log("send...")
    this.p.updateApprovalMessage("coucou");    
  }
  changer(){
    console.log("send...")
    this.p.updateApprovalMessage(this.name); 
  }

}
