// Create node for input element in DOM
// const btn = document.getElementById("button");
// const btn = document.querySelector("input#button");
// btn.addEventListener('click',addingEventListener);

/* Below is the code created for passing the test in phase-0, so the listener is 
created inside function '' addingEventListener()*/
function addingEventListener() {
    // Complete impletement of code below
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}
addingEventListener();




// // below is the code for passing test in phase - 1
// const btn = document.querySelector("#button")
// btn.addEventListener("click",showMsg)
// function showMsg() {
//   return alert("I was clicked!")
// }