export enum Gender { Male, Female }

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

  static unknownCat =  new Cat({
    "id": -1, "name": "Unknown", "birthday": "",
    "gender": "", "colour": "", "sireId": -1, "damId": -1, "title": "",
    "breed": "", "photoLink": ""
  })

  static noInfoCat =  new Cat({
    "id": 0, "name": "Unknown", "birthday": "",
    "gender": "", "colour": "", "sireId": 0, "damId": 0, "title": "",
    "breed": "", "photoLink": ""
  })


  constructor(object) {
    this.id = object.id,
    this.name = object.name;
    this.birthday = (object.birthday != "0000-00-00 00:00:00") ? new Date(object.birthday) : new Date("0000-01-01T00:00:00.000Z");
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