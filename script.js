// Complete the js code
function Car(make:string, model:string) {
	this.make = make;
    this.model = model;
}
Car.prototype.getMakeModel = function(){
    return `${this.make} ${this.model}`;
};

function SportsCar(make:string, model:string, topSpeed:number) {
	Car.call(this,make,model);// it inherits property from car
    this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype); // inherits car prototype in sportscar prototype.
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function (){
            return `${this.topSpeed}`;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
