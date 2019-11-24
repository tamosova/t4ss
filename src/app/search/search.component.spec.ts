import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CatService } from '@app/cat-general/cat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterPipe } from '@app/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Cat } from '@app/cat-general/cat';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockCats: Cat[];

   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, FilterPipe],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CatService]
    })
      .compileComponents();
      const cat1 = new Cat({
        "id": 14, "name": "Baileys Be Original SuperBob*RU", "birthday": "0000-00-00 00:00:00",
        "gender": 0, "colour": "d 03 23", "sireId": "", "damId": "7", "title": "SC FIFe",
        "breed": "KBL", "photoLink": "14.jpg"
      });
      const cat2 = new Cat({
        "id": 15, "name": "Sunshine Reggae Free Hunter*RU", "birthday": "2015-08-29 00:00:00",
        "gender": 0, "colour": "d 03 23", "sireId": "14", "damId": "4", "title": "ICh. FIFe",
        "breed": "KBL", "photoLink": "15.jpg"
      })
      const cat3 = new Cat(
        {
          "id": 16, "name": "Bayaderka Free Hunter", "birthday": "2008-04-22 00:00:00",
          "gender": "Female", "colour": "f 03 23", "sireId": "5", "damId": "11", "title": "ICh. FIFe",
          "breed": "KBL", "photoLink": "16.jpg"
        });
  
       mockCats = [
        cat1, cat3, cat2];
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();      
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the cats (stub)', () => {
    let catServiceMock = new CatService(undefined);
    let searchComponent = new SearchComponent(catServiceMock);
    catServiceMock.getCatsAsClassSortedByName = () => mockCats;
    

      searchComponent.getCats();
      expect(searchComponent.cats.length).toEqual(3);
      expect(searchComponent.cats[0].id).toEqual(mockCats[0].id);
      expect(searchComponent.cats[1].id).toEqual(mockCats[1].id);
      expect(searchComponent.cats[2].id).toEqual(mockCats[2].id);
  });

  it('getCat should return cat with correct number', () => {
    component.cats = mockCats;
    let cat = component.getCat(14);

    expect(cat.name).toEqual("Baileys Be Original SuperBob*RU");
  });

});
