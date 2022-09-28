import { Component, OnInit, Input } from '@angular/core';
import { PassService } from '../services/pass.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() cMenu:string[]=[];

  flag:boolean = true;

  constructor(
    private p:PassService,
  ) { }

  ngOnInit(): void {
    console.log("recieve");
    this.p.currentApprovalStageMessage.subscribe(msg => console.log(msg));
  }


}
