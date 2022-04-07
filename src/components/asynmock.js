const products = [
    {id: "1", title:'INTEL MICRO CORE I3 10100', category:"Procesadores", description:'INTEL MICRO CORE I3 10100 4.3GHZ TURBO + COMET LAKE 10th GEN', price: 18000, pictureUrl:'https://www.profesionalreview.com/wp-content/uploads/2020/06/Intel-Core-i3-10100-Rendimiento-y-comparativa-en-renderizado-y-juegos-2.jpg'},
    {id: "2", title:"INTEL MICRO CORE I5 11600K", category:"Procesadores", description:"INTEL MICRO CORE I5 11600K 4.90 GHz TURBO ROCKET LAKE 11th Gen", price:36500, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_838442-MLA47034513941_082021-W.jpg"},
    {id: "3", title:"GIGABYTE MOTHER H410M H", category:"Motherboard", description:"Support for 10th Generation Intel® Core™ i9 processors/Intel® Core™ i7 processors/ Intel® Core™ i5 processors/Intel® Core™ i3 processors", price: 11000, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2DkXCr0JuOPsNHgmFY8Yl6x32Gj8I0sUPqOlPdyi01xZnPRjdxUTpGctJ7p2JCM3Of0&usqp=CAU"},
    {id: "4", title:"GIGABYTE MOTHER B560M ", category:"Motherboard", description:"11th Generation Intel® Core™ i9 processors / Intel® Core™ i7 processors / Intel® Core™ i5 processors", price: 17500, pictureUrl: "https://www.asesoriaensig.com.mx/wp-content/uploads/2020/12/MBDGIG4400-300x300.jpg"},
    {id: "5", title:"NVIDIA GTX 1660 SUPER", category:"Placa de Video", description:"MSI NVIDIA GTX 1660 SUPER VENTUS XS 6GB GDDR6", price:100000, pictureUrl:"https://www.venex.com.ar/products_images/1608579945_placadevideomsinvidiageforcegtx1660superventusxsoc6g.jpg"},
    {id: "6", title:"MSI NVIDIA RTX 3060", category:"Placa de Video", description:"MSI NVIDIA RTX 3060 GAMING Z TRIO 12GB GDDR6 Pci-e", price:135000, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXeblO5nRdaMT16wrXYv5W2XKJxwmLDwEOCRbd1QucIhUQSSLW0aHEuJhHcbug7D64gk&usqp=CAU"},
    {id: "7", title:"GIGABYTE SSD M.2 512GB", category:"Discos", description:"M.2 512GB AORUS RGB NVMe PCIe 3.0 x4 GP-ASM2NE2512GTTDR", price:14000, pictureUrl:"https://static.gigabyte.com/StaticFile/Image/Global/f3542af1cf2a57715ef7efdabadd67ee/Product/20955/png/1000"},
    {id: "8", title:"CORSAIR SSD M.2 2TB", category:"Discos", description:"CORSAIR SSD M.2 2TB MP400 R2 PCle Gen3×4 NVMe 3500MB/s", price: 34000, pictureUrl:"https://img.bestdealplus.com/ae04/kf/H23ec27c1b2db4936a30a396ac1a6a5fal.jpg"},
    {id: "9", title: "COOLER MASTER FUENTE 600W", category:"Fuentes", description:"COOLER MASTER FUENTE GAMER 600W ELITE V4MODEL MPE-6001-ACABN", price:8000, pictureUrl:"https://www.logg.com.ar/static/photos/FUENTES_SIN_CERTIFICACI%C3%93N/2657_MGL1FXNQ7D.jpg"},
    {id: "10", title:"GIGABYTE FUENTE 1000W 80 + GOLD", category:"Fuentes", description:"GIGABYTE FUENTE GAMER 1000W 80 + GOLD P1000GM FULL MODULAR P1000GM", price: 35000, pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/829/696/products/nb_fuente-gamer-gigabyte-1000w-modular-80-plus-gold_ver_5d1ca045d4792a996f993ba4366200ce1-0a86748196fb2dc7cf16372447596164-1024-1024.jpg"},
    {id: "11", title:"AOC MONITOR GAMER 24 ", category:"Monitores", description:"AOC MONITOR GAMER 24 144HZ VA G2490VX 1MS FHD", price:48000, pictureUrl:"https://m.media-amazon.com/images/I/81rom5mnjEL._AC_SS450_.jpg"},
    {id: "12", title:"Viewsonic MONITOR 27", category:"Monitores", description:"165HZ 1MS CURVO 1440P VA ELITE HDMI DISPLAYPORT XG270QC", price:115000, pictureUrl:"https://www.viewsonic.com/media/catalog/product/cache/16/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/x/g/xg270qc_front_hires_2.png"}
] 

const categories = [
    {id: 'Procesadores', description: 'Procesadores'},
    {id: 'Motherboard', description: 'Motherboard'},
    {id: 'Placa de Video', description: 'Placa de Video'},
    {id: 'Discos', description: 'Discos'},
    {id: 'Fuentes', description: 'Fuentes'},
    {id: 'Monitores', description: 'Monitores'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}


export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}