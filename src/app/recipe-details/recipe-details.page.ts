import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './recipe-details.page.html',
})
export class RecipeDetailsPage implements OnInit {

  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipeDetails(id)
      .subscribe(res => {
        this.recipe = res;
      });
  }
}
