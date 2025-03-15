document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-mobile');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Função para alternar o menu
  const toggleMenu = () => {
      navLinks.classList.toggle('active');
      menuButton.querySelector('i').classList.toggle('fa-xmark');
      body.classList.toggle('no-scroll');
  };

  // Evento de clique no ícone
  menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
      if(navLinks.classList.contains('active') && 
         !e.target.closest('.nav-links') && 
         !e.target.closest('.menu-mobile')) {
          toggleMenu();
      }
  });

  // Fechar ao rolar
  window.addEventListener('scroll', () => {
      if(navLinks.classList.contains('active')) {
          toggleMenu();
      }
  });
});

