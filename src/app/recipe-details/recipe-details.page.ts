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

  constructor(
  private route: ActivatedRoute,
  private recipeService: RecipeService,
  private router: Router
) {}
goBack() {
  this.router.navigate(['/home']);
}


  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipeService.getRecipeDetails(this.recipeId).subscribe({
      next: (data) => {
        this.recipe = data;
      },
      error: (err) => {
        console.error('Failed to load recipe', err);
      },
    });
  }
}
