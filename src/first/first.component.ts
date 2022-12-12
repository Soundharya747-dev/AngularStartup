import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  Search:any;
  public books: Array<any> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];
  constructor() { }

  ngOnInit() {
  }

}
// @Pipe({name: 'Search'})
// export class Search  implements PipeTransform {
// transform(value:any){
//   if(![null,undefined,""].includes(value)){
    
//   }
// }
// }




