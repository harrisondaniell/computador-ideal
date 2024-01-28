const btns = [
    {
        id: 1,
        name: 'Jogos'
    },
    {
        id: 2,
        name: 'Edição de Video'
    },
    {
        id: 3,
        name: 'Live'
    },
    {
        id: 4,
        name: 'Escritório'
    },
    {
        id: 5,
        name: 'Programação'
    },
]

const filters = [...new Set(btns.map((btn) => { return btn }))]

document.getElementById('btns').innerHTML = filters.map((btn) => {
    const { name, id } = btn;
    return `<button class='fil-p' onclick='filterItems(${id})'>${name}</button>`;
}).join('');


const product = [
    {
        id: 1,
        image: 'img/ryzenjogosentrada.png',
        title: 'PC de Entrada(AMD)',
        price: 2500,
        link: 'https://www.pichau.com.br/computador-pichau-gamer-valefar-ii-intel-i5-10400f-geforce-gtx-1660-super-6gb-16gb-ddr4-ssd-480gb-43718',
        category: 'jogos'
    },
    {
        id: 1,
        image: 'img/inteljogosentrada.png',
        title: 'PC de Entrada(Intel)',
        price: 2999,
        link: '',
        category: 'jogos'
    },
    {
        id: 1,
        image: 'img/ryzenjogos.png',
        title: 'PC Gamer Intermediário(AMD)',
        price: 4500,
        link: '',
        category: 'jogos'
    },

    {
        id: 2,
        image: 'image/gg-2.jpg',
        title: 'Computador',
        link: '',
        price: 300,
    },
    {
        id: 5,
        image: 'image/hh-3.jpg',
        title: 'Computador',
        price: 65,
        link: '',
        category: 'airpods'
    },
    {
        id: 3,
        image: 'image/ee-2.jpg',
        title: 'Computador',
        price: 200,
        link: '',
        category: 'cameras'
    },
    {
        id: 4,
        image: 'image/dd-2.jpg',
        title: 'Computador',
        price: 100,
        link: '',
        category: 'Laptop'
    },
    {
        id: 1,
        image: 'image/gg-3.jpg',
        title: 'Mobile',
        price: 350,
        link: '',
    },
    {
        id: 3,
        image: 'image/ee-1.jpg',
        title: 'Computador',
        price: 130,
        link: '',
        category: 'cameras'
    },
    {
        id: 5,
        image: 'image/hh-1.jpg',
        title: 'Air Pods',
        price: 85,
        link: '',
        category: 'airpods'
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

const filterItems = (a) => {
    const flterCategories = categories.filter(item);
    function item(value) {
        if (value.id == a) {
            return (
                value.id
            )
        }
    }
    displayItem(flterCategories)
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price, link } = item;
        return (
            `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <h2>$ ${price}.00</h2>
                    <a target="_blank" href="${link}">
                    Escolher
                    </a>
                </div>
            </div>`
        )
    }).join('');
}

displayItem(categories);
