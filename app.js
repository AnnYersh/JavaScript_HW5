//Задание 1

let list = {}
    
    for (i=1; i<=2; i++) {
        let nom = prompt('Ваше имя');
        let age = +prompt('Ваш возраст');  
        let key = i
        list[key] = {
            nom: nom,
            age: age
        }
    }
    for (let key in list) {
        console.log(`Пользователь ${key}`);
        console.log(`Имя ${list[key].nom}`);
        console.log(`Возраст ${list[key].age}`);
    }

    console.log(list)  

    // Задача 2

    function receipt() {
        const arrayReceipt = [{
            'Lavash': {
                info: 'Big Cheese',
                price: 15000
            }, 'Hot-dog': {
                info: 'mini',
                price: 8500
            }, 'Cola': {
                info: '1.5 L',
                price: 9000
            }
        }, {
            'Milk': {
                info: '1 L',
                price: 8500
            },
            'Sugar': {
                info: '1 kg',
                price: 7000
            }
        }, {
            'Cola': {
                info: '1 L',
                price: 6500
            },
            'Fanta': {
                info: '1.5 L',
                price: 9000
            },
            'Lipton': {
                info: '1.2 L',
                price: 5000
            }, 
            'Nestle': {
                info: '10 L',
                price: 8500
            }
        }]
        const count = Math.floor(Math.random() * arrayReceipt.length)
        return arrayReceipt[count]
    }

    let cart = receipt();
    let delivery = 9000;

    for (let key in cart) {
        delivery += cart[key].price
        console.log(`Вы заказали ${[key]} в количестве ${cart[key].info}`)
    }
    console.log(`Общая стоимость ${delivery}`)
