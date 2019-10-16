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
    this.females =this.cats.filter(cat=>cat.gender === Gender.Female);
    this.males =this.cats.filter(cat=>cat.gender === Gender.Male);
    this.filtered = true;
  }
  this.selectedCat = cat;
  console.log(this.selectedCat);
  }
}
