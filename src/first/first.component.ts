import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  Search:any;
 books = [
    {Sno:1, title: "War of Lanka", description: "book desc 1" },
    { Sno:2,title: "Atomic Habits", description: "book desc 2" },
    { Sno:3,title: "The Palace of Illusions", description: "book desc 3" },
    {Sno:4, title: "The Greatest Secret:", description: "book desc 4 " }
  ];
  constructor() { }

  ngOnInit() {
  }

  Sort(){
   
    var list=this.books;
      this.books=list.sort((arr,brr)=>{
       return (brr.Sno<arr.Sno)? brr.Sno-arr.Sno:
          arr.Sno-brr.Sno;});
      
    
  }

}
@Pipe({name: 'Search'})
export class Search implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data){
        return JSON.stringify(data).toLowerCase().includes(args);
    });
}
}


