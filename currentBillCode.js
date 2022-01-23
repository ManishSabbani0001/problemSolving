
let x = 500;
var amount;
  if(units>0) {
  if(units<=50) {
      console.log(amount = units*3);
  } else if(units<=100) {
      console.log(amount = 50*3+(units-50)*3.50);
  } else if(units<=150) {
      console.log((50*3)+(50*3.50)+(units-100)*4);
  }else if(units<=200) {
      console.log((50*3)+(50*3.50)+(50*4)+(units-150)*4.50);
  }else if(units>=201) {
      console.log((50*3)+(50*3.50)+(50*4)+(50*4.50)+(units-200)*4.75);
  }else  {
      console.log("please enter a valid number");
  }
}else {
    console.log("unit must be positive number");
}
  