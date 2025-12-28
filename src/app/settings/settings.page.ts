import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './settings.page.html',
})
export class SettingsPage {

  unit: 'metric' | 'imperial' | 'us' = 'metric';

  constructor() {
    const savedUnit = localStorage.getItem('unit');
    if (savedUnit === 'metric' || savedUnit === 'imperial' || savedUnit === 'us') {
      this.unit = savedUnit;
    }
  }

  saveUnit() {
    localStorage.setItem('unit', this.unit);
  }
}
