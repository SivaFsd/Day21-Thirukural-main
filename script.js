try{

for(var i=1;i<=1330;i++)
{

fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)

.then((response) =>
{
    return response.json()
})

.then((next) =>
{
    
    console.log(next.line1);
    document.getElementById("div1").innerHTML += next.number;
    document.getElementById("div1").innerHTML += "<br>";
    document.getElementById("div1").innerHTML += next.line1;
    document.getElementById("div1").innerHTML += "<br>";
    document.getElementById("div1").innerHTML += next.line2;
    document.getElementById("div1").innerHTML += "<br><br>";
    

    
})

}
}

catch(err)
{
    console.log(err)
}


