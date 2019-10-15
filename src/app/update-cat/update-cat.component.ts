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

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCatsAsClass();
  }

  getCats(): void {
    this.catService.getCats();
    this.females =this.cats.filter(cat=>cat.gender === Gender.Female);
    this.males =this.cats.filter(cat=>cat.gender === Gender.Female);
  }

  /* getCats(): void {
    this.catService.getCats()
      .subscribe({
        next:cats => this.cats = cats,
        complete: () => this.fillInGenders()
      });
  } */

  getCatsAsClass():void {


    this.catService.getCats()
        .subscribe({
          next:cats => this.catsJSON = cats,
          complete: () => this.setCatsAsClass()
        });
  }
  
  setCatsAsClass()
  {
            this.catsJSON.forEach(catJSON => {
              this.cats.push(new Cat(catJSON.id,
                catJSON.name,
                catJSON.birthday,
                catJSON.gender,
                catJSON.colour,
                catJSON.sireId,
                catJSON.damId,
                catJSON.title,
                catJSON.breed,
                catJSON.photoLink))
            });

            this.females =this.cats.filter(cat=>Gender[cat.gender] === Gender.Female);
            this.males =this.cats.filter(cat=>Gender[cat.gender] === Gender.Male);
            console.log("cat.gender=",this.cats[0].gender);
            console.log("cat.gender=",this.cats[0].gender);
    console.log("Gender.Male=",Gender.Male);
    console.log("Gender['Male']=",Gender["Male"]);
    console.log("Gender[0]", Gender[0]);  
    console.log("Gender", Gender[0]);
    }
  
  fillInGenders()
  {
/* console.log("cat=>cat.gender.toString() === Gender.Male.toString()", this.cats[0].gender.toString() === Gender.Male.toString())
console.log("cat.gender=",this.cats[0].gender);
console.log("Gender.Male=",Gender.Male); */


    this.females =this.cats.filter(cat=>Gender[cat.gender] === 1);
    this.males =this.cats.filter(cat=>Gender[cat.gender] === 0);

  }

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
    console.log(this.males);
  }

  
}
