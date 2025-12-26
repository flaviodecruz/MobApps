import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html'
})
export class HomePage {

  ingredients: string = '';
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  searchRecipes() {
    console.log('Searching for:', this.ingredients);

    this.recipeService.searchRecipes(this.ingredients)
      .subscribe((response: any) => {
        this.recipes = response.results;
        console.log(this.recipes);
      });
  }
}
