import { Component, OnInit } from '@angular/core';
import {CatService} from "../cat-general/cat.service";
import {Cat} from "../cat-general/cat";
import { ModalService } from '../_modal';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cats:Cat[] =[];

  constructor(private catService: CatService, private modalService: ModalService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getAllCats()
      .subscribe(cats => this.cats = cats);
  }

  openModal(cat: Cat) {
    this.modalService.open('' + cat.id);
  }

  closeModal(cat: Cat) {
    this.modalService.close('' + cat.id);
  }
}
