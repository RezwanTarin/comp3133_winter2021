class Customer1 {
    private firstName: string;
    private lastName:string;


    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer1 = new Customer1("Rezwan","Tarin");
customer1.greeter();