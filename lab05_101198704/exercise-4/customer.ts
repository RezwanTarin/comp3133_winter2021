export class Customer {
    private firstName: string;
    private lastName:string;
    private age:number;


    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    public getAge(){
        console.log(`${this.firstName} age is ${this.age}`);
    }
}
let customer2 = new Customer("Rezwan","Tarin",22);
customer2.greeter();
customer2.getAge();