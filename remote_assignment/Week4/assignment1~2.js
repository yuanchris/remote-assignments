// Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback) {
  
    // your code here
    let add = n1 + n2;
    setTimeout(function(){callback(add);}, delayTime);
    }

delayedResult(4, 5, 3000, function(result) {console.log(result);}); 
// 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result) {
console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds



// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
    // your code here
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
       callback(xhr.responseText);
    }
    };
    xhr.send();

    }

function render(data){
// your code here.
// document.createElement() and appendChild() methods are preferred.

    item = document.createElement("p");
    item.innerHTML = data;
    document.body.appendChild(item);

}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
render(response);
}); // you should get product information in JSON format and render data in the page