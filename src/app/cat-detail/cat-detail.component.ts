import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CatService } from "../cat.service";
import { Cat } from '../cat';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  cat: Cat = null;
  cats: Cat[];
  pedigree: string;
  pedigreeDepth = 4;
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

  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private location: Location) { }

  ngOnInit() {
    this.getCatDetails();
  }

  buildPedigree(cat: Cat, depth: number): string {
    let sire = cat.sireId ? this.getCat(cat.sireId) : this.noInfoCat;
    let dam = cat.damId ? this.getCat(cat.damId) : this.noInfoCat;
    let sireImg = "";
    let damImg = "";

    if (sire.photoLink) {
      sireImg = `<img src='assets/cats-photos/fullsize/${sire.photoLink}' alt='photo of ${sire.name}' width='80%'>`
    }
    if (dam.photoLink) {
      damImg = `<img src='assets/cats-photos/fullsize/${dam.photoLink}' alt='photo of ${dam.name}' width='80%'>`
    }
    if (depth == 1) {
      return `<table width=100% border='1'>
      <tr><td width=${100 / this.pedigreeDepth}% align='center'>${sire.title} ${sire.name} <br>
       (${sire.colour}) <br>
      ${sireImg} 
      </td></tr>
      <tr><td align='center'>${dam.title} ${dam.name} <br> (${dam.colour}) <br>
      ${damImg} </td></tr></table>`;
    }
    else {
      return `<table width=100% border='1' align='center'>
      <tr><td width=${100 / this.pedigreeDepth}% align='center'>${sire.title} ${sire.name} <br> (${sire.colour})<br>
      ${sireImg} 
      
      </td><td align='center'>${this.buildPedigree(sire, depth - 1)}</td></tr>
      <tr><td width=${100 / this.pedigreeDepth}% align='center'>${dam.title} ${dam.name} <br> (${dam.colour})<br>
      ${damImg} </td><td align='center'>${this.buildPedigree(dam, depth - 1)}</td></tr>
      </table>`;
    }
  }

  getCat(id: number) {
    return new Cat(this.cats.find(element => element.id == id));
  }

  getCatDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catService.getAllCats()
      .subscribe({
        next: cats => this.cats = cats,
        complete: () => {
          this.cat = this.getCat(id);
          this.cats.push(this.noInfoCat);
          this.cats.push(this.unknownCat);
          this.pedigree = this.buildPedigree(this.cat, this.pedigreeDepth);
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

}
