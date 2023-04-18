document.addEventListener('DOMContentLoaded', () => {
  const produtos = document.querySelectorAll('.produtos__lista__produto');

  produtos.forEach((produto) => {
    produto.addEventListener('click', function () {
      this.style.backgroundColor = corAleatoria();
    });
  });
});

function corAleatoria() {
  const cores = ['yellow', 'brown', 'gray', 'gold', 'orange'];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  return cor;
}
