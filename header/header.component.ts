import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      Angular Mission Program
    </p>
    <p>
      {{"Mission Name is : " + missionname}}
    </p>
    <p>
      {{"Technology is : " + techname}}
    </p>

  `,
  styles: `
    p{
      text-align:center;
      font-size:30px;
      color:red;
    }
  
  `
})
export class HeaderComponent {
  public missionname = "Angular Program";
  public techname = "Angular4";

}
