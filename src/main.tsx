import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Advanced Interactions
const initializeAdvancedEffects = () => {
  // Scroll Progress Indicator
  const updateScrollProgress = () => {
    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
  };

  // Custom Cursor
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const updateCursor = (e: MouseEvent) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  };

  // Cursor hover effects
  const addCursorHover = () => {
    const hoverElements = document.querySelectorAll('a, button, .btn, .card, .event-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  };

  // Reveal on Scroll
  const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
  };

  // Stagger Children Animation
  const animateStaggerChildren = () => {
    const staggerContainers = document.querySelectorAll('.stagger-children');
    staggerContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
      if (containerTop < window.innerHeight - 100) {
        container.classList.add('animate');
      }
    });
  };

  // Parallax Effect
  const parallaxEffect = () => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(window.scrollY * speed);
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };

  // Event Listeners
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    revealOnScroll();
    animateStaggerChildren();
    parallaxEffect();
  });

  window.addEventListener('mousemove', updateCursor);
  window.addEventListener('load', () => {
    addCursorHover();
    revealOnScroll();
    animateStaggerChildren();
  });

  // Add scroll progress indicator
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);
};

// Initialize effects after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAdvancedEffects);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)