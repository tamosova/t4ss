import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CatService} from "../cat.service";
import { Cat } from '../cat';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  cat: Cat;

  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private location: Location) { }

  ngOnInit() {
    this.getCat();
  }

  getCat() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id="+id);
    this.catService.getCat(id)
      .subscribe(cat => {
        this.cat = cat;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
