const ATK = [
    {nama : 'Pulpen', harga:2500},
    {nama : 'Buku', harga:5000},
    {nama : 'Penggaris', harga : 3000}
]

for ( i = 0; i < ATK.length; i++){
    ATK[i].harga = `Rp. ${ATK[i]?.harga?.toLocaleString('id-ID')}`
}
console.log(ATK)