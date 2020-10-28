import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  constructor( private http: HttpClient ) {

    console.log("Testttttttt")
   }


   getArticle(){
     return this.articulo;
   }
   //                   lo que vamos a devolver
   getJsonUsersAlbums() :Observable<any>{
    const urlApi = "https://jsonplaceholder.typicode.com/comments";
    return this.http.get(urlApi);

   }
}
