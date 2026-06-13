const url="https://catfact.ninja/fact";

// let promise=fetch(url);

// console.log(promise);
//this is a getruequest use by use because
//not have any option in it
const getfacts= async () =>{
    console.log("getting data");
    let response=await fetch(url);
    console.log(response);
    //to make text in readable format use response.json
    
    let data=await response.json();
    console.log(data);
    
};

console.log(getfacts);
