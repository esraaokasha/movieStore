import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

declare var $:any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  imgPrefix:string='';
  trendingTvShows:any[]=[];

  constructor(private _trendingService:TrendingService) { 
    _trendingService.getTrending('tv').subscribe((data)=>{
      this.trendingTvShows=data.results;  
    })
    this.imgPrefix=_trendingService.imgPrefix;

   
  

  }

  ngOnInit(): void {
  }

}
