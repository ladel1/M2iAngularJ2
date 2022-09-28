import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // attributes
  title:string = 'Blog';
  p:string = "Bonjour tous le monde";
  prenom:string="Steve";
  annee:number = 0;
  menu: string[]=["Home","Blog","Contact","About us","Register","Login"];
  

  // fonction d'addition
  add(a:number,b:number):number{
    return a+b;
  }
  // event
  OnAjouter(){
    console.log(this.prenom);
  }

  onCalculer(){
    console.log(this.annee);
  }


  recieveDataFromChild(data:string){
    console.log("AppCompo ",data);
  }


}
