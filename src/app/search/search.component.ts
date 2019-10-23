import { Component, OnInit } from '@angular/core';
import { Cat } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cats: Cat[] = [];
  searchText: string;
  searchedCats: Cat[] = [];
  previewCatId: number;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClassSortedByName();
  }

  preview(cat: Cat) {
    this.previewCatId = cat.id;
  }

  showNext(id)
  {
    this.previewCatId = null;
  }
}
