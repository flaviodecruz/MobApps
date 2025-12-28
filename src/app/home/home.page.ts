import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
})
export class HomePage {

  ingredients = '';
  recipes: any[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  searchRecipes() {
    if (!this.ingredients.trim()) return;

    this.recipeService.searchRecipes(this.ingredients)
      .subscribe(res => {
        this.recipes = res.results;
      });
  }

  openDetails(id: number) {
  console.log('Clicked recipe id:', id);
  this.router.navigate(['/recipe', id]);
}

}
