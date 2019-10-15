import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  cats:Cat[] =[];
  selectedCat: Cat;
  searchText:string;
  males:Cat[] =[];
  females:Cat[] =[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats()
      .subscribe({
        next:cats => this.cats = cats,
        complete: () => this.fillInGenders()
      });
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
