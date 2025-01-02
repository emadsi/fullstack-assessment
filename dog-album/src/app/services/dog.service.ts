import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  // Fetch breeds with sub-breeds
  getBreeds(): Observable<string[]> {
    return this.http.get<{ message: { [key: string]: string[] } }>(`${this.baseUrl}/breeds/list/all`).pipe(
      map((response) =>
        Object.entries(response.message)
          .filter(([_, subBreeds]) => subBreeds.length > 0)
          .map(([breed]) => breed)
      )
    );
  }

  // Fetch images by breed
  getByBreed(breed: string, count: number): Observable<string[]> {
    return this.http.get<{ message: string[] }>(`${this.baseUrl}/breed/${breed}/images`).pipe(
      map((response) => response.message.slice(0, count)) // Limit the number of images
    );
  }
}
