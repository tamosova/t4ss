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
        this.birthday = ( object.birthday != "0000-00-00 00:00:00") ? new Date(object.birthday) : new Date ("0000-01-01T00:00:00.000Z") ;
        this.gender = (object.gender == 0 || object.gender == 1) ? object.gender : Gender[<string>object.gender];
        this.colour = object.colour;
        this.sireId = object.sireId;
        this.damId = object.damId;
        this.title = object.title;
        this.breed = object.breed;
        this.photoLink = object.photoLink;
}

/* get birthday()
{
  console.log("birthday = ", this._birthday);
    return (this._birthday.toString() == "0000-00-00 00:00:00") ? this._birthday : new Date(0,0,0,0,0,0,0);
} */
  }