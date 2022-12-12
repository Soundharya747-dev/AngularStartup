import { Component, Pipe, PipeTransform, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
@Pipe({name: 'splice'})
export class splice implements PipeTransform {
  transform(value: string): string {
    return  value.slice(1,value.length-6);
  }
}