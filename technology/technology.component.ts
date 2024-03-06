import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  template: `
    <h1>
      Technology
    </h1>
    <ul>
      <li>Angular</li>
      <li>Node</li>
      <li>Express</li>
      <li>Mongodb</li>
      </ul>
  `,
  styles: ` h1{
    text-decoration: underline;
    text-align:center;
    font-size:30px;
    color:cyan;
  }
  ul{
    text-align:center;
    font-size:30px;
    color:cyan;
  }
  `
})
export class TechnologyComponent {

}
