import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  constructor(private http: HttpClient) {}

  searchRecipes(ingredients: string) {
    return this.http.get<any>(this.apiUrl, {
      params: {
        includeIngredients: ingredients,
        number: '10',
        apiKey: environment.spoonacularApiKey
      }
    });
  }
}
