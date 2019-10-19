import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  newCat: Cat = null;
  cats: Cat[];
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
    this.newCat = new Cat({"id": "", "": "", "birthday": "0001-01-01 00:00:00", 
    "gender":0, "colour": "", "sireId": "", "damId":"", "title": "",
     "breed": "", "photoLink":""});
    this.getCats();
   }
 
   getCats(): void {
     this.cats = this.catService.getCatsAsClassSortedByName().sort(function (cat1,cat2) {
       console.log(cat1.name, cat2.name);
       var textA = cat1.name.toUpperCase();
       var textB = cat2.name.toUpperCase();
       return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
     });
   }
 
  
  addCat() {
    this.catService.addCat(this.newCat).subscribe();
  }
  onSelect(): void {
/*     console.log("edited")
    if (!this.filtered)
{
  this.females = this.cats.filter(cat => cat.gender === Gender.Female);
  this.males = this.cats.filter(cat => cat.gender === Gender.Male);
  this.females.push(Cat.unknownCat);
  this.females.push(Cat.noInfoCat);
  this.males.push(Cat.unknownCat);
  this.males.push(Cat.noInfoCat);
    this.filtered = true;
  } */
  }

}
