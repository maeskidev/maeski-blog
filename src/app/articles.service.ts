import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articulo:any[]=[
    {
      titulo:"Titulo",
      cuerpo: "Cuerpo"
    },
    {
      titulo:"Titulo 2",
      cuerpo: "Cuerpo 2"
    }

  ]

  constructor() {

    console.log("Testttttttt")
   }


   getArticle(){
     return this.articulo;
   }
}
