import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat-general/cat';
import { CatService } from '../cat-general/cat.service';

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
  viewedCats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
    if (localStorage.getItem('viewedCats')) {
      this.viewedCats = JSON.parse(localStorage.getItem('viewedCats'));
    }
    else {
      this.viewedCats = [];
    }
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClassSortedByName();
  }

  getCat(id: number): Cat {
    return this.cats.find(cat => cat.id == id);
  }

  preview(cat: Cat) {
    this.previewCatId = null;
    this.previewCatId = cat.id;
  }

  closePreview(id: number) {
    if (!this.viewedCats) {
      this.viewedCats = [];
    }
    if (!this.viewedCats.find(cat => cat.id == id)) {
      this.viewedCats.push(this.getCat(id));
      localStorage.setItem('viewedCats', JSON.stringify(this.viewedCats));
    }
    this.previewCatId = null;
  }

  clearPreviewedList(): void {
    this.viewedCats = null;
    localStorage.setItem('viewedCats', "");
  }
}
