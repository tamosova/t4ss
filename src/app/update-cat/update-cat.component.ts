import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  private catsJSON;
  cats:Cat[] =[];
  selectedCat: Cat;
  searchText:string;
  males:Cat[] =[];
  females:Cat[] =[];
  filtered = false;
  noInfoCat = new Cat({
    "id": -1, "name": "No information", "birthday": "",
    "gender": "", "colour": "", "sireId": "-1", "damId": "-1", "title": "",
    "breed": "", "photoLink": ""
  })
  unknownCat = new Cat({
    "id": 0, "name": "Unknown", "birthday": "",
    "gender": "", "colour": "", "sireId": "0", "damId": "0", "title": "",
    "breed": "", "photoLink": ""
  })

  constructor(private catService: CatService) { }

  ngOnInit() {
   this.getCats();
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClass();
  }

  onSelect(cat: Cat): void {
    if (!this.filtered)
{
    this.females =this.cats.filter(cat=>cat.gender === Gender.Female || cat.id == 0 || cat.id == -1);
    this.males =this.cats.filter(cat=>cat.gender === Gender.Male|| cat.id == 0 || cat.id == -1);
    this.filtered = true;
  }
  this.selectedCat = cat;
  console.log(this.selectedCat);
  }
}
