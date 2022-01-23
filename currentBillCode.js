
let x = 182;
  if(x<=50) {
      console.log(x*3);
  } else if(x<=100) {
      console.log(50*3+(x-50)*3.50);
  } else if(x<=150) {
      console.log((50*3)+(50*3.50)+(x-100)*4);
  }else if(x<=200) {
      console.log((50*3)+(50*3.50)+(50*4)+(x-150)*4.50);
  }else if(x<=250) {
      console.log((50*3)+(50*3.50)+(50*4)+(50*4.50)+(x-200)*4.75);
  }else  {
      console.log("please enter a valid number")
  }
  