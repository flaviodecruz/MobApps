import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  recipe: any;
  recipeId!: number;
  favorites: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFavorites();
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipeService.getRecipeDetails(this.recipeId).subscribe(res => {
      this.recipe = res;
    });
  }
get ingredients() {
    return this.recipe?.extendedIngredients || [];
  }

  // ⭐ FAVORITES LOGIC (same as Home)

  loadFavorites() {
    const stored = localStorage.getItem('favorites');
    this.favorites = stored ? JSON.parse(stored) : [];
  }

  isFavorite(): boolean {
    return this.favorites.includes(this.recipeId);
  }

  toggleFavorite() {
    if (this.isFavorite()) {
      this.favorites = this.favorites.filter(id => id !== this.recipeId);
    } else {
      this.favorites.push(this.recipeId);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
