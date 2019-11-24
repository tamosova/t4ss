import { TestBed, async, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import {of} from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CatService } from './cat.service';
import { Cat } from './cat';
import { CatDetail } from './cat-detail';

describe('CatService', () => {
  let catService: CatService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatService]
    });
    catService = TestBed.get(CatService);
    httpMock = TestBed.get(HttpTestingController);
  });

 
  it('should be created', () => {
    expect(catService).toBeTruthy();
  });

  it(
    'getAllCats should get all cats', () => {
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
      const mockCats = [
        cat1, cat2];

      catService.getAllCats().subscribe(cats => {
        expect(cats.length).toBe(2);
        expect(cats).toEqual(mockCats);
      });

      const mockReq = httpMock.expectOne(catService.catsUrl);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method).toBe("GET");
      expect(mockReq.request.responseType).toEqual('json');

      mockReq.flush(mockCats);

      httpMock.verify();
    }
  ); 

   it(
    'getCatsAsClassSortedByName should get all cats in sorted array', fakeAsync(() => {
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

      const mockCats = [
        cat1, cat2, cat3];

      const resultCats = [cat1, cat3, cat2];

      catService.getAllCats = () => of(mockCats);

      var result = catService.getCatsAsClassSortedByName();
      tick(100);
      
      expect(result.length).toEqual(3);
      expect(result[0].id).toEqual(resultCats[0].id);

     }
  ));
 
  it(
    'getCat should get cat with appropriate id', () => {
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

      const mockCats = [
        cat1, cat2];

      catService.getCat(15).subscribe(cat => {
        expect(cat).toEqual(cat2);
      });
      const mockReq = httpMock.expectOne(catService.catsUrl);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method).toBe("GET");
      expect(mockReq.request.responseType).toEqual('json');

      mockReq.flush(mockCats);

      httpMock.verify();
    }
  );

  it(
    'getCatDetails should get catDetails with appropriate id', () => {
      const catDetail1 = new CatDetail({
        "id": 14, "name": "Baileys Be Original SuperBob*RU", "birthday": "0000-00-00 00:00:00",
        "gender": 0, "colour": "d 03 23", "sireId": "", "damId": "7", "title": "SC FIFe",
        "breed": "KBL", "photoLink": "14.jpg"
      });

      catService.getCatDetails(14).subscribe(cat => {
        expect(cat).toEqual(catDetail1);
      });

      const req = httpMock.expectOne(`${catService.catsUrl}/14`);
      expect(req.request.method).toBe('GET');

      req.flush(catDetail1);

      httpMock.verify();
    }
  );

  it('should delete the correct data', () => {
    catService.deleteCat(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(`${catService.catsUrl}/3`,
      'delete to api'
    );
    expect(req.request.method).toBe('DELETE');

    req.flush(3);

    httpMock.verify();
  });

  it('should update the correct data', () => {
    const cat1 = new Cat({
      "id": 14, "name": "Baileys Be Original SuperBob*RU", "birthday": "0000-00-00 00:00:00",
      "gender": 0, "colour": "d 03 23", "sireId": "", "damId": "7", "title": "SC FIFe",
      "breed": "KBL", "photoLink": "14.jpg"
    });

    catService.updateCat(cat1).subscribe((data: any) => {
      expect(data).toBe(cat1);
    });

    const req = httpMock.expectOne(`${catService.catsUrl}/14`);
    expect(req.request.method).toBe('PUT');

    req.flush(cat1);

    httpMock.verify();
  });

  it('should add the correct data', () => {
    const cat1 = new Cat({
      "id": 14, "name": "Baileys Be Original SuperBob*RU", "birthday": "0000-00-00 00:00:00",
      "gender": 0, "colour": "d 03 23", "sireId": "", "damId": "7", "title": "SC FIFe",
      "breed": "KBL", "photoLink": "14.jpg"
    });

    catService.addCat(cat1).subscribe((data: any) => {
      expect(data).toBe(cat1);
    });

    const req = httpMock.expectOne(`${catService.catsUrl}/add`);
    expect(req.request.method).toBe('POST');

    req.flush(cat1);

    httpMock.verify();
  }); 

});

