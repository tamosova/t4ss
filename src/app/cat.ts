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


constructor(object)
{
  this.id=object.id,
        this.name = object.name;
        this.birthday = object.birthday;
        this.gender = Gender[<string>object.gender];
        this.colour = object.colour;
        this.sireId = object.sireId;
        this.damId = object.damId;
        this.title = object.title;
        this.breed = object.breed;
        this.photoLink = object.photoLink;
}
  }