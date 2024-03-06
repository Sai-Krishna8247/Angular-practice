import { Component } from '@angular/core';

@Component({
  selector: 'app-experiments',
  template: `
    <h1>
      Experiments
    </h1>
    <ul>
      <li>SPA</li>
      <li>Server Side Application</li>
      <li>Database Application</li>
    </ul>
  `,
  styles: `
  h1{
    text-decoration: underline;
    text-align:center;
    font-size:30px;
    color:green;
  }
  ul{
    text-align:center;
    font-size:30px;
    color:green;
  }
  
  `
})
export class ExperimentsComponent {

}
