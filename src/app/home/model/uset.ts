export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone_no: string;
    birthdate: string;
    country: string;     
    address: string;
    age: number;
    isActive: boolean;
    hobbies: string[];

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        phone_no: string,
        birthdate: string,
        country: string,   
        address: string,
        age: number,
        isActive: boolean,
        hobbies: string[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone_no = phone_no;
        this.birthdate = birthdate;
        this.country = country;
        this.address = address;
        this.age = age;
        this.isActive = isActive;
        this.hobbies = hobbies;
    }
}