function toppings_choice() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("whitch topping would you love?"))
        },3000)
    })
}