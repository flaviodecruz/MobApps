import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiKey = 'YOUR_API_KEY_HERE';
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  constructor(private http: HttpClient) {}

  searchRecipes(ingredients: string): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        includeIngredients: ingredients,
        number: '10',
        apiKey: this.apiKey
      }
    });
  }
}
