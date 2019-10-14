export class CatteryInfo {
    public id: number;
    public coordX: number;
    public coordY: number;
    public name: string;
    public contactInfo: string;
    public website: string;

    public getMarkerPopupContent():string {
        console.log("getting string");
        return "hello";
      //  return "<h4>Cattery ${name}</h4>website: <a href='${website}'>${website}</a><p>Contact: </p>";
    }

    constructor(id: number, coordX: number, coordY: number, name:string, contactInfo: string, website: string){
      this.id = id;
      this.coordX = coordX;
      this.coordY = coordY;
      this.name = name;
      this.contactInfo = contactInfo;
      this.website = website;
    }
}
