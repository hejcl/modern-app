import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiResults, MovieResult} from "./interfaces";
import {delay, Observable} from "rxjs";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  constructor() {
  }

  getTopRatedMovies(page = 1) {
    return this.http.get<ApiResults>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`).pipe(
      delay(5000),
    )
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }

}
