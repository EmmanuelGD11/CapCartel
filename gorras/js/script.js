// Escucha el clic en el icono del carrito
document.getElementById('cart-container').addEventListener('click', function () {
  const cartContent = document.getElementById('cart-content');

  // Alternar la visibilidad del contenido del carrito
  if (cartContent.style.display === 'block' || cartContent.style.display === '') {
    cartContent.style.display = 'none';
  } else {
    cartContent.style.display = 'block';
  }
});
