import { TestBed } from '@angular/core/testing';
import { FilterPipe } from '@app/filter.pipe';
import { Cat } from './cat-general/cat';

describe('FilterPipe', () => {

    it('should create an instance', () => {
        const pipe = new FilterPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return list of names containing search element', () => {
        const cat1 = new Cat({
            "id": 1, "name": "Bosporus Free Hunter*RU",
            "gender": "Male", "colour": "a 03 23", "sireId": "5", "damId": "-1", "title": "SC. Fife",
            "breed": "KBL", "photoLink": "1.jpg"
        });
        const cat2 = new Cat(
            {
                "id": 2, "name": "Jewel SuperBob*RU",
                "gender": "Female", "colour": "ns 03 24", "sireId": "1", "damId": "6", "title": "SC Fife, NW'13",
                "breed": "KBL", "photoLink": "2.jpg"
            });
        const cat3 = new Cat({
            "id": 3, "name": "Fortuna Free Hunter*RU",
            "gender": "Female", "colour": "f 01 21", "sireId": "-1", "damId": "-1", "title": "GIC FIFe",
            "breed": "KBL", "photoLink": "3.jpg"
        });
        const cat4 = new Cat(
            {
                "id": 4, "name": "Cherokee Free Hunter*RU",
                "gender": "Female", "colour": "d 03 24", "sireId": "-1", "damId": "-1", "title": "SC Fife",
                "breed": "KBL", "photoLink": "4.jpg"
            });

            const cats = [cat1, cat2, cat3, cat4];
            const pipe = new FilterPipe();
            let result = pipe.transform(cats, "free");
            expect(result.length).toEqual(3);
    });

    it('should return empty list none of the names contains search substring', () => {
        const cat1 = new Cat({
            "id": 1, "name": "Bosporus Free Hunter*RU",
            "gender": "Male", "colour": "a 03 23", "sireId": "5", "damId": "-1", "title": "SC. Fife",
            "breed": "KBL", "photoLink": "1.jpg"
        });
        const cat2 = new Cat(
            {
                "id": 2, "name": "Jewel SuperBob*RU",
                "gender": "Female", "colour": "ns 03 24", "sireId": "1", "damId": "6", "title": "SC Fife, NW'13",
                "breed": "KBL", "photoLink": "2.jpg"
            });
        const cat3 = new Cat({
            "id": 3, "name": "Fortuna Free Hunter*RU",
            "gender": "Female", "colour": "f 01 21", "sireId": "-1", "damId": "-1", "title": "GIC FIFe",
            "breed": "KBL", "photoLink": "3.jpg"
        });
        const cat4 = new Cat(
            {
                "id": 4, "name": "Cherokee Free Hunter*RU",
                "gender": "Female", "colour": "d 03 24", "sireId": "-1", "damId": "-1", "title": "SC Fife",
                "breed": "KBL", "photoLink": "4.jpg"
            });

            const cats = [cat1, cat2, cat3, cat4];
            const pipe = new FilterPipe();
            let result = pipe.transform(cats, "nonexistent string");
            expect(result.length).toEqual(0);
    })
});