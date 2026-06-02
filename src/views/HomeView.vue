<template>
  <div>

    <!-- Section Home -->
    <section id="home" class="hero">
      <div class="hero-content">
        <p class="hero-greeting">Bonjour, je suis</p>
        <h1 class="hero-name">Skander</h1>
        <h2 class="hero-title">Développeur Full Stack</h2>
        <p class="hero-description">
          Passionné par le développement web et DevOps.
          Je crée des applications modernes et performantes.
        </p>
        <div class="hero-buttons">
          <a @click="scrollTo('projects')" class="btn-primary">Voir mes projets</a>
          <a @click="scrollTo('contact')" class="btn-secondary">Me contacter</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/profile.jpg" alt="Skander" class="profile-img" />
      </div>
    </section>

    <!-- Section About -->
    <section id="about" class="about">
      <div class="section-header">
        <h2>À <span>Propos</span></h2>
        <p class="subtitle">Qui suis-je ?</p>
      </div>
      <div class="about-container">
        <div class="about-bio">
          <h3>Bonjour ! Je suis Skander 👋</h3>
          <p>
            Développeur Full Stack passionné basé en Tunisie.
            J'aime créer des applications web modernes, performantes
            et bien conçues de A à Z.
          </p>
          <p>
            Je travaille avec Vue.js, Node.js, et les outils DevOps
            comme Docker et CI/CD. Toujours en train d'apprendre
            et de me perfectionner.
          </p>
          <a href="/cv.pdf" class="btn-cv" target="_blank">📄 Télécharger mon CV</a>
        </div>
        <div class="about-skills">
          <h3>Mes Compétences</h3>
          <div class="skills-category">
            <h4>🎨 Frontend</h4>
            <div class="skills-list">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
              <span class="skill-tag">TypeScript</span>
            </div>
          </div>
          <div class="skills-category">
            <h4>⚙️ Backend</h4>
            <div class="skills-list">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
            </div>
          </div>
          <div class="skills-category">
            <h4>🚀 DevOps</h4>
            <div class="skills-list">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Projects -->
    <section id="projects" class="projects">
      <div class="section-header">
        <h2>Mes <span>Projets</span></h2>
        <p class="subtitle">Ce que j'ai réalisé</p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Portfolio Vue.js</h3>
          <p>Portfolio personnel développé avec Vue 3, TypeScript et Vite.</p>
          <div class="project-tags">
            <span>Vue.js</span><span>TypeScript</span><span>CSS</span>
          </div>
          <a href="#" class="project-link">Voir le projet →</a>
        </div>
        <div class="project-card">
          <h3>Projet 2</h3>
          <p>Description de ton deuxième projet ici.</p>
          <div class="project-tags">
            <span>Node.js</span><span>MongoDB</span>
          </div>
          <a href="#" class="project-link">Voir le projet →</a>
        </div>
        <div class="project-card">
          <h3>Projet 3</h3>
          <p>Description de ton troisième projet ici.</p>
          <div class="project-tags">
            <span>Docker</span><span>Linux</span>
          </div>
          <a href="#" class="project-link">Voir le projet →</a>
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="contact">
      <div class="section-header">
        <h2>Me <span>Contacter</span></h2>
        <p class="subtitle">Travaillons ensemble !</p>
      </div>
      <div class="contact-container">
        <div class="contact-info">
          <p>📧 <a href="mailto:skander@email.com">skander@email.com</a></p>
          <p>💼 <a href="https://linkedin.com/in/skander" target="_blank">LinkedIn</a></p>
          <p>🐙 <a href="https://github.com/skander" target="_blank">GitHub</a></p>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
          <input v-model="form.name" type="text" placeholder="Votre nom" required />
          <input v-model="form.email" type="email" placeholder="Votre email" required />
          <textarea v-model="form.message" placeholder="Votre message" rows="5" required></textarea>
          <button type="submit" class="btn-primary">Envoyer le message</button>
        </form>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert(`Merci ${form.name} ! Je te répondrai bientôt.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 6rem;
  gap: 4rem;
}

.hero-content { flex: 1; }

.profile-img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #42b883;
  box-shadow: 0 0 40px rgba(66, 184, 131, 0.4);
}

.hero-greeting { color: #42b883; font-size: 1.2rem; margin-bottom: 0.5rem; }
.hero-name { font-size: 4rem; font-weight: bold; color: #fff; margin-bottom: 0.5rem; }
.hero-title { font-size: 1.8rem; color: #42b883; margin-bottom: 1.5rem; }
.hero-description { font-size: 1.1rem; color: #a0a0b0; line-height: 1.8; margin-bottom: 2rem; }

.hero-buttons { display: flex; gap: 1rem; }

/* ===== SECTIONS COMMUNES ===== */
.about, .projects, .contact {
  padding: 6rem;
  min-height: 100vh;
}

.about { background-color: #111125; }
.projects { background-color: #0f0f1a; }
.contact { background-color: #111125; }

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}

.section-header h2 span { color: #42b883; }
.subtitle { color: #a0a0b0; margin-top: 0.5rem; }

/* ===== ABOUT ===== */
.about-container { display: flex; gap: 4rem; }
.about-bio { flex: 1; }
.about-bio h3 { font-size: 1.5rem; color: #fff; margin-bottom: 1rem; }
.about-bio p { color: #a0a0b0; line-height: 1.8; margin-bottom: 1rem; }

.about-skills { flex: 1; }
.about-skills h3 { font-size: 1.5rem; color: #fff; margin-bottom: 1rem; }
.skills-category { margin-bottom: 1.5rem; }
.skills-category h4 { color: #42b883; margin-bottom: 0.8rem; }
.skills-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.skill-tag {
  background-color: #1a1a2e;
  color: #fff;
  border: 1px solid #42b883;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.skill-tag:hover { background-color: #42b883; }

/* ===== PROJECTS ===== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-card {
  background-color: #1a1a2e;
  border: 1px solid #2a2a4a;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s, border-color 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #42b883;
}

.project-card h3 { color: #fff; font-size: 1.3rem; margin-bottom: 0.8rem; }
.project-card p { color: #a0a0b0; line-height: 1.6; margin-bottom: 1rem; }

.project-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
.project-tags span {
  background-color: rgba(66, 184, 131, 0.1);
  color: #42b883;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.project-link { color: #42b883; text-decoration: none; font-weight: bold; }
.project-link:hover { text-decoration: underline; }

/* ===== CONTACT ===== */
.contact-container { display: flex; gap: 4rem; align-items: flex-start; }

.contact-info { flex: 1; }
.contact-info p { margin-bottom: 1rem; font-size: 1.1rem; }
.contact-info a { color: #42b883; text-decoration: none; }
.contact-info a:hover { text-decoration: underline; }

.contact-form { flex: 2; display: flex; flex-direction: column; gap: 1rem; }

.contact-form input,
.contact-form textarea {
  background-color: #1a1a2e;
  border: 1px solid #2a2a4a;
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #42b883;
}

/* ===== BOUTONS ===== */
.btn-primary {
  background-color: #42b883;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-primary:hover { background-color: #33a06f; }

.btn-secondary {
  border: 2px solid #42b883;
  color: #42b883;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover { background-color: #42b883; color: #fff; }

.btn-cv {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #42b883;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-cv:hover { background-color: #33a06f; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero, .about-container, .contact-container {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }

  .projects-grid { grid-template-columns: 1fr; }
  .about, .projects, .contact { padding: 3rem 1.5rem; }
  .hero-name { font-size: 2.5rem; }
  .profile-img { width: 250px; height: 250px; }
  .hero-buttons { justify-content: center; }
}
</style>