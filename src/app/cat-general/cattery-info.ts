export class CatteryInfo {
    public id: number;
    public coordX: number;
    public coordY: number;
    public name: string;
    public contactInfo: string;
    public website: string;

    constructor(id: number, coordX: number, coordY: number, name:string, contactInfo: string, website: string){
      this.id = id;
      this.coordX = coordX;
      this.coordY = coordY;
      this.name = name;
      this.contactInfo = contactInfo;
      this.website = website;
    }
}
