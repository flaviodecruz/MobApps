import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink   
  ],
  templateUrl: './home.page.html',
})

export class HomePage {

  studentId = 'G00438795';

  ingredients = '';
  recipes: any[] = [];
  favorites: number[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.loadFavorites();
  }

  searchRecipes() {
    if (!this.ingredients.trim()) return;

    this.recipeService.searchRecipes(this.ingredients)
      .subscribe(res => {
        this.recipes = res.results;
      });
  }

  openDetails(id: number) {
    this.router.navigate(['/recipe', id]);
  }

  // ⭐ FAVORITES LOGIC

  loadFavorites() {
    const stored = localStorage.getItem('favorites');
    this.favorites = stored ? JSON.parse(stored) : [];
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  toggleFavorite(id: number) {
    if (this.isFavorite(id)) {
      this.favorites = this.favorites.filter(f => f !== id);
    } else {
      this.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
