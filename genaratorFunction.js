function* simpleGenaratorFunction(){
    console.log("This is genarator function")
    let i=12;
   while(true) {
    i++;
    yield i;
   }
}

let GF=simpleGenaratorFunction()
console.log(GF.next())

function genarateId() {
    // console.log(GF.next())
    document.getElementById("newId").innerText = GF.next().value
}