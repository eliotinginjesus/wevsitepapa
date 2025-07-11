// Tambahkan style animasi ke <head>
const style = document.createElement('style');
style.innerHTML = `
  .hidden-before-animation {
    opacity: 0;
  }

  .fade-in-up {
    animation: fadeInUp 2s ease-out forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Observer untuk men-trigger animasi saat elemen masuk viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      entry.target.classList.remove('hidden-before-animation');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Dapatkan semua elemen anak dari <section>
  const targets = document.querySelectorAll("section > *");

  // Tambahkan class hidden-before-animation dan amati
  targets.forEach(el => {
    el.classList.add("hidden-before-animation");
    observer.observe(el);
  });
});

