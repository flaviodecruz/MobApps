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
  message: string = '';

  constructor(private recipeService: RecipeService) {}

  searchRecipes() {
    this.recipeService.searchRecipes(this.ingredients)
      .subscribe(response => {
        console.log(response);
        this.message = `Found ${response.results.length} recipes`;
      });
  }
}
