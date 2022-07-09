const user = {
  firstName: "Harry",
  lastName: "Potter",
  role: "Magician"
};

const hi = {
  formal: "Hello",
  spanish: "Hola",
  french: "Bonjour"
};

console.log(`${hi.formal}!, Mr.${user.lastName}`);

let marks: number[] = [97, 90,95, 93, 91];
console.log("Out of 100 marks are: ",marks);
marks.push(98);
console.log("Rectified marks are: ",marks);

let cars:[string,string,string?];
cars=["Marcedez","Lamborghini","Aston Martin"];
console.log(cars);


let sedan:[any,any,any];
sedan=["Maruti Suzuki","Hyundai","Toyota"];
console.log(sedan);
