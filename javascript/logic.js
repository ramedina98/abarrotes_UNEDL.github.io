/*here i have just the basic functions to opne 
things, close things, etc...*/
const cartIcon = document.getElementById('carrito');
const shoppingPreView = document.querySelector('.shopping_cart_cont');
const delateAll = document.querySelector(".delate_all_btn");
const mainContPorducts = document.querySelector('.main_cart');
const conterOfproducts = document.getElementById('n');
const headerConter = document.querySelector('.conter');
const icon = document.querySelector('.icon i');
const main = document.getElementById('mainCont');

cartIcon.addEventListener('click', () => {
    const currentScroll =  window.pageYOffset || document.documentElement.scrollTop;
    if(currentScroll < 67.4){
        if(shoppingPreView.style.display === 'none' || shoppingPreView.style.display === ''){
            shoppingPreView.style.display = 'flex'; 
            icon.className = 'bx bx-window-close';
        } else {
            shoppingPreView.style.display = 'none';
            icon.className = 'bx bxs-cart-alt';
        }
    }else{
        shoppingPreView.style.position = 'fixed'
        if(shoppingPreView.style.display === 'none' || shoppingPreView.style.display === ''){
            shoppingPreView.style.display = 'flex'; 
            icon.className = 'bx bx-window-close';
        } else {
            shoppingPreView.style.display = 'none';
            icon.className = 'bx bxs-cart-alt';
        }
    }
});

//this function is to delate all the products in the
//shopping cart...
delateAll.addEventListener('click', () => {
    mainContPorducts.innerHTML = "";
    conterOfproducts.textContent = '0';
    headerConter.textContent = '0 carrito';
});

/*Code so that when you scroll down the header area where 
the cart is at the top and down with the scroll */
const header = document.getElementById('home'); //header...
const nav = document.getElementById('barra'); //navbar...
const cartZone = document.getElementById('buy'); //shopping cart zone...

window.addEventListener('scroll', () => {
    const paymentZone = document.getElementById('paymentZone');
    if(!paymentZone){
        //this is to know what is the scroll value...
        let currentScroll =  window.pageYOffset || document.documentElement.scrollTop;
        
        if(currentScroll > 67.4){
            //we add the new classlists to the header...
            header.classList.add('h');
            shoppingPreView.style.position = 'fixed'
        }else{
            header.classList.remove('h');
        }
    } else{
        header.classList.remove('h');
    }
})