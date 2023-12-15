// ASYNC

// Anu function that returns a PROMISE is asynchronous
fetch('someURL')
//Consuinmg the Proomise object that fetch returns
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(console.error)

// Async/Await Syntax

async function getData(){
    try{
        const response = await fetch (`someURL`);
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}
