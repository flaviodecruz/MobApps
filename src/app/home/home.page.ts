import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html'
})
export class HomePage {

  ingredients: string = '';
  message: string = '';

  searchRecipes() {
    // For now, just prove the button works
    this.message = `Searching for: ${this.ingredients}`;
    console.log(this.message);
  }
}
