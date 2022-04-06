import { browser } from "$app/env";
import { writable } from "svelte/store";


const { subscribe , set , update } = writable(browser && JSON.parse(localStorage.getItem('cart')) || [])


const add = (cart) => 
    update((cartList) => {
           let newCart = [...cartList]
           let FindIndexDude = cartList.findIndex((x) => x.name === cart.name)
           if(FindIndexDude >= 0 ){
                newCart[FindIndexDude] = {
                    ...cartList[FindIndexDude],
                    kuantiti : cartList[FindIndexDude].kuantiti + 1
                }
                browser && localStorage.setItem('cart', JSON.stringify(newCart))
                return newCart
           } else { 
            newCart = [...cartList , cart]
            browser && localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
           }
    })

const remove = (cart)=>{
    update((cartList)=> {
        let newCart = [...cartList]
        let FindIndexDude = cartList.findIndex((x)=> x.name === cart.name)
        if(FindIndexDude >= 0){
            newCart[FindIndexDude] ={
                ...cartList[FindIndexDude],
                kuantiti : cartList[FindIndexDude].kuantiti - 1
            }
            browser && localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        }
    })
}


export default { 
    subscribe , add , remove
}