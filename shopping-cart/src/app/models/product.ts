export class Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    

    constructor(id: number, name: string, description:string, price = 0, imageUrl = "https://image.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg") {
        this.id = id
        this.name = name
        this.description = description
        this.price = price 
        this.imageUrl = imageUrl
    }
}

