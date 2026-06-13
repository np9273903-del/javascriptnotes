const student ={
    fullName:"shraddha kapra",
    marks:94.4,
    printMarks: function(){
        console.log("marks",this.marks);
        
    },
};

//use of prototype 
//prototype is used to store karanArjun 
//value in employee also
const employee={
    calctax(){
        console.log("tax rate is 2");
        
    }
};

const emp1 ={
    salary:50000
};

const emp2 ={
    salary:50000
};

const emp3 ={
    salary:50000
};

const emp4 ={
    salary:50000
};

emp1.__proto__=employee;
emp2.__proto__=employee;
emp3.__proto__=employee;
emp4.__proto__=employee;
//becausee every employee can contain 
//tax but we have to assign every employee
//wwe can assign it by using prototype


//class and object

//class
class toyotacar{
    toyotacar(){//non-paramatized construtor
        console.log("creating new object");
        
    }

    toyotacar(brand,m){ //paramatized construtor
        this.brand=brand;
        this.m=m;
    }
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }

    setbrand(brand){
        this.brand=brand;
    }
}

let fortune = new toyotacar("tata",15); //object
fortune.setbrand("fortune");


//inheritance

class parent{
    hello(){
        console.log("hello");
        
    }
}
class child extends parent{
     
}

let obj=new child();