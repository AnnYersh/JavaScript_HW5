let list = {
        id: {
            imya: '' ,
            vozrast: ''
        }
    }
    
    for (i=1; i<=5; i++) {
        let nom = prompt('Ваше имя');
        let age = +prompt('Ваш возраст');
        let id = i;
    
        for (let key in list) {
            list[key] = i;
            list.imya = nom;
            list.vozrast = age;
        }  

    console.log(`Пользователь ${id}`);
    console.log(`Имя ${nom}`);
    console.log(`Возраст ${age}`);
    
    console.log(list) 
    } 