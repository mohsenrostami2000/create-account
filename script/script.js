const btn = document.querySelector('.btn');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const allFilled = Array.from(inputs).every(input => input.value !== "");

const errorImg = document.querySelectorAll('.error-img');
const errorMassage = document.querySelectorAll('.label');

window.addEventListener('DOMContentLoaded', () => {
    inputValidation();
    // add event to btn
    btn.addEventListener('click', () => {
        const allFilled = Array.from(inputs).every(input => input.value !== "");
        console.log(allFilled)
        if (allFilled) {
            console.log(allFilled)
            alert('submit');
            form.reset();
        }

    })
})

function inputValidation(){
    for(let i = 0; i < inputs.length; i++) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (inputs[i].value === '') {
                errorImg[i].classList.add('invalid');
                errorMassage[i].classList.add('invalid');
                inputs[i].style.border = "2px solid var(--red)";  
            } 
   
           
        })

        inputs[i].addEventListener('blur', () => {
            
            const emailRegX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const passwordRegX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            inputs[i].value = inputs[i].value.replace(/\s/g, "");
            
            if (inputs[i].value !== "") {

                hideError();
                if (inputs[i].id == "email") {
                    focusInput();
                    if(!emailRegX.test(inputs[i].value)) {
                        showError();
                        redPlaceholder();
                        inputs[i].placeholder = `example@gmail.com`;
                        
                    } else { 
                        showInputText();
                    }
                } 

                if (inputs[i].id == "password") {
                    focusInput();
                    if (!passwordRegX.test(inputs[i].value)) {
                        
                        redPlaceholder();
                        inputs[i].placeholder = `Abcd@1234`;
                        errorMassage[i].innerText = "At least 8 chractor, a number and an upercase";
                        showError();
                        
                    } else {
                        inputs[i].type = "password";
                        showInputText();
                    }
                }
                
            } else {
                showError()
                
            }

            function hideError() {
                errorImg[i].classList.remove('invalid');
                errorMassage[i].classList.remove('invalid');
                inputs[i].style.border = "2px solid var(--green)"
            }
            
            function showError() {
                errorImg[i].classList.add('invalid');
                errorMassage[i].classList.add('invalid');
                inputs[i].style.border = "2px solid var(--red)";
            }

            function redPlaceholder() {
                inputs[i].value = "";
                inputs[i].classList.add('red');
                inputs[i].style.fontStyle = "italic";
            }
            
            function focusInput() {
                inputs[i].addEventListener('focus', () => {
                    inputs[i].style.color = "var(--dark-blue)";
                    inputs[i].style.fontStyle = "normal";
                })
            }
            
            function showInputText() {
                inputs[i].style.color = "var(--dark-blue)";
                inputs[i].style.fontStyle = "normal";
                
            }
        })

    }
}



