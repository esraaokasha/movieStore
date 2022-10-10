import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movieDetails:any;
  type:any;
  id:any;
  imgPrefix:string='';

  constructor(private _trendingService:TrendingService,private _activatedRoute:ActivatedRoute) {
    this.type=_activatedRoute.snapshot.paramMap.get('type');
    this.id = _activatedRoute.snapshot.paramMap.get('id');
    _trendingService.getMovieDetails(this.type,this.id).subscribe((data)=>{
      this.movieDetails=data
      console.log(this.movieDetails);
    })
    this.imgPrefix=_trendingService.imgPrefix;
   }

  ngOnInit(): void {
  }

}
