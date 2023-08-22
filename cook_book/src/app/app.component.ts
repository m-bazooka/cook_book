import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usedSelection = 'recipe';
  
  onNavigate(selection: string) {
    this.usedSelection = selection;
  }
}
