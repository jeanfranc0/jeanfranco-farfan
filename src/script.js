const translations = {
  es: {
      "nav-bio": "Bio", "nav-edu": "Educación", "nav-proj": "Proyectos", "nav-contact": "Contacto",
      "hero-tagline": "Investigador Postdoctoral @ UNICAMP & Desarrollador @ Samsung SiDi",
      "btn-projects": "Ver Proyectos", "about-title": "Sobre mí",
      "about-text": "Investigador postdoctoral en UNICAMP (Shell). Desarrollador de frameworks de ML para interpretación sísmica 3D/4D. Desarrollador en Samsung SiDi para Bixby.",
      "proj-title": "Proyectos Destacados", "awards-title": "Premios",
      "proj1-h": "Interpretación Sísmica 3D/4D", "proj1-p": "Detección de dinámica de reservorios y estimación de confianza.",
      "proj2-h": "Entrenamiento de Modelos TTS", "proj2-p": "Ajuste de hiperparámetros para reducir voz robótica en Samsung.",
      "award1": "<strong>2021:</strong> Beca de Investigación Shell Oil Company.",
      "award2": "<strong>2018:</strong> 1er Puesto AgroHack Hackathon.",
      "contact-title": "¡Hola! ¿Conversamos? ✨"
  },
  en: {
      "nav-bio": "Bio", "nav-edu": "Education", "nav-proj": "Projects", "nav-contact": "Contact",
      "hero-tagline": "Postdoctoral Researcher @ UNICAMP & Software Developer @ Samsung SiDi",
      "btn-projects": "View Projects", "about-title": "About Me",
      "about-text": "Postdoctoral Researcher at UNICAMP (Shell-sponsored). I develop ML-based frameworks for automated interpretation of 3D/4D seismic data. Parallelly, I work at Samsung SiDi.",
      "proj-title": "Featured Projects", "awards-title": "Awards",
      "proj1-h": "3D/4D Seismic Interpretation", "proj1-p": "Detection of reservoir dynamics and confidence estimation.",
      "proj2-h": "TTS Model Training", "proj2-p": "Hyperparameter tuning to reduce robotic voice at Samsung.",
      "award1": "<strong>2021:</strong> Shell Oil Company Research Scholarship.",
      "award2": "<strong>2018:</strong> 1st Place AgroHack Hackathon.",
      "contact-title": "Let's Talk! ✨"
  },
  pt: {
      "nav-bio": "Bio", "nav-edu": "Educação", "nav-proj": "Projetos", "nav-contact": "Contato",
      "hero-tagline": "Pesquisador de Pós-Doutorado @ UNICAMP & Desenvolvedor @ Samsung SiDi",
      "btn-projects": "Ver Projetos", "about-title": "Sobre mim",
      "about-text": "Pesquisador de pós-doutorado na UNICAMP (Shell). Desenvolvo frameworks de ML para interpretação sísmica 3D/4D. Desenvolvedor na Samsung SiDi para Bixby.",
      "proj-title": "Projetos em Destaque", "awards-title": "Prêmios",
      "proj1-h": "Interpretação Sísmica 3D/4D", "proj1-p": "Detecção de dinâmica de reservatórios e estimativa de confiança.",
      "proj2-h": "Treinamento de Modelos TTS", "proj2-p": "Ajuste de hiperparâmetros para reduzir voz robótica na Samsung.",
      "award1": "<strong>2021:</strong> Bolsa de Pesquisa Shell Oil Company.",
      "award2": "<strong>2018:</strong> 1º Lugar AgroHack Hackathon.",
      "contact-title": "Vamos Conversar! ✨"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang][key]) {
          el.innerHTML = translations[lang][key]; // innerHTML permite etiquetas <strong>
      }
  });
}