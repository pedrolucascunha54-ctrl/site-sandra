// Saúde Verde - Sandra Fitoterapeuta — interações do site

document.addEventListener('DOMContentLoaded', () => {

  // Ano atual no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header com sombra ao rolar
  const header = document.getElementById('header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Accordion do FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Animações de entrada ao rolar
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // Vídeos ambiente (fundo de seção, mídia em destaque e thumbnails de card)
  const allVideos = document.querySelectorAll('video');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;

  if (reducedMotion || saveData) {
    // Respeita a preferência do usuário: mantém apenas o poster (primeiro frame), sem reprodução.
    allVideos.forEach(video => {
      video.removeAttribute('autoplay');
      video.pause();
    });
  } else if ('IntersectionObserver' in window) {
    // Só reproduz vídeos quando a seção está visível — poupa CPU, bateria e dados.
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.2 });

    allVideos.forEach(video => videoObserver.observe(video));
  }

  // Wipe circular do vídeo da Sandra, guiado pelo scroll do Hero até a seção Sobre
  const aboutBg = document.querySelector('.about-bg');
  if (aboutBg && !reducedMotion) {
    const aboutSection = document.querySelector('.section-about');
    let ticking = false;

    const updateWipe = () => {
      ticking = false;
      const rect = aboutSection.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 quando o topo da seção está na base da tela, 1 quando alcança o topo da tela
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / vh));
      const radius = (progress * 78).toFixed(1);
      aboutBg.style.clipPath = `circle(${radius}% at 50% 45%)`;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateWipe);
      }
    }, { passive: true });
    window.addEventListener('resize', updateWipe);
    updateWipe();
  }
});
