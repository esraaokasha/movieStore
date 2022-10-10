import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imgPrefix:string='';
  trendingMovies:any[]=[];

  constructor(private _trendingService:TrendingService) {
    _trendingService.getTrending('movie').subscribe((data)=>{

      this.trendingMovies=data.results;
    })
    this.imgPrefix=_trendingService.imgPrefix;
   }

  

  ngOnInit(): void {
  }

  

}
