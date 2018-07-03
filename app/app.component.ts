import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <h1>{{title}}</h1>
      <p>{{greeting}}</p>
    </div>
  `
})
export class AppComponent {
  title: string;
  greeting: string;

  constructor() {
    this.title = 'Binding Tester';
    this.greeting = 'Hello!';
  }
}
