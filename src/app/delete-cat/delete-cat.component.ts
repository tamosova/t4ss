import { Component, OnInit } from '@angular/core';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-delete-cat',
  templateUrl: './delete-cat.component.html',
  styleUrls: ['./delete-cat.component.css']
})
export class DeleteCatComponent implements OnInit {

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  deleteCat()
  {
    this.catService.deleteCat(17).subscribe();
  }
}
