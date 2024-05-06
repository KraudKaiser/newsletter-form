let input = document.getElementsByClassName("input")
let errorMessage = document.getElementsByClassName("error-message")
let form = document.getElementById("form")
let emailSubmitted = ""
input[0].addEventListener("input", () =>{
    errorMessage[0].className="error-message"
    input[0].className="input"
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(input[0])
    if(input[0].value === ""){
        errorMessage[0].className = "error-message show"
        input[0].className = "input show"
        return false
    }
    else{
        emailSubmitted = input[0].value
        document.getElementById("form").submit()
    }
})


