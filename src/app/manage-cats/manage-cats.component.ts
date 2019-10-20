import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-manage-cats',
  templateUrl: './manage-cats.component.html',
  styleUrls: ['./manage-cats.component.css']
})
export class ManageCatsComponent implements OnInit {

  cats: Cat[] = [];
  newCat: Cat;
  selectedCat: Cat;
  searchText: string;
  males: Cat[] = [];
  females: Cat[] = [];
  filtered = false;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClassSortedByName();
  }

  addCat() {
    if (!this.filtered) {
      this.females = this.cats.filter(cat => cat.gender === Gender.Female);
      this.males = this.cats.filter(cat => cat.gender === Gender.Male);
      this.females.push(Cat.unknownCat);
      this.females.push(Cat.noInfoCat);
      this.males.push(Cat.unknownCat);
      this.males.push(Cat.noInfoCat);
      this.filtered = true;
    }
    this.newCat = new Cat({
      "id": "", "name": this.searchText, "birthday": null,
      "gender": 0, "colour": "", "sireId": "", "damId": "", "title": "",
      "breed": "KBL", "photoLink": ""
    });
  }

  cancel() {
    this.newCat = null;
    this.selectedCat = null;
  }

  updateCat(cat:Cat)
  {
    console.log("updating", cat);
    this.selectedCat = cat;
  }

  saveUpdated(): void {
    this.catService.updateCat(this.selectedCat);
    this.selectedCat = null;
  }
}
