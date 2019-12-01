const products = require("./conditions.js");
const fs = require("fs");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~CONSOLE LOG~~~~~~~~~~~~~~~~~~~~~~~~~~");

// verify that all product names are unique
// let productNames = ["Blue God"];
// products.forEach(element => {
//   if (productNames.indexOf(element.name) !== -1) {
//     console.log("ERROR ERROR ERROR");
//     console.log(element.name);
//   }
//   if (productNames.indexOf(element.name) === -1) {
//     productNames.push(element.name);
//   }
// });
// productNames.sort();

// for (let i = 0; i < productNames.length; i++) {
//   if (productNames[i + 1] === productNames[i]) {
//     console.log(productNames[i]);
//   }
// }
// console.log("Done!");

// creates helps_with seed data using product name and condition name
// let associations = [];
// products.forEach(element => {
//   if (element.helps_with) {
//     let helpsWith = element.helps_with.split(", ");
//     for (let i = 0; i < helpsWith.length; i++) {
//       let result =
//         '\n { product_name: "' +
//         element.name +
//         '", condition_name: "' +
//         helpsWith[i] +
//         '" }';
//       console.log(result);
//       associations.push(result);
//     }
//   }
// });
// fs.writeFile("./assoc.txt", associations, function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });

// misc

// knex
//   .raw(`SELECT name, id FROM products WHERE name = ${products[0].name}`)
//   .then(res => {
//     console.log(res);
//   });

// products.forEach(element => {

//   if (element.helps_with) {
//     let helpsWith = element.helps_with.split(", ");
//     for (let i = 0; i < helpsWith.length; i++) {
//       // console.log("");
//       console.log(element.name + " : " + helpsWith[i]);
//       // let product = Product.where({ name: element.name });
//       // let condition = Condition.where({ name: helpsWith[i] });
//       // console.log(
//       //   knex
//       //     .select("name")
//       //     .from("products")
//       //     .where("name", element.name)
//       // );

//       // console.log(product);
//       // console.log(condition);

//       // console.log(
//       //   "{ product_id: " +
//       //     element.name +
//       //     ", condition_id: " +
//       //     helpsWith[i] +
//       //     " },"
//       // );
//     }
//   }
// });
