class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "BEEP!"
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
};

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year); 
    }
    numWheels(){
        return 4;
    }
};

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return "VROOM!!";
    }
};

class Garage {
    constructor(garageLimit){
        this.garageLimit = garageLimit;
        this.vehicles = [];
    };
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Only Vehicles allowed in here!"
        }
        if(this.vehicles.length >= this.garageLimit){
            return "Sorry Garage Full";
        }else {
            this.vehicles.push(newVehicle);
            return "Vehicle Added!";
        }
    }
    
};

let garage = new Garage(2)
