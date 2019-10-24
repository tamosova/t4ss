import { Component, OnInit } from '@angular/core';
import { Cat, Gender } from '../cat-general/cat';
import { CatService } from '../cat-general/cat.service';
import { PhotoFileService } from '@app/photo-file.service';

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
  selectedFile: File;

  constructor(private catService: CatService,
    private photoFileService: PhotoFileService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.cats = this.catService.getCatsAsClassSortedByName();
  }

  save() {
    if (this.selectedCat.id) {
      this.saveUpdated();
    } else
      this.addCat()
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  saveFile(id: number) {
    const uploadData = new FormData();
    uploadData.append(this.selectedFile.name, this.selectedFile, this.selectedFile.name);
    this.photoFileService.uploadPhoto(id, uploadData).subscribe(() => {
    });
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
    this.catService.updateCat(this.selectedCat).subscribe(cat => {
      if (this.selectedFile) {
        this.saveFile(cat.id);
      }
      alert("Your changes has been saved!");
      this.selectedCat = null;
      this.filtered = false;
      this.selectedFile = null;
    });
  }

  addCat() {
    this.catService.addCat(this.selectedCat).subscribe(cat => {
      if (this.selectedFile) {
        this.saveFile(cat.id);
      }
      alert(`${this.selectedCat.name} added!`);
      this.selectedCat = null;
      this.selectedFile = null;
      this.getCats();
      this.filtered = false;
      this.cancelUnsavedChanges();
      this.searchText = "";
    });


  }

  deleteCat(cat: Cat) {
    if (confirm(`Are you sure to delete ${cat.name}?`)) {
      this.catService.deleteCat(cat.id).subscribe(() => {
        this.getCats();
        this.filtered = false;
      });

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
