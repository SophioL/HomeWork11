function Car(make, model, year){
    return{
        make : make,
        model : model,
        year : year,
        getCarInfo : function() {
            document.write(this.make + " "+ this.model + " " + this.year);
        },
        
        
    };
}
function Person(name, age, cars){
        return{
            name : name,
            age :age,
            cars : cars,
            displayInfo : function(){
            document.write(this.name + " "+"is"+" " +" " + this.age + "years old and have"+" ");
        }
}
}
const tom = Person("Tom", 24)
const bill = Car("Tesla", "Model S", "released In 2015");
tom.displayInfo()
bill.getCarInfo()


//function Car(make, model, year){
//    this.make = make,
//    this.model = model,
//    this.year = year,
//    this.getCarInfo = function (){
//        document.write(this.make + " "+ this.model + " " + this.year)
//   }
//}

//function Person(name, age, car){
//    this.name = name,
//    this.age = age,
//    this.car = car,
//    this.displayInfo = function(){
//        document.write(this.name + " "+"is"+" " +" " + this.age + "years old and have"+" ")
//    }
//}
//const tom = Person("Tom",24)
//tom.displayInfo()
//const bill = Car("Tesla", "Model S", "released In 2015")
//bill.getCarInfo()