let string = ""

let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',(val)=>{

        if(val.target.innerHTML == '=')
        {
            string = eval(string)
        }
        else if(val.target.innerHTML == 'C')
        {
            string=""
        }
        else string = string + val.target.innerHTML
        document.querySelector("#output").value = string;

    })
})