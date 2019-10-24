import { Cat, Gender } from './cat';

export class CatDetail {
    id: number;
    name: string;
    birthday: Date;
    gender: Gender;
    colour: string;
    sireId: number;
    damId: number;
    title: string;
    breed: string;
    photoLink: string;
    sireOf: Cat[] = [];
    damOf: Cat[] = [];

    constructor(object) {
        this.id = object.id,
            this.name = object.name;
        this.birthday = object.birthday ? new Date(object.birthday) : null;
        switch (object.gender) {
            case 0:
            case 1: this.gender = object.gender; break;
            case "0": this.gender = Gender.Male; break;
            case "1": this.gender = Gender.Female; break;
            default: this.gender = Gender[<string>object.gender];
        }
        this.colour = object.colour;
        this.sireId = object.sireId;
        this.damId = object.damId;
        this.title = object.title;
        this.breed = object.breed;
        this.photoLink = object.photoLink;
    }
}