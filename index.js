// Create node for input element in DOM
// const btn = document.getElementById("button");
// const btn = document.querySelector("input#button");
// btn.addEventListener('click',addingEventListener);

/* Below is the code created for passing the test, so the listener is 
created inside function '' addingEventListener()*/
function addingEventListener() {
    // Complete impletement of code below
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}



// addingEventListener();