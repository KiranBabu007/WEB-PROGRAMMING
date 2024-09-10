function greet(name,callback){
    console.log("Hello "+name)
    setTimeout(callback,4000)
    
}

function sayGoodbye(){
    console.log("Goodbye")
}

greet('Alice',sayGoodbye)