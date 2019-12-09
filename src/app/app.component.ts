import { Component } from '@angular/core';

@Component({
  selector: 'training-root',
  template: `
    <training-common-header></training-common-header>
    <training-navigation></training-navigation>
    <router-outlet></router-outlet>
    <training-common-footer></training-common-footer>
  `
})
export class AppComponent { }
