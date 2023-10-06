document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('button');



     document.addEventListener("DOMContentLoaded", function () {
            const storedUser = localStorage.getItem("loggedInUser");
            if (storedUser) {
                window.location.href = "preguntas.html"; 
            }
        });

    /*Para quitar el inspecionar */
    /*
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
    });
    document.addEventListener("keydown", (e)=>{
        console.log(e)
    })*/



    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtener los valores de los campos de entrada
        const enteredUsername = username.value.trim();
        const enteredPassword = password.value.trim();

        if (!enteredUsername || !enteredPassword) {
            alert("Por favor, ingresa un nombre de usuario y una contraseña.");
            return;
        }

        // Obtener los usuarios almacenados en localStorage
        const storedUsersJSON = localStorage.getItem("userData");
        const storedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

        // Verificar si las credenciales coinciden con algún usuario almacenado
        const user = storedUsers.find(u => u.user === enteredUsername && u.password === enteredPassword);

        if (user) {
            // Inicio de sesión exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
            alert("Inicio de sesión exitoso");
            // Redireccionar a otra página
            window.location.href = "index.html";
        } else {
            // Inicio de sesión fallido, muestra un mensaje de error
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });
});
