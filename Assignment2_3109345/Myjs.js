/**
 * @author Yuehong Zhang 3109345 Assignment2
 */

/**
 * Class called ParagraphChanger where the constructor accepts the Paragraph element. add four buttons
 */
class ParagraphChanger {
    /**
     * the constructor create a div before the paragraph, with the ID button_container. It should then add four buttons
     */
    constructor(paragraph){
        let button_container = document.createElement("div");//create a div element as button container
        paragraph.before(button_container,paragraph);//add button container before the paragraph

        //create four buttons element
        let button_bold = document.createElement("button");//create button to toggle Bold
        let button_width = document.createElement("button");//create button to toggle width
        let button_colour = document.createElement("button");//create button to toggle colour
        let button_font_size = document.createElement("button");//create button to toggle font size

        //set the name for buttons
        button_bold.innerText = "Toggle Bold";
        button_width.innerText = "Toggle With";
        button_colour.innerText = "Toggle Colour";
        button_font_size.innerText = "Toggle Font Size";

        //set the css class for button container and buttons
        button_container.setAttribute('class','button_container');
        button_bold.setAttribute('class', 'button_with_margin');
        button_width.setAttribute('class','button_with_margin');
        button_colour.setAttribute('class','button_with_margin');
        button_font_size.setAttribute('class','last_button');

        //add four button element into the div element
        button_container.append(button_bold);
        button_container.append(button_width);
        button_container.append(button_colour);
        button_container.append(button_font_size);

        //add event listeners for Toggle Bold button to make text bold
        button_bold.addEventListener("click",function () {
            let font_Weight = paragraph.style.fontWeight;
            if(font_Weight !== "bold")
                paragraph.style.fontWeight = "bold";
            else
                paragraph.style.fontWeight = "";
        });

        //add event listeners for Toggle Width button to change the width of the paragraph to be 50%.
        button_width.addEventListener("click",function () {
            let width = paragraph.style.width;
            if(width !== "50%")
                paragraph.style.width = "50%";
            else
                paragraph.style.width = "";
        });


        //add event listeners for Toggle Colour button to change the color of the text to Ferrari Red.
        button_colour.addEventListener("click",function () {
            // paragraph.classList.toggle("red");
            let color = paragraph.style.color;
            if(color==="")
                paragraph.style.color="#ff2800";
            else
                paragraph.style.color="";
        });

        //add event listeners for Toggle Size to double the font size.
        button_font_size.addEventListener("click", function () {
            let font_size = paragraph.style.fontSize;
            if(font_size === "200%")
                paragraph.style.fontSize = "";
            else
                paragraph.style.fontSize = "200%";
        });

    }
}

let target_p = document.getElementById("target_p");//get paragraph element by id
let changer = new ParagraphChanger(target_p);//create a ParagraphChanger object that accept paragraph element as parameter.
