function fahrenheit(){
    // alert("hi")
    var userInput = Number(document.getElementById("input").value);
  let  fahrenheit=(userInput*9/5)+32


    // console.log(fahrenheit);

    var num = document.createElement("p");
    num.textContent = fahrenheit;
    document.getElementById("container").appendChild(num);



    
    
}
function celsius(){
    var userInput = Number(document.getElementById("input").value);
    let celsius=(userInput-32)*5/9
    // console.log(celsius);

var num = document.createElement("p");
num.textContent = celsius;
document.getElementById("container").appendChild(num);
    
    
 }
