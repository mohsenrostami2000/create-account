const btn = document.querySelector('.btn');

const inputs = document.getElementsByTagName('input');

function inputValidation(){
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', () => {
            
            const errorImg = document.querySelectorAll('.error-img');
            const errorMassage = document.querySelectorAll('.label');
            const emailRegX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const passwordRegX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if (!inputs[i].value == "") {
                errorImg[i].classList.remove('invalid');
                errorMassage[i].classList.remove('invalid');
                if (inputs[i].id == "email") {
                    inputs[i].addEventListener('focus', () => {
                        inputs[i].style.color = "var(--dark-blue)";
                        inputs[i].style.fontStyle = "normal";
                    })
                    if(!emailRegX.test(inputs[i].value)) {
                        errorMassage[i].classList.add('invalid');
                        errorImg[i].classList.add('invalid');
                        console.log('wrong email')
                        inputs[i].value = "";
                        inputs[i].placeholder = `example@gmail.com`;
                        inputs[i].classList.add('red')
                        inputs[i].style.fontStyle = "italic";
                        
                    } else { 
                        inputs[i].style.color = "var(--dark-blue)";
                        inputs[i].style.fontStyle = "normal";
                    }
                } 

                if (inputs[i].id == "password") {
                    inputs[i].addEventListener('focus', () => {
                        inputs[i].style.color = "var(--dark-blue)";
                        inputs[i].style.fontStyle = "normal";
                        inputs[i].type = "text";
                    })
                    if (!passwordRegX.test(inputs[i].value)) {
                        console.log('password should be atleast 8 charactor and includ one upercase letter and one number')
                        
                        inputs[i].value = "";
                        inputs[i].placeholder = `Abcd@1234`;
                        inputs[i].classList.add('red');
                        errorMassage[i].innerText = "At least 8 chractor, a number and an upercase";
                        errorMassage[i].classList.add('invalid');
                        errorImg[i].classList.add('invalid');
                        inputs[i].style.fontStyle = "italic";
                    } else {
                        inputs[i].type = "password";
                        inputs[i].style.color = "var(--dark-blue)";
                        inputs[i].style.fontStyle = "normal";
                    }
                }
                
                
            } else {
                errorImg[i].classList.add('invalid');
                errorMassage[i].classList.add('invalid');
            }
        })
    }
}

inputValidation();

