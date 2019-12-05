const products = require("./conditions.js");
const fs = require("fs");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~CONSOLE LOG~~~~~~~~~~~~~~~~~~~~~~~~~~");

// creates product seeds
// let seeds = [];
// products.forEach(element => {
//   let seed =
//     `\n { name: "` +
//     element.name +
//     `", url: "` +
//     element.url +
//     `", type: "` +
//     element.type +
//     `", tastes_like: "` +
//     element.tastes_like +
//     `", thc_content: "` +
//     element.thc_content +
//     `", cbd_content: "` +
//     element.cbd_content +
//     `", user_id: ` +
//     1 +
//     ` }`;
//   console.log(seed);
//   seeds.push(seed);
// });
// console.log(seeds);
// fs.writeFile("./seeds.txt", seeds, function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });

// creates helps_with seed data using product id and condition id
// let conditions = [
//   "ADHD",
//   "Anxiety",
//   "Appetite Loss",
//   "Arthritis",
//   "Back Pain",
//   "Chronic Pain",
//   "Concentration",
//   "Depression",
//   "Eye Pressure",
//   "Fatigue",
//   "Inflammation",
//   "Insomnia",
//   "Menstrual Cramps",
//   "Migraines",
//   "Mood Swings",
//   "Muscle Pain",
//   "Muscle Spasms",
//   "Nauseous",
//   "Social Anxiety",
//   "Stress"
// ];
// let associations = [];
// products.forEach(element => {
//   if (element.helps_with) {
//     let helpsWith = element.helps_with.split(", ");
//     for (let i = 0; i < helpsWith.length; i++) {
//       let pid =
//         products.findIndex(product => {
//           return product.name === element.name;
//         }) + 1;
//       let cid = conditions.indexOf(helpsWith[i]);
//       cid++;
//       let result =
//         "\n { product_id: " +
//         pid +
//         ", condition_id: " +
//         cid +
//         // includes names for verification
//         // ', product_name: "' +
//         // element.name +
//         // '", condition_name: "' +
//         // helpsWith[i] +
//         // '"' +
//         " }";
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
