let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products1 = [
    {
        id: 1,
        code: 'Course Code - C01',
        seats: '60 Seats',
        duration: '6 months',
        name: 'SSC',
        image: 'download.jpg',
        seatsavailable: '40 seats',
        price: 120000
    },
    {
        id: 2,
        code: 'Course Code - C02',
        seats: '60 Seats',
        duration: '6 months',
        name: 'BANK',
        image: 'Banking_Exams.png',
        seatsavailable: '40 seats',
        price: 120000
    },
    {
        id: 3,
        code: 'Course Code - C03',
        seats: '60 Seats',
        duration: '6 months',
        name: 'RAILWAY',
        image: 'RRB-LOGO.jpg',
        seatsavailable: '40 seats',
        price: 220000
    }
];
let products2 = [
    {
        id: 1,
        code: 'Course Code - SC01',
        seats: '60 Seats',
        duration: '6 months',
        name: 'CRASH COURSE',
        image: 'CC.jpg',
        seatsavailable: '40 seats',
        price: 120000
    },
    {
        id: 2,
        code: 'Course Code - SC02',
        seats: '60 Seats',
        duration: '6 months',
        name: 'TEST SERIES',
        image: 'photo-1517842645767-c639042777db.jpg',
        seatsavailable: '40 seats',
        price: 120000
    },
    {
        id: 3,
        code: 'Course Code - SC03',
        seats: '60 Seats',
        duration: '6 months',
        name: 'NOTES',
        image: 'download1.png',
        seatsavailable: '40 seats',
        price: 220000
    }
];
let listCards = [];
function initApp() {
    products1.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        
        newDiv.innerHTML = `
        
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="row d-flex mb-3">
            <span class="code">${value.code.toLocaleString()}
            <a class="icon lite"><i class="fa fa-book" aria-hidden="true"></i>
                </a>
               </span>
            <span class="duration">${value.duration.toLocaleString()}
            <a class="icon lite"><i class="fa fa-calendar"
                      aria-hidden="true"></i>
                  </a>
            </span>
            </div>
            <div class="row d-flex mb-3">
            <span class="seats">${value.seats.toLocaleString()}
            <a class="icon lite"><i class="fa fa-users" aria-hidden="true"></i>
                  </a>
                  </span>
            <span class="seatsavailable">${value.seatsavailable.toLocaleString()}
            <a class="icon lite"><i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                  </span>
                  </div>
                  <div class="button-item">
                  <button href="productpage.html" class="get">Enroll Now</button>
            <button class="get" onclick="addToCart(${key})">Add To Cart</button></div>`;
            
        list1.appendChild(newDiv);
    })
    products2.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="row d-flex mb-3">
            <span class="code">${value.code.toLocaleString()}
            <a class="icon lite"><i class="fa fa-book" aria-hidden="true"></i>
                </a>
               </span>
            <span class="duration">${value.duration.toLocaleString()}
            <a class="icon lite"><i class="fa fa-calendar"
                      aria-hidden="true"></i>
                  </a>
            </span>
            </div>
            <div class="row d-flex mb-3">
            <span class="seats">${value.seats.toLocaleString()}
            <a class="icon lite"><i class="fa fa-users" aria-hidden="true"></i>
                  </a>
                  </span>
            <span class="seatsavailable">${value.seatsavailable.toLocaleString()}
            <a class="icon lite"><i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                  </span>
                  </div>
                  <div class="button-item">
                  <button href="productpage.html" class="get">Enroll Now</button>
            <button class="get" onclick="addToCart(${key})">Add To Cart</button></div>`;
            
        list1.appendChild(newDiv);
    })
}

initApp();
function addToCart(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products1[key]));
        listCards[key] = JSON.parse(JSON.stringify(products2[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products1[key].price;
        listCards[key].price = quantity * products2[key].price;
    }
    reloadCard();
}