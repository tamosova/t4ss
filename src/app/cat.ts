export enum Gender {Male, Female}

export class Cat {
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

    constructor( id: number,
      name: string,
      birthday: Date,
      gender: string,
      colour: string,
      sireId: number,
      damId: number,
      title: string,
      breed: string,
      photoLink: string){
        this.id=id,
        this.name = name;
        this.birthday = birthday;
        this.gender = Gender[gender];
        this.colour = colour;
        this.sireId = sireId;
        this.damId = damId;
        this.title = title;
        this.breed = breed;
        this.photoLink = photoLink;
      }
  }