// 1
let units = 0;
var amount;
if (units > 0) {
  if (units <= 50) {
    amount = units * 3;
  } else if (units <= 100) {
    amount = 50 * 3 + (units - 50) * 3.5;
  } else if (units <= 150) {
    amount = 50 * 3 + 50 * 3.5 + (units - 100) * 4;
  } else if (units <= 200) {
    amount = 50 * 3 + 50 * 3.5 + 50 * 4 + (units - 150) * 4.5;
  } else if (units >= 201) {
    amount = 50 * 3 + 50 * 3.5 + 50 * 4 + 50 * 4.5 + (units - 200) * 4.75;
  } else {
    console.log("please enter a valid number");
  }
} else {
  console.log("unit must be positive number");
}

// 2
let name = "manish sabbani";
let arr = [];
arr = name.split("");
let newArr = new Set(arr);
let duplicates = [...newArr];
for (let i = 0; i < duplicates.length; i++) {
  let search = duplicates[i];
  let counter = 0;
  for (let j = 0; j < name.length; j++) {
    if (name[j] == search) {
      counter += 1; // counter = 0 + 1;
    }
  }
  console.log(duplicates[i] + " repeated " + counter.toString() + " times ");
}
