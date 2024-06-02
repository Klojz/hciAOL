document.getElementById('registerForm')
        .addEventListener('submit', function(event){
            event.preventDefault();
            console.log("submit!");
            let valid = true;
            // Validasi Username
            let Username=document.getElementById('username').value;
            if(Username.length<=5){
                valid=false;
                document.getElementById('usernameError').innerText="username must be more than 5"
            }else{
                // valid=true
                document.getElementById('usernameError').innerText=""
            }

            let email=document.getElementById('email').value;
            if(!email.endsWith('@gmail.com')){
                valid=false;
                document.getElementById('emailError').innerText='Email must end with @gmail.com'
            }else{
                document.getElementById('emailError').innerText=""
            }

            let password=document.getElementById('password').value;
            if(!isAlphanaumeric(password)){
                valid=false;
                document.getElementById('passwordError').innerText="Password must be alphanaumeric"
            }else{
                document.getElementById('passwordError').innerText=""
            }

            let confirmPassword=document.getElementById('confirm-password').value;
            if(confirmPassword!==password){
                valid=false;
                document.getElementById('confirmPasswordError').innerText="Password must be the same!"
            }else{
                document.getElementById('confirmPasswordError').innerText=""
            }

            let genderSelected=document.querySelector('input[name="gender"]:checked')
            if(!genderSelected){
                valid=false;
                document.getElementById('genderError').innerText="Gender must be selected"
            }else{
                document.getElementById('genderError').innerText=""
            }

            let country=document.getElementById('country').value;
            if(country==""){
                valid=false;
                document.getElementById('countryError').innerText="Country must be selected"
            }else{
                document.getElementById('countryError').innerText=""
            }
            
            let agreement=document.getElementById('terms').checked;
            if(!agreement){
                valid=false;
                document.getElementById('termsError').innerText="Please check the box"
            }else{
                document.getElementById('termsError').innerText=""
            }

            if(valid){
                alert("Register Success")
            }
            console.log(valid);
        })
        function isAlphanaumeric(password){
            //pasword alphanaumeric = ada angka, ada huruf
            //ga ada symbol
            let hasNumber = false
            let hasLetter = false
            let hasSymbol = false
            for (let i = 0; i < password.length; i++) {
                const c = password[i];
                if(c>='a'&&c<='z'||c>='A'&&c<='Z'){
                    hasLetter=true;
                }else if (c>='0' && c<='9'){
                    hasNumber=true;
                }else{
                    hasSymbol=true;
                }
            }
            return (hasLetter &&hasNumber &&!hasSymbol);
        }