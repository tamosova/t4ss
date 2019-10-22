import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '@app/cat';
import { CatService } from '@app/cat.service';

@Component({
  selector: 'app-manage-cats',
  templateUrl: './manage-cats.component.html',
  styleUrls: ['./manage-cats.component.css']
})
export class ManageCatsComponent implements OnInit {

  cats: Cat[] = [];
  selectedCat: Cat;
  searchText: string;
  males: Cat[] = [];
  females: Cat[] = [];
  filtered = false;
  updateTitle = "";

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClassSortedByName();
  }

  save() {
    if (this.selectedCat.id)
    {
      this.saveUpdated();
    }
    this.addCat()
  }

  showAddCatForm() {
    this.cancelUnsavedChanges();
    this.filterGenders();
    this.updateTitle = "Enter new cat details";
    this.selectedCat = new Cat({
      "id": "", "name": this.searchText, "birthday": null,
      "gender": 0, "colour": "", "sireId": "0", "damId": "0", "title": "",
      "breed": "KBL", "photoLink": ""
    });
  }

  filterGenders() {
    if (!this.filtered) {
      this.females = this.cats.filter(cat => cat.gender === Gender.Female);
      this.males = this.cats.filter(cat => cat.gender === Gender.Male);
      this.females.push(Cat.unknownCat);
      this.females.push(Cat.noInfoCat);
      this.males.push(Cat.unknownCat);
      this.males.push(Cat.noInfoCat);
      this.filtered = true;
    }
  }

  showUpdateCatForm(cat: Cat) {
    this.cancelUnsavedChanges();
    this.filterGenders();
    this.updateTitle = `${cat.name} - update info`;
    this.selectedCat = cat;
  }

  saveUpdated(): void {
    this.catService.updateCat(this.selectedCat).subscribe();
    alert("Your changes has been saved!");
    this.selectedCat = null;
    this.filtered = false;
  }

  addCat() {
    this.catService.addCat(this.selectedCat).subscribe();
    alert(`${this.selectedCat.name} added!`);
    this.getCats();
    this.filtered = false;
    this.cancelUnsavedChanges();
    this.searchText = "";
  }

  deleteCat(cat: Cat) {
    if (confirm(`Are you sure to delete ${cat.name}?`)) {
      this.catService.deleteCat(cat.id).subscribe();
      this.getCats();
      this.filtered = false;
    }
  }
  cancel() {
    this.cancelUnsavedChanges();
    this.searchText = "";
    this.updateTitle = "";
  }

  cancelUnsavedChanges() {
    this.selectedCat = null;
  }
}
