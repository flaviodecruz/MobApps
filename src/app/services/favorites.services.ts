import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  private favorites: any[] = [];

  getAll() {
    return this.favorites;
  }

  add(recipe: any) {
    if (!this.isFavorite(recipe.id)) {
      this.favorites.push(recipe);
    }
  }

  remove(id: number) {
    this.favorites = this.favorites.filter(r => r.id !== id);
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(r => r.id === id);
  }
}
