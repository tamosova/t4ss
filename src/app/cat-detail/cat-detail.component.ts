import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CatService } from "../cat-general/cat.service";
import { Cat } from '../cat-general/cat';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  cat: Cat = null;
  sire: Cat;
  dam: Cat;
  cats: Cat[];
  pedigree: string;
  pedigreeDepth = 4;

  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private location: Location) { }

  ngOnInit() {
    this.catService.getCatDetails(+this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.cat = new Cat(data[0]);
      if (this.cat.sireId > 0)
        this.sire = new Cat(data[0].sire);
      else if (this.cat.sireId == 0)
        this.sire = Cat.unknownCat;
      else
        this.sire = Cat.noInfoCat;
      if (this.cat.damId > 0)
        this.dam = new Cat(data[0].dam);
      else if (this.cat.damId == 0)
        this.dam = Cat.unknownCat;
      else
        this.dam = Cat.noInfoCat;
      this.cat.sireOf = data[0].sireOf;
      this.cat.damOf = data[0].damOf;
      this.addParentData();
    });
  }

  buildPedigree(cat: Cat, depth: number): string {
    let sire = (cat.sireId >= 0) ? this.getCat(cat.sireId) : Cat.noInfoCat;
    let dam = (cat.damId >= 0) ? this.getCat(cat.damId) : Cat.noInfoCat;;

    if (depth == 1) {
      return `<table width=100% height=100% border='1'>
      <tr>${this.buildCell(sire)}</tr>
      <tr>${this.buildCell(dam)}</tr></table>`;
    }
    else {
      return `<table width=100% height=100% border='1' align='center'>
      <tr>${this.buildCell(sire)}<td align='center'>${this.buildPedigree(sire, depth - 1)}</td></tr>
      <tr>${this.buildCell(dam)}<td align='center'>${this.buildPedigree(dam, depth - 1)}</td></tr>
      </table>`;
    }
  }

  buildCell(cat: Cat): string {
    let catImg = "";
    if (cat.id == 0)
      return `<td width=${100 / this.pedigreeDepth}% align='center'>No Information</td>`;
    if (cat.id == -1)
      return `<td width=${100 / this.pedigreeDepth}% align='center'>Unknown</td>`;

    if (cat.photoLink) {
      catImg = `<img src='assets/cats-photos/fullsize/${cat.photoLink}' alt='photo of ${cat.name}' width='80%'>`
    }
    return `<td width=${100 / this.pedigreeDepth}% align='center'>
      <a href="/detail/${cat.id}">
      ${cat.title} ${cat.name} </a>
      <br>
       (${cat.colour})
       <br>
      ${catImg} 
      </td>`
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
          this.addParentData();
        }
      })
  }

  addParentData() {
    if (!this.cat.sireId && !this.cat.damId) {
      this.pedigree = "";
    }
    else {
      this.catService.getAllCats()
        .subscribe({
          next: cats => this.cats = cats,
          complete: () => {
            this.cats.push(Cat.noInfoCat);
            this.cats.push(Cat.unknownCat);
            this.pedigree = this.buildPedigree(this.cat, this.pedigreeDepth);
          }
        })
    }
  }

  goBack(): void {
    this.location.back();
  }

}
