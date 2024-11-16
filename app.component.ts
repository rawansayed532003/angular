import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  Username:string='';
print() {
throw new Error('Method not implemented.');
}
// username: any;
// print() {
// throw new Error('Method not implemented.');
// }
  title = 'ranon';
  data={
    name: 'Rawan',
   
  }

  onlogoclick() :void{
alert('logoclick')
}
// @Input() name: string='';

}

print()
{
  console.log('AppComponent called print method');
}



