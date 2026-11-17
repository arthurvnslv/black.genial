/**
 * Black Genial 2026 - Scripts de Interatividade e Conversão
 */

import { CAMPAIGN_CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initFaqAccordion();
  initResultsCarousel();
  initSmoothScroll();
  initStickyMobileCta();
  initCheckoutHandlers();
});

/**
 * 1. Animações sutis ao rolar a página (Scroll Reveal)
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elementsToReveal.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elementsToReveal.forEach((el) => observer.observe(el));
}

/**
 * 2. FAQ Accordion Interativo e Acessível (Seção 08)
 */
function initFaqAccordion() {
  const faqToggles = document.querySelectorAll('.faq-toggle, .faq-trigger');

  faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const content = toggle.nextElementSibling || toggle.closest('.faq-item')?.querySelector('.faq-content');
      const icon = toggle.querySelector('.material-symbols-outlined, .faq-icon');

      // Opcional: fechar outros itens para manter visual limpo
      faqToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.setAttribute('aria-expanded', 'false');
          const otherContent = otherToggle.nextElementSibling || otherToggle.closest('.faq-item')?.querySelector('.faq-content');
          const otherIcon = otherToggle.querySelector('.material-symbols-outlined, .faq-icon');

          if (otherContent) {
            otherContent.classList.add('hidden');
            otherContent.style.maxHeight = '0px';
          }
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });

      // Alterna o estado do item atual
      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        if (content) {
          content.classList.add('hidden');
          content.style.maxHeight = '0px';
        }
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        if (content) {
          content.classList.remove('hidden');
          content.style.maxHeight = `${content.scrollHeight + 30}px`;
        }
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/**
 * 3. Carrossel de Resultados Reais (Seção 05)
 * Suporte a toque (touch/swipe no celular), teclado e botões anterior/próximo
 */
function initResultsCarousel() {
  const container = document.getElementById('carouselContainer') || document.getElementById('carousel-container');
  const track = document.getElementById('carouselTrack') || document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prevBtn') || document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('nextBtn') || document.getElementById('carousel-next');
  const counter = document.getElementById('carouselCounter') || document.getElementById('carousel-counter');

  if (!track) return;

  const cards = track.querySelectorAll('.carousel-slide');
  const totalCards = cards.length;
  let currentIndex = 0;

  function updateCounter() {
    if (counter) {
      counter.textContent = `${currentIndex + 1} de ${totalCards}`;
    }
  }

  function getCardWidth() {
    if (cards.length === 0) return 320;
    const firstCard = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    return firstCard.offsetWidth + gap;
  }

  function scrollToIndex(index) {
    if (index < 0) index = 0;
    if (index >= totalCards) index = totalCards - 1;
    currentIndex = index;

    const cardWidth = getCardWidth();
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    updateCounter();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex + 1);
    });
  }

  // Suporte a swipe por toque em dispositivos móveis
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        scrollToIndex(currentIndex + 1);
      } else {
        scrollToIndex(currentIndex - 1);
      }
    }
  }, { passive: true });

  updateCounter();
}

/**
 * 4. Rolagem Suave Personalizada (Smooth Scroll robusto com fallback animado)
 */
function smoothScrollTo(targetPosition, duration = 800) {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing function (easeInOutCubic) para rolagem natural e elegante
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function initSmoothScroll() {
  // Delegação global de cliques para capturar todo e qualquer link com hash
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Se for link de checkout (ex: data-checkout-plan), deixa o checkoutHandler agir se tiver URL
    if (link.hasAttribute('data-checkout-plan')) {
      return;
    }

    // Identifica se é uma âncora local
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const hash = href.slice(hashIndex);
    
    // Topo da página
    if (hash === '#' || hash === '#hero') {
      e.preventDefault();
      smoothScrollTo(0);
      return;
    }

    let targetEl = null;
    try {
      targetEl = document.querySelector(hash);
    } catch (err) {
      targetEl = document.getElementById(hash.replace('#', ''));
    }

    if (targetEl) {
      e.preventDefault();
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight + 16 : 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const targetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

      smoothScrollTo(targetPosition);

      if (history.pushState) {
        history.pushState(null, null, hash);
      }
    }
  });
}

/**
 * 5. Barra Inferior Mobile para Alta Conversão
 */
function initStickyMobileCta() {
  const stickyBar = document.getElementById('sticky-mobile-cta');
  const heroSection = document.getElementById('hero');

  if (!stickyBar || !heroSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Mostra a barra fixa quando o hero sair do campo de visão
      if (!entry.isIntersecting) {
        stickyBar.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
        stickyBar.classList.add('translate-y-0', 'opacity-100');
      } else {
        stickyBar.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
        stickyBar.classList.remove('translate-y-0', 'opacity-100');
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(heroSection);
}

/**
 * 6. Centralização de Cliques de Checkout
 */
function initCheckoutHandlers() {
  const checkoutButtons = document.querySelectorAll('[data-checkout-plan]');

  checkoutButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const planKey = btn.getAttribute('data-checkout-plan');
      const planConfig = CAMPAIGN_CONFIG.pricing.plans[planKey];

      if (!planConfig || !planConfig.checkoutUrl || planConfig.checkoutUrl === '#') {
        // Se o link oficial de checkout ainda não foi preenchido, rola suavemente até o plano
        const plansSection = document.getElementById('planos');
        if (plansSection) {
          e.preventDefault();
          const header = document.querySelector('header');
          const headerOffset = header ? header.offsetHeight + 16 : 80;
          const targetPosition = Math.max(0, plansSection.getBoundingClientRect().top + window.pageYOffset - headerOffset);
          smoothScrollTo(targetPosition);
        }
      } else {
        // Se houver URL oficial configurada, navega diretamente
        window.location.href = planConfig.checkoutUrl;
      }
    });
  });
}
