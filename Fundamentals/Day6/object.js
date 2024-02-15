// OBJECT
// Pair Key & Value

/*
Case. Products = Name, Price
const productName = ['apel','mangga','jambu','anggur']
const productPrice = [10000,20000,30000,40000]
const productStok = [15,20,25,30]
const productDiscount = [0,2,3,6]
*/

/*
Name, Price, Stok, Discount disebut sebagai Key
apel, 10000, 15, 0 disebut sebagai Value
Key dan Value disebut sebagai Property
*/

// Define Object

// CRUD (CREATE, READ, UPDATE, DELETE)
// ADD OBJECT
const DataDiri = {
  nama: "Bleh",
  umur: 24,
  alamat: "Jalan sendiri",
};
const campus = new Object();
campus.building = "BSD"; // Tanyain
campus.property = "Green Park";

// UPDATE
DataDiri.hobi = "Ngoding";
console.log(DataDiri);
// DELETE OBJECT
delete DataDiri.umur;
console.log(DataDiri);
// ASSCESS with DOT(.)
console.log(DataDiri.nama);
// ASSCESS with SQUARE BRACKET ([])
console.log(DataDiri["hobi"]);

// METHOD
// Sebuah function yang dimasukan kedalam Object
// this --> untuk mengakses apapun yang ada didalam Object

const profile = {
  // Object
  name: "Pay",
  hobby: "Ngoding",

  greeting(address) {
    console.log(
      `My name ${this.name} and my Hobby is ${this.hobby} and my Address ${address}`
    );
  },
  output: () => {
    console.log(`This name is ${this.name}`);
  },
};
profile.greeting("Tangerang");
profile.output(); // Tanyainn : output undefined

// Chaining Condition
const data = {
  name: {
    firstName: "Who?",
  },
};
console.log(data?.name?.lastName?.a); // Tanyain : undefined

// Destructuring Assignmet
// Konversi Object menjadi Variable

const dataStudent = {
  name: "boooooo",
  address: "Lonely",
  hobby: "Gim",
};

const { name, address } = dataStudent;
console.log(name);
console.log(address);

// Looping Object (Method For In)
for (let Key in dataStudent) {
  console.log(Key);
  console.log(dataStudent[Key]); // dataStudent(address)
}
// Object.keys
console.log(Object.keys(dataStudent)); // Untuk mendapatkana semua key di dalam sebuah object
for (i = 0; i < Object.keys(dataStudent).length; i++) {
  console.log(Object.keys(dataStudent)[i]);
  console.log(dataStudent[Object.keys(dataStudent)[i]]); // Untuk menampilkan valaue dalam sebuah key (object)
}

/*
    Case. Buatlah program untuk merubah price number menjadi price IDR dari data berikut:
        Data:   [
                    { name: 'Jeruk', price: 10000 }, 
                    { name: 'Anggur', price: 15000 }, 
                    { name: 'Semangka', price: 20000 } 
                ]

        Output: [
                    { name: 'Jeruk', price: 'Rp.10.000' }, 
                    { name: 'Anggur', price: 'Rp.15.000' }, 
                    { name: 'Semangka', price: 'Rp.20.000' } 
                ]
*/

const product = [
  { name: "Jeruk", price: 10000 },
  { name: "Anggur", price: 15000 },
  { name: "Semangka", price: 20000 },
];

for (i = 0; i < product.length; i++) {
//   console.log(product[i].price);
  product[i].price = ` Rp. ${product[i]?.price?.toLocaleString("id-ID")}`;
}
console.log(product);