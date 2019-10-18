import { Component, OnInit } from '@angular/core';
import { Cat } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  addCat() {
    let cat = new Cat(    { "id": 11, "name": "Encanto de Fiera", "birthday": "2006-01-06T12:00:00.000Z", 
    "gender":1, "colour": "f03", "sireId": "", "damId":"", "title": "GIC.Fife; In.Ch. WCF",
     "breed": "KBL", "photoLink":"11.jpg"
}
     );

/*  */

    this.catService.addCat(cat).subscribe();
  }

}
