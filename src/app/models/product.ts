export class Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  quantity: number;
  dateCreated: Date;
  lastUpdated: Date;

  constructor( id: string,
               sku: string,
               name: string,
               description: string,
               unitPrice: number,
               imageUrl: string,
               active: boolean,
               quantity: number,
               dateCreated: Date,
               lastUpdate: Date){
    this.id = id;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.quantity = quantity;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdate;
  }

    // id: number;
    // name: string;
    // quantity: number;
    // price: number;
    // description: string;
    // image: string;
    //
    // constructor (id: number, name: string, quantity: number, description: string, price: number, image: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.quantity = quantity;
    //     this.description = description;
    //     this.price = price;
    //     this.image = image;
    // }
}
