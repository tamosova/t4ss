import { Component, OnInit } from '@angular/core';
import { CatService } from '@app/cat.service';
import { Cat } from '@app/cat';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  cats:Cat[] =[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getAllCats()
      .subscribe(cats => this.cats = cats);
  }

}
