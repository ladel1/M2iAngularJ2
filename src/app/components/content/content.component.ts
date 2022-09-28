import { Component, OnInit, Input } from '@angular/core';
import { OperationService } from '../../services/operation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() cPrenom:string="";
  classes={ 'c1':false,'c2':true }
  age:number=19;
  styles = {
    'background-color': (this.age>=18)? 'red':'green',
    'font-size':(this.age>=18)?'xx-large':'xx-small'
  }
  constructor(
    private operation:OperationService // injection de dependence
  ) { }

  ngOnInit(): void {
    console.log(this.operation.add(15,20));
    var age:number=19;
    console.log((age>18)?"Majeur":"Mineur")// ternaire
  }

  changer(){
    this.cPrenom="Pierre";
  }


}
