const panjangSegitiga = 5
const lebarSegitiga = 3

segitigaArea = panjangSegitiga * lebarSegitiga
console.log(segitigaArea)

segitigaArea1 = panjangSegitiga + lebarSegitiga + panjangSegitiga + lebarSegitiga
console.log(segitigaArea1)

const radius = 5
diameter = 2 * radius
console.log(diameter)

c = 3.14 * diameter
console.log(c)

area = 3.14 * radius * radius
console.log(area)

const angle1 = 80
const angle2 = 65
const circle = 180 - (angle1 + angle2)
console.log(circle)

const date = new Date('2022-01-20') 
console.log(date)
const date1 = new Date('2022-01-22')
console.log(date1)
const date3 = date1 - date
console.log(date3) // masih dalam milisecond
const date4 = date3 / (24 * 60 * 60 * 1000) // dikonversikan agar dapat diubah ke hari menggunakan format ("24 * 60 * 60 * 1000")
console.log(date4)

const totalday = 400 // Case total hari
const year = totalday % 365 // Di modulus menjadi sisa 1
console.log(year) // hasil
const bulan = year % 30 // hasil dari variable "year" dimodulus kembali dengan bulan
console.log(bulan) // hasil
const day = bulan // variable "day" diubah menjadi variable "bulan"
const bulan1 = (year - bulan) / 30 // hasil dari modulus "year" dan "bulan" dikurangi kemudian dibagi dengan total hari dalam 1 bulan
const year1 = (totalday - year) / 365 // hasil dari "total hari" dan "year" dikurangi kemudian dibagi dengan total hari dalam 1 tahun
const hasil = `${year1} Years, ${bulan1} Bulan, ${day} Days`
console.log(hasil)

const days = 366 // Case
const years = Math.floor(days/365) // total hari dibagi dengan total hari dalam 1 tahun karna hasil nya menggunakan (".") maka dibulatkan kebawah menggunakan metode ("Math.floor")
const dayleft = days % 365 // total dari hari kemudian di modulus dengan total hari dalam 1 tahun sisa bagi 1
const month = Math.floor(dayleft/30) // total hasil untuk bulan "dayleft" dibagi dengan total hari dalam 1 bulan karna hasilnya menggunakan (".") maka dibulatkan kebawah menggunakan metode ("Math.floor")
const dayleft1 = dayleft % 30 // total dari "dayleft1" menggunakan modulus dari hasil dayleft dimodulus dengan total hari dalam 1 bulan sisa bagi 1
console.log(`
    Total : ${days} = ${years} Years, ${month} Month, ${dayleft1} Days
`)