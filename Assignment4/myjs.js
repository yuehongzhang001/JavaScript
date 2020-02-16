/**
 * Yuehong Zhang 3109345 Assignment4
 */
window.onload =function(){
    //get the container
    let container = document.getElementById("container");
    container.addEventListener('click', (event)=>showForm(event));

    //the function to show the form
    function showForm(event) {
        let form = document.getElementById('form');
        form.style.visibility = 'visible';
        //get the coordinate of the click event
        let posX = event.clientX;
        let posY = event.clientY;

        //set the position of form
        form.style.left = posX +"px";
        form.style.top = posY +"px";

        //get the position for box relative to the container.
        let leftValue = posX-container.offsetLeft-container.clientLeft;
        let topValue  = posY-container.offsetTop-container.clientTop;


        //add event listener to submit button so that it will draw a box or warn an error
        submit.onclick = function draw(event) {
            //stop bubbling
            event.preventDefault();

            //get the value of size and color in the form
            let sizeValue = document.getElementById('size').value;
            let colorValue = document.getElementById('color').value;

            //validate the values got,if validate, clear any errors, and draw the box
            if(validate(sizeValue,colorValue)){
                //remove all errors
                clearErrors();
                let box = document.createElement('div');
                box.style.width = sizeValue + "px";
                box.style.height = sizeValue + "px";
                box.style.backgroundColor = "#"+colorValue;
                box.classList.add('box');

                box.style.left = leftValue+"px";
                box.style.top = topValue+"px";
                container.append(box);



                //hide the form
                form.style.visibility = '';
                //reset the form
                form.reset();
            }
        };

        //function to create an error and append it in the form
        function showError(message){
            let errorMessage = document.createElement('div');
            errorMessage.innerText = message;
            errorMessage.classList.add('error');
            form.append(errorMessage);
        }

        //function which will clear all error messages.
        function clearErrors() {
            let errors = document.getElementsByClassName('error');
            let numOfErrors = errors.length;
            for(let i=0; i<numOfErrors; i++){
                errors[0].parentElement.removeChild(errors[0]);
            }
        }

        //function to validate the size and color value, if not valid, will show error message
        function validate(size, color) {
            let valid = true;
            if(size < 5 || size > 200){
                showError("Error: The size should only be between between 5 and 200!");
                valid = false;
            }
            if(color === '(empty string)'){
                showError("Error: The color is required, none was chosen!");
                valid = false;
            }
            return valid;
        }
    }
};









//cancel the submit action