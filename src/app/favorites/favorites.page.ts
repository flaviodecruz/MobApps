import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './favorites.page.html',
})
export class FavoritesPage implements OnInit {

  favoriteIds: number[] = [];
  recipes: any[] = [];
  loading = true;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const stored = localStorage.getItem('favorites');
    this.favoriteIds = stored ? JSON.parse(stored) : [];

    if (this.favoriteIds.length === 0) {
      this.loading = false;
      return;
    }

    // Load each recipe by ID
    this.favoriteIds.forEach(id => {
      this.recipeService.getRecipeDetails(id).subscribe(recipe => {
        this.recipes.push(recipe);
        this.loading = false;
      });
    });
  }

  openDetails(id: number) {
    this.router.navigate(['/recipe', id]);
  }

  removeFavorite(id: number) {
    this.favoriteIds = this.favoriteIds.filter(f => f !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favoriteIds));
    this.recipes = this.recipes.filter(r => r.id !== id);
  }
}
