Produits = [
    {
        id:0,
        nom:'bell pepper',
        prix:'4.50',
        image:'img/bell-pepper.png',
        promotion:null,
        active: false,

    },
    {
        id:1,
        nom:'birthday cake',
        prix:'8',
        image:'img/birthday-cake.png',
        promotion:null,
        active: false,
    },
    {
        id:2,
        nom:'burger',
        prix:'2.50',
        image:'img/burger.png',
        promotion:null,
        active: false,
    },
    {
        id:3,
        nom:'Burrito',
        prix:'2.50',
        image:'img/burrito.png',
        promotion:null,
        active: false,
    },
    {
        id:4,
        nom:'Chicken leg',
        prix:'1.50',
        image:'img/chicken-leg.png',
        promotion:null,
        active: false,
    },
    {
        id:5,
        nom:'Frite',
        prix:'1',
        image:'img/french-fries.png',
        promotion:null,
        active: false,

    },
    {
        id:6,
        nom:'Hot Dog',
        prix:'4',
        image:'img/hot-dog.png',
        promotion:null,
        active: false,

    },
    {
        id:7,
        nom:'Pizza',
        prix:'6.50',
        image:'img/pizza.png',
        promotion:null,
        active: false,
    },
    {
        id:8,
        nom:'Poulet rôti',
        prix:'9.50',
        image:'img/roast-chicken.png',
        promotion:null,
        active: false,

    }
];
Populaires = [
    {
        id:0,
        nom:'Pizza',
        prix:'6.50',
        image:'img/pizza.png',
        promotion:null,
        active: false,
        populaire:true,

    },
    {
        id:1,
        nom:'Poulet rôti',
        prix:'9.50',
        image:'img/roast-chicken.png',
        promotion:null,
        active: false,
        populaire:true,
    },
    {
        id:2,
        nom:'burger',
        prix:'2.50',
        image:'img/burger.png',
        promotion:null,
        active: false,
        populaire:true,
    },
    {
        id:3,
        nom:'Chicken leg',
        prix:'1.50',
        image:'img/chicken-leg.png',
        promotion:null,
        active: false,
        populaire:true,
    },
]

const wakdo = {
    data() {
        return {
            Produits : window.Produits,
            Populaires :window.Populaires,
        }
    },
    methods:{

    }

};

Vue.createApp(wakdo).mount('#app')