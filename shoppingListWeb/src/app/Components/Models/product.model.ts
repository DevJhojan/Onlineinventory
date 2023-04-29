export default class Product {
  name: string;
  description: string;
  price: number;
  amount: number;
  departament: string;

  constructor(cName: string = '', cDescription: string = '',
    cPrice:number = 0, cAmount: number = 0, cDepartament: string = '') {
    this.name = cName;
    this.price = cPrice;
    this.amount = cAmount;
    this.departament = cDepartament;
    this.description = cDescription;
  }
}
