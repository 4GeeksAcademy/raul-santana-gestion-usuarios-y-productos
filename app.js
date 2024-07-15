const baseDeDatos = [
    {
        email: "example@email.com",
        password: "123456",
        productos: [
            "Naranja",
            "Pizza",
            "Cerveza"
        ]
    },
    {
        email: "example1@email.com",
        password: "123456",
        productos: [
            "Manzana",
            "Pera",
            "Banana"
        ]
    }
];

function registrarUsuario() {
    const email = prompt("Introduce tu email:");
    const password = prompt("Introduce tu contraseña:");
    const usuarioExistente = baseDeDatos.find(user => user.email === email);
    if (usuarioExistente) {
        alert("El email ya está registrado.");
    } else {
        baseDeDatos.push({ email: email, password: password, productos: [] });
        alert("Registro con éxito.");
    }
}
function iniciarSesion() {
    const email = prompt("Introduce tu email:");
    const password = prompt("Introduce tu contraseña:");
    const usuario = baseDeDatos.find(user => user.email === email && user.password === password);
    if (usuario) {
        alert("Inicio de sesión exitoso. Bienvenido al sistema.");
        gestionarProductos(usuario);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
function gestionarProductos(usuario) {
    let gestionProductos = true;
    while (gestionProductos) {
        const opcion = prompt("Gestionar Productos:\n1. Agregar producto\n2. Consultar productos\n3. Cerrar sesión");
        switch (opcion) {
            case '1':
                const nuevoProducto = prompt("Introduce el nombre del producto a agregar:");
                usuario.productos.push(nuevoProducto);
                alert("Producto agregado exitosamente.");
                break;
            case '2':
                alert("Tus productos:\n" + usuario.productos.join("\n"));
                break;
            case '3':
                alert("Sesión cerrada.");
                gestionProductos = false;
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }
}
function iniciarSistema() {
    let sistemaActivo = true;
    while (sistemaActivo) {
        const opcion = prompt("Sistema de Gestión de Usuarios:\n1. Registrar usuario\n2. Iniciar sesión\n3. Salir");
        switch (opcion) {
            case '1':
                registrarUsuario();
                break;
            case '2':
                iniciarSesion();
                break;
            case '3':
                alert("Saliendo del sistema.");
                sistemaActivo = false;
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }
}
iniciarSistema();