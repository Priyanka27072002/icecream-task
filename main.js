let shop={
    fruits:["banana","watermelon","lemon","orange"],
    liquid:["milk","water"],
    holder:["cup","bottle"]
}

let promise=new Promise(function(resolve,reject){
    let open=true
    if(open){
        resolve()
    }
    else{
        reject()
    }
   
})

promise.then(()=>{
    setTimeout(function(){
        document.write(shop.fruits[1]+" was selected"+"<br>")
    },1000)
    

})
.then(()=>{
    
    setTimeout(function(){
        document.write("fruits has been chopped"+"<br>")
    },2000)
})
.then(()=>{
    setTimeout(function(){
        document.write(shop.liquid[0]+" added"+"<br>")
    },4000)

})
.then(()=>{
    setTimeout(function(){
        document.write("Machine started"+"<br>")
    },6000)
})
.then(()=>{
    setTimeout(function(){
        document.write("Your juice is placed in the "+shop.holder[0]+"<br>")
    },8000)
})

.catch(()=>{
    document.write("Shop is closed")
})