import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  template: `
    <h1>Crew</h1>
    <ul>
      <li>Bharadwaj</li>
      <li>Prasanth</li>
      <li>Jasmine</li>
      </ul>
  `,
  styles: ` h1{
    text-decoration: underline;
    text-align:center;
    font-size:30px;
    color:orange;
  }
  ul{
    text-align:center;
    font-size:30px;
    color:orange;
  }
  
  `
})
export class CrewComponent {

}
