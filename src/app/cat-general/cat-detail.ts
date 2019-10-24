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
    sireOf: Cat[];
    damOf: Cat[];
}