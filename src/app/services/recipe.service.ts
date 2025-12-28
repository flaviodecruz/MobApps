import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly API_URL = 'https://api.spoonacular.com/recipes';
  private readonly API_KEY = '621f6ee4a37f4fa28e403b6dff0abc42';

  constructor(private http: HttpClient) {}

  searchRecipes(ingredients: string): Observable<any> {
    const params = new HttpParams()
      .set('query', ingredients)
      .set('number', '10')
      .set('apiKey', this.API_KEY);

    return this.http.get(`${this.API_URL}/complexSearch`, { params });
  }

  getRecipeDetails(id: number) {
  return this.http.get(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      params: {
        apiKey: this.API_KEY
      }
    }
  );
}
}