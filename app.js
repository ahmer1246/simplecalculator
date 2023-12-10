let inputEl = document.getElementById("inp");
let buttonEl = document.querySelectorAll("button")
console.log(buttonEl)
let string = " ";
let arr = Array.from(buttonEl)
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            inputEl.value=string;
        }
        else if(e.target.innerHTML=="Del"){
            string = string.substring(0 ,string.length - 1 );
            inputEl.value =string;
        }
        else if(e.target.innerHTML == "AC"){
           string =" ";
            input.value=string;
        }
        else{
            string+= e.target.innerHTML;
            inputEl.value=string;
        }

    })
})

