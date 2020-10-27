import { Component, OnInit } from '@angular/core';

//aqui voy a usar e servicio
import { ArticlesService } from './../articles.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  articuloVar:any[]=[];

  constructor(private _servicioArticulo:ArticlesService) {

    this.articuloVar = _servicioArticulo.getArticle();

   }

  ngOnInit(): void {
  }

}
