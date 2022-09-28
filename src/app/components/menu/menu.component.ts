import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() cMenu:string[]=[];
  copyMenu:string[]=[];

  flag:boolean = true;

  constructor(
  ) { }

  ajouter(){
    this.cMenu.push("Rouge");
  }


  ngOnInit(): void {
    for(let item of this.cMenu){
      this.copyMenu.push(item);
    }
    // console.log("recieve");
    // this.p.currentApprovalStageMessage.subscribe(msg => console.log(msg));
  }


}
