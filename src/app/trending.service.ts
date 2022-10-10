import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  imgPrefix:string='https://image.tmdb.org/t/p/w500';

  constructor(private _httpClient:HttpClient) { }

  getTrending(mediaType:any):Observable<any>{
   return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=123a1f97cca3da403ef840469437492a`);
  }

  getMovieDetails(type:any,id:any){
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=123a1f97cca3da403ef840469437492a&language=en-US`);
  }
}
