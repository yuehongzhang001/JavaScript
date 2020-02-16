
//Yuehong Zhang 3109345
window.onload = function (){
    let buttonSwatch = document.getElementById('buttonSwatch');//get the button to Request Swatch
    let buttonFailure = document.getElementById('buttonFailure');//get the button to request failure

    //add event listener so that pressing button will request Swatch with a passcode
    buttonSwatch.addEventListener('click',function () {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://courses.acs.uwinnipeg.ca/2909-050/assignments/Assignment%203/colors.php?passcode=secret!');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            tryCreateSwatch(xhr);
        };
    });

    //add event listener so that if press button will request Swatch without a passcode
    buttonFailure.addEventListener('click',function () {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://courses.acs.uwinnipeg.ca/2909-050/assignments/Assignment%203/colors.php');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            tryCreateSwatch(xhr);
        };
    });

    /**
     * The function will analyze the response, if detect a error in the object,
     * present the error message in a <h2>, if not, create a color swatch box.
     */
    function tryCreateSwatch(xhr) {
        let jsonObject= xhr.response; //get the response
        let error = jsonObject.error; //get the error attribute in the object.
        let errorH2 = document.createElement('h2');//create a h2 element.
        errorH2.className = 'error-message'; //set its class name to error-message

        // if no error detected, clear any error message, and create a color swatch box.
        if(error===undefined){
            let name=jsonObject.name;
            let color = jsonObject.code;
            clearErrorMessages(errorH2.className);
            createBox(name,color);
        }else {//if error detected, show the message.
            errorH2.innerText=jsonObject.message;
            document.body.append(errorH2);
        }
    }

    /**
     * The function will clear all error messages with specific class name.
     */
    function clearErrorMessages(className) {
        let elements = document.body.getElementsByClassName(className);
        let number = elements.length;
        for(let i=0;i<number;i++){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    /**
     * The method to create a box with specific background color, and a text in it.
     */
    function createBox(text, color) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = text;
        box.style.backgroundColor = color;
        document.body.append(box);
    }
};


