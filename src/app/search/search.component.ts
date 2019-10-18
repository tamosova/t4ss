import { Component, OnInit } from '@angular/core';
import { Cat } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cats:Cat[] =[];
  searchText:string;

  constructor(private catService: CatService) { }

  ngOnInit() {
   // this.getCats();
   this.cats=this.catService.getCatsAsClass();
  }

  getCats(): void {
    this.catService.getCats()
      .subscribe(cats => this.cats = cats);
  }


}
