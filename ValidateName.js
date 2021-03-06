class AddressBook {
    //property
    // firstName;
    // lastName;
    // address;
    // city;
    // state;
    // zip;
    // phoneNumber;
    // email;
  
    //constructor
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
  
    //get and set for firstname
    //first letter should be capital and min 3 letters
    get firstName() {
      return this._firstName;
    }
    set firstName(firstName) {
      let nameRegex = RegExp(/^[A-Z]{1}[A-Za-z]{3,}$/);
      if (nameRegex.test(firstName)) this._firstName = firstName;
      else throw "Invalid first Name";
    }
  
    //get and set for lastname
    //first letter should be capital and min 3 letters
    get lastName() {
      return this._lastName;
    }
    set lastName(lastName) {
      let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
      if (nameRegex.test(lastName)) this._lastName = lastName;
      else throw "Invalid  last Name";
    }
  
    //get and set for address
    //minimum four characters
    get address() {
      return this._address;
    }
    set address(address) {
      let addressRegex = RegExp(/^[A-Za-z]{1}[A-Za-z]{4,}$/);
      if (addressRegex.test(address)) this._address = address;
      
    }
  
    //get and set for city
    //minimum four characters
    get city() {
      return this._city;
    }
    set city(city) {
      let cityRegex = RegExp("^[A-Za-z]{4,}$");
      if (cityRegex.test(city)) this._city = city;
      else throw "Invalid city ";
    }
  
    //get and set for state
    //minimum four characters
    get state() {
      return this._state;
    }
    set state(state) {
      let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
      if (stateRegex.test(state)) this._state = state;
      else throw "Invalid state";
    }
  
    //get and set for zip
    //pin code of 6 digits
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      let zipRegex = RegExp(/^[1-9][0-9]{5}$/);
      if (zipRegex.test(zip)) this._zip = zip;
      else throw "Invalid zip ";
    }
  
    //get and set for phoneNumber
    get phoneNumber() {
      return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
      let phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
      if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
      else throw "Invalid phone number";
    }
  
    // get and set for email
    get email() {
      return this._email;
    }
    set email(email) {
      let emailRegex = RegExp(
        "^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$"
      );
      if (emailRegex.test(email)) this._email = email;
      else throw "Invalid email";
    }
  
    //defining to method
    toString() {
      return (
        "First Name: " +
        this.firstName +
        ", \nLast Name: " +
        this.lastName +
        ", \nAddress: " +
        this.address +
        ", \nCity: " +
        this.city +
        ", \nState: " +
        this.state +
        ", \nZip: " +
        this.zip +
        ", \nPhone Number: " +
        this.phoneNumber +
        " , \nEmail: " +
        this.email
      );
    }
  }
  
  //creating an instance and giving contact details
  
  let contact_book = new AddressBook(
    "Sahiba",
    "Fatma",
    "Hasan Chak Bangra",
    "Muzaffarpur",
    "Bihar",
    "842002",
    "7004830003",
    "sahiba1214@gmail.com",
  );
  console.log(contact_book.toString());