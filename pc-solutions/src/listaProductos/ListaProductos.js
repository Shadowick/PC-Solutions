export const listaProductos = [
    {
        id: 1,
        title: 'Placa De Video Amd Powercolor Fighter Rx 6500 4gb Gddr6',
        price: 77595,
        stock: 18,
        detail: 'Detalle de producto Amd Powercolor Fighter Rx 6500',
        category: 'Placas de video',
        img: 'https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_17-10-2022-04-10-45-2112281640280.png',
    },
    {
        id: 2,
        title: 'Placa De Video AMD Powercolor RX 6600 XT Hellhound',
        price: 184232,
        stock: 7,
        detail: 'Detalle de producto AMD Powercolor RX 6600 XT Hellhound',
        category: 'Placas de video',
        img: 'https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-AMD-POWERCOLOR-RX-6600-XT-HELLHOUND.webp',
    },
    {
        id: 3,
        title: 'Placa de Video Zotac Rtx 3070 Ti Gaming Trinity 8gb LHR',
        price: 252988,
        stock: 3,
        detail: 'Detalle de producto Zotac Rtx 3070 Ti Gaming Trinity',
        category: 'Placas de video',
        img: 'https://spacegamer.com.ar/img/Public/1058-producto-zt-a30710d-10p-image01-1089.jpg',
    },
    {
        id: 4,
        title: 'Placa de Video NVIDIA EVGA RTX 3070 Ti FTW3 Ultra 8G',
        price: 261000,
        stock: 9,
        detail: 'Detalle de producto NVIDIA EVGA RTX 3070 Ti',
        category: 'Placas de video',
        img: 'https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/VGA95.png',
    },
    {
        id: 5,
        title: 'Procesador Intel Core I5 12600K Alder Lake Sin Cooler LGA1700',
        price: 96884,
        stock: 4,
        detail: 'Detalle de producto I5 12600K Alder Lake',
        category: 'Microprocesadores',
        img: 'https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000005032037234108.jpg',
    },
    {
        id: 6,
        title: 'Procesador Intel Core I7 10700 10gen',
        price: 97310,
        stock: 11,
        detail: 'Detalle de producto I7 10700 10gen',
        category: 'Microprocesadores',
        img: 'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-3399597.jpg',
    },
    {
        id: 7,
        title: 'Procesador Amd Ryzen 5 5600X 4.6 GHz Sin Video AM4',
        price: 75684,
        stock: 6,
        detail: 'Detalle de producto Amd Ryzen 5 5600X 4.6 GHz',
        category: 'Microprocesadores',
        img: 'https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000000730143312042.jpg',
    },
    {
        id: 8,
        title: 'Procesador AMD RYZEN 7 5700G AM4',
        price: 82753,
        stock: 12,
        detail: 'Detalle de producto AMD RYZEN 7 5700G',
        category: 'Microprocesadores',
        img: 'https://front.dev.malditohard.com.ar/img/migration/PROCESADOR-AMD-RYZEN-7-5700G-AM4.webp',
    },
    {
        id: 9,
        title: 'MEMORIA RAM DDR4 8GB 3200MHZ ADATA XPG SPECTRIX D60G RGB',
        price: 15990,
        stock: 2,
        detail: 'Detalle de producto DDR4 8GB 3200MHZ ADATA XPG SPECTRIX',
        category: 'Memoria RAM',
        img: 'https://www.venex.com.ar/products_images/1594237851_productgallery38.png',
    },
    {
        id: 10,
        title: 'Memoria RAM Kingston 16GB DDR5 5200Mhz Fury Beast',
        price: 54999,
        stock: 5,
        detail: 'Detalle de producto DDR5 5200Mhz Fury Beast',
        category: 'Memoria RAM',
        img: 'https://s3-sa-east-1.amazonaws.com/saasargentina/oKM8dKSNxec7kfD55u9V/imagen',
    }
];

export const getProductos = (categoryName) => {
    return new Promise((res, rej) => {
        const filtroProductos = listaProductos.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? filtroProductos : listaProductos;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProducto = (productoId) => {
    return new Promise((res, rej) => {

        let productoRespuesta

        for (let i=0 ; i < listaProductos.length ; i++) {
            const productoActual = listaProductos[i]

            if (productoActual.id === productoId ) {
                productoRespuesta = productoActual;
            break            
        }
        }
        setTimeout(() => {
            res(productoRespuesta);
        }, 500);
    });
};
