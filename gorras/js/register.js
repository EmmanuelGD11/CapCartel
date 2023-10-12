document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const lastname = document.getElementById("lastname");
    //const email = document.getElementById("email");
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const button = document.getElementById("button");

    /*Para quitar el inspecionar */
    /*
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
    });
    document.addEventListener("keydown", (e)=>{
        console.log(e)
    })*/

    /************************** */

    form.addEventListener("submit", function (event) {
        try {
            let isValid = true;

            if (username.value === "") {
                isValid = false;
                showError(username, "Por favor, ingresa tu nombre");
            } else {
                hideError(username);
            }

            if (lastname.value === "") {
                isValid = false;
                showError(lastname, "Por favor, ingresa tus apellidos");
            } else {
                hideError(lastname);
            }

            if (user.value === "") {
                isValid = false;
                showError(user, "Por favor, ingresa tu usuario");
            } else {
                hideError(user);
            }
            /*
            const emailValue = email.value;
            if (emailValue === "") {
                isValid = false;
                showError(email, "Por favor, ingresa tu email");
            } else if (!isValidEmail(emailValue)) {
                isValid = false;
                showError(email, "Ingresa una dirección de correo electrónico válida");
            } else {
                hideError(email);
            }*/

            if (password.value === "") {
                isValid = false;
                showError(password, "Por favor, ingresa una contraseña");
            } else if (password.value.length < 6) {
                isValid = false;
                showError(password, "La contraseña debe tener al menos 6 caracteres");
            } else {
                hideError(password);
            }

            if (password2.value === "") {
                isValid = false;
                showError(password2, "Por favor, confirma tu contraseña");
            } else if (password2.value !== password.value) {
                isValid = false;
                showError(password2, "Las contraseñas no coinciden");
            } else {
                hideError(password2);
            }

            if (!isValid) {
                event.preventDefault();
            }

        

        // Si todos los campos son válidos, crear un objeto con los datos
        if (isValid) {
            // Crear un objeto con los datos
            const userData = {
                username: username.value,
                lastname: lastname.value,
                user: user.value,
                password: password.value,
                password2: password2.value,
                // Otros datos si los tienes
            };
        
            try {
                // Obtener los usuarios almacenados en localStorage
                const storedUsersJSON = localStorage.getItem("userData");
                const storedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];
        
                // Verificar si el nombre de usuario ya existe
                const isDuplicateUser = storedUsers.some(u => u.user === userData.user);
        
                if (isDuplicateUser) {
                    alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
                    return;
                }
        
                // Agregar el nuevo usuario al array de usuarios
                storedUsers.push(userData);
        
                // Convertir el array actualizado en una cadena JSON
                const jsonData = JSON.stringify(storedUsers);
        
                // Guardar la cadena JSON en localStorage con la clave "userData"
                localStorage.setItem("userData", jsonData);
        
                // Mostrar un mensaje de éxito
                alert("Registro exitoso");
        
                // Opcional: Redirigir al usuario a otra página después del registro
                // window.location.href = "otra_pagina.html";
            } catch (error) {
                console.error("Error al almacenar datos en localStorage:", error);
            }
        }
        
    } catch (error) {
        console.error("Se ha producido un error:", error);
    }

    });


    function showError(input, message) {
        const parent = input.parentElement;
        const errorMessage = parent.querySelector(".error-message");
        if (!errorMessage) {
            const errorElement = document.createElement("span");
            errorElement.className = "error-message";
            errorElement.textContent = message;
            parent.appendChild(errorElement);
        } else {
            errorMessage.textContent = message;
        }
        input.classList.add("error");
    }

    function hideError(input) {
        const parent = input.parentElement;
        const errorMessage = parent.querySelector(".error-message");
        if (errorMessage) {
            parent.removeChild(errorMessage);
        }
        input.classList.remove("error");
    }
    /*
    function isValidEmail(email) {
        // Expresión regular para validar una dirección de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }*/
});
