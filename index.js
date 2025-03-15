gsap.registerPlugin(ScrollTrigger);

const container1 = document.querySelector(".container1");

// Calcula a largura total considerando apenas as divs visíveis
const containerWidth = Array.from(container1.children).reduce((acc, child) => acc + child.offsetWidth, 0);

gsap.to(container1, {
  x: () => - (containerWidth - window.innerWidth), // Calcula o movimento baseado nas divs restantes
  ease: "none",
  scrollTrigger: {
    trigger: container1,
    pin: true,        // Fixa o container durante a animação
    scrub: 1,         // Sincroniza a animação com a rolagem
    snap: 1 / (container1.children.length - 1), // Ajusta o "snap" com base nas divs restantes
    end: () => "+=" + containerWidth // Atualiza com a largura calculada
  }
});

// Aguarde o DOM estar completamente carregado
// Aguarde o DOM estar completamente carregado
window.addEventListener('load', () => {
  var bx1 = document.querySelector(".bxx1");
  var bx2 = document.querySelector(".bxx2");
  var bx3 = document.querySelector(".bxx3");
  var container2 = document.querySelector(".container2");

  gsap.registerPlugin(ScrollTrigger);  // Registra o plugin ScrollTrigger

  gsap.fromTo(bx1, {
    opacity: 0,
    x: 430
  }, {
    x: -50,
    opacity: 2,
    duration: 2,
    
    scrollTrigger: {
      trigger: container2,  // Define o container que ativa o ScrollTrigger
      start: "top center",   // A animação começa quando o topo do container2 atinge o centro da tela
      end: "top 30%",  // A animação termina quando o fundo do container2 atinge o centro da tela
      scrub: 1,              // Isso vai fazer a animação ser sincronizada com o scroll
      markers: false        // Isso vai adicionar os marcadores de debug (remova para produção)
    }
  });

  gsap.fromTo(bx2, {
    opacity: 1
  }, {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: container2,  // Define o container que ativa o ScrollTrigger
      start: "top center",   // A animação começa quando o topo do container2 atinge o centro da tela
      end: "bottom center",  // A animação termina quando o fundo do container2 atinge o centro da tela
      scrub: 1,              // Isso vai fazer a animação ser sincronizada com o scroll
      markers: false          // Isso vai adicionar os marcadores de debug (remova para produção)
    }
  });

  gsap.fromTo(bx3, {
    opacity: 0,
    x: -430
  }, {
    x: 50,
    opacity: 2,
    duration: 2,
    
    scrollTrigger: {
      trigger: container2,  // Define o container que ativa o ScrollTrigger
      start: "top center",   // A animação começa quando o topo do container2 atinge o centro da tela
      end: "top 30%",  // A animação termina quando o fundo do container2 atinge o centro da tela
      scrub: 1,              // Isso vai fazer a animação ser sincronizada com o scroll
      markers: false         // Isso vai adicionar os marcadores de debug (remova para produção)
    }
  });
});


window.addEventListener('load', () => {
  const text = document.querySelector('.typing-effect');
  const content = text.innerHTML.split('<br>'); // Divide o conteúdo com base nas quebras de linha

  text.innerHTML = ''; // Limpa o conteúdo para re-adicionar com a animação

  content.forEach((line, lineIndex) => {
    const lineWrapper = document.createElement('div'); // Cria um contêiner para cada linha
    lineWrapper.classList.add('line-wrapper');
    text.appendChild(lineWrapper);

    const words = line.split(' '); // Divide a linha em palavras

    words.forEach((word, wordIndex) => {
      const span = document.createElement('span');
      span.textContent = word + ' '; // Adiciona a palavra com espaço
      lineWrapper.appendChild(span);

      gsap.fromTo(span, {
        opacity: 0,
        x: -20
      }, {
        opacity: 1,
        x: 0,
        delay: (lineIndex * words.length + wordIndex) * 0.1, // Delay ajustado
        duration: 0.2,
        ease: "power1.out"
      });
    });

    if (lineIndex < content.length - 1) {
      const breakElement = document.createElement('br');
      lineWrapper.appendChild(breakElement); // Adiciona a quebra de linha após cada linha
    }
  });
});


AOS.refresh();

