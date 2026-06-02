<template>
  <div class="portfolio">

    <!-- HERO -->
    <section id="home" class="hero">
      <div class="hero-glow hero-glow--purple"></div>
      <div class="hero-glow hero-glow--coral"></div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Disponible pour des missions
          </div>
          <h1 class="hero-name">
            Bonjour, je suis<br>
            <span class="gradient-text">Skander</span>
          </h1>
          <p class="hero-title">Développeur Full Stack &amp; DevOps</p>
          <p class="hero-desc">
            Passionné par la création d'applications web modernes et
            performantes. Du frontend élégant au backend robuste.
          </p>
          <div class="hero-buttons">
            <a @click="scrollTo('projects')" class="btn-primary">Voir mes projets</a>
            <a @click="scrollTo('contact')" class="btn-secondary">Me contacter</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-ring">
            <div class="avatar-inner">
              <img src="@/assets/profile.jpg" alt="Skander" class="profile-img" />
            </div>
          </div>
          <div class="hero-card hero-card--top">
            <span class="card-dot"></span> Vue.js · TypeScript
          </div>
          <div class="hero-card hero-card--bottom">
            <span class="card-dot card-dot--coral"></span> Node.js · Docker
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item">
          <span class="stat-number">3+</span>
          <span class="stat-label">Années d'expérience</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">12+</span>
          <span class="stat-label">Projets réalisés</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">5+</span>
          <span class="stat-label">Technologies maîtrisées</span>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section id="about" class="about">
      <div class="container">
        <div class="section-eyebrow">À propos</div>
        <h2 class="section-title">Qui suis-je ?</h2>

        <div class="about-grid">
          <div class="about-bio">
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
            <a href="/cv.pdf" class="btn-primary btn-cv" target="_blank">
              📄 Télécharger mon CV
            </a>
          </div>

          <div class="about-skills">
            <div class="skills-group">
              <div class="skills-group-label">
                <span class="label-line label-line--purple"></span>
                Frontend
              </div>
              <div class="skills-tags">
                <span class="tag tag--purple">Vue.js</span>
                <span class="tag tag--purple">HTML</span>
                <span class="tag tag--purple">CSS</span>
                <span class="tag tag--purple">TypeScript</span>
              </div>
            </div>

            <div class="skills-group">
              <div class="skills-group-label">
                <span class="label-line label-line--coral"></span>
                Backend
              </div>
              <div class="skills-tags">
                <span class="tag tag--coral">Node.js</span>
                <span class="tag tag--coral">Express</span>
                <span class="tag tag--coral">PostgreSQL</span>
                <span class="tag tag--coral">MongoDB</span>
              </div>
            </div>

            <div class="skills-group">
              <div class="skills-group-label">
                <span class="label-line label-line--slate"></span>
                DevOps
              </div>
              <div class="skills-tags">
                <span class="tag tag--slate">Docker</span>
                <span class="tag tag--slate">Git</span>
                <span class="tag tag--slate">CI/CD</span>
                <span class="tag tag--slate">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-eyebrow">Projets</div>
        <h2 class="section-title">Ce que j'ai réalisé</h2>

        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.title"
            class="project-card"
          >
            <div class="project-icon" :class="project.iconBg">
              <span>{{ project.icon }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-footer">
              <div class="project-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="project-tag"
                >{{ tag }}</span>
              </div>
              <a :href="project.link" class="project-link" target="_blank">
                Voir →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-eyebrow">Contact</div>
        <h2 class="section-title">Travaillons ensemble</h2>

        <div class="contact-grid">
          <div class="contact-info">
            <p class="contact-intro">
              Disponible pour des freelances, collaborations ou un poste
              à temps plein. N'hésitez pas à me contacter.
            </p>

            <div class="contact-links">
              <a href="mailto:skander@email.com" class="contact-item">
                <span class="contact-icon">📧</span>
                <span>skander@email.com</span>
              </a>
              <a href="https://linkedin.com/in/skander" target="_blank" class="contact-item">
                <span class="contact-icon">💼</span>
                <span>linkedin.com/in/skander</span>
              </a>
              <a href="https://github.com/skander" target="_blank" class="contact-item">
                <span class="contact-icon">🐙</span>
                <span>github.com/skander</span>
              </a>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <input
                v-model="form.name"
                type="text"
                placeholder="Votre nom"
                required
              />
              <input
                v-model="form.email"
                type="email"
                placeholder="Votre email"
                required
              />
            </div>
            <textarea
              v-model="form.message"
              placeholder="Votre message..."
              rows="5"
              required
            ></textarea>
            <button type="submit" class="btn-primary">
              Envoyer le message →
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <span class="footer-copy">© 2025 Skander — Développeur Full Stack</span>
        <div class="footer-links">
          <a href="https://github.com/skander" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/skander" target="_blank">LinkedIn</a>
          <a href="/cv.pdf" target="_blank">CV</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const projects = [
  {
    icon: '🗂️',
    iconBg: 'icon-purple',
    title: 'Portfolio Vue.js',
    desc: 'Portfolio personnel développé avec Vue 3, TypeScript et Vite.',
    tags: ['Vue.js', 'TypeScript', 'CSS'],
    link: '#',
  },
  {
    icon: '⚙️',
    iconBg: 'icon-coral',
    title: 'Projet 2',
    desc: 'Description de ton deuxième projet ici.',
    tags: ['Node.js', 'MongoDB'],
    link: '#',
  },
  {
    icon: '🐳',
    iconBg: 'icon-slate',
    title: 'Projet 3',
    desc: 'Description de ton troisième projet ici.',
    tags: ['Docker', 'Linux'],
    link: '#',
  },
]

const form = reactive({ name: '', email: '', message: '' })

function submitForm() {
  alert(`Merci ${form.name} ! Je te répondrai bientôt.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
/* ===== VARIABLES ===== */
:root {
  --accent: #7F77DD;
  --accent-dark: #534AB7;
  --accent2: #D85A30;
  --bg: #0e0e1a;
  --bg2: #13131f;
  --bg3: #1a1a2e;
  --text: #f0eefc;
  --muted: #9896b0;
  --border: rgba(42, 42, 69, 0.8);
}

/* ===== RESET / GLOBAL ===== */
.portfolio {
  background: #0e0e1a;
  color: #f0eefc;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* ===== CONTAINER — utilisé par toutes les sections sauf hero ===== */
/* max-width: 1100px + padding horizontal 3rem de chaque côté          */
/* Toutes les sections utilisent ce même container pour être alignées  */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #7F77DD 30%, #D85A30);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== HERO ===== */
/* La section hero occupe toute la largeur pour les glows de fond      */
/* Le contenu est centré via .hero-inner qui reprend les mêmes règles  */
/* que .container (max-width 1100px + padding 3rem)                    */
.hero {
  position: relative;
  overflow: hidden;
  background: #0e0e1a;
  padding: 5rem 0 4rem;
}

/* .hero-inner = même logique que .container                           */
/* C'est ce div qui aligne le hero avec les autres sections            */
.hero-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.hero-glow--purple {
  top: -80px;
  right: 10%;
  width: 500px;
  height: 500px;
  background: rgba(127, 119, 221, 0.1);
}

.hero-glow--coral {
  bottom: -60px;
  left: 30%;
  width: 350px;
  height: 350px;
  background: rgba(216, 90, 48, 0.07);
}

.hero-content {
  flex: 1;
  z-index: 1;
  max-width: 520px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(127, 119, 221, 0.1);
  border: 0.5px solid rgba(127, 119, 221, 0.3);
  color: #AFA9EC;
  font-size: 0.82rem;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: #7F77DD;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

.hero-name {
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: 1.05rem;
  color: #9896b0;
  margin-bottom: 1rem;
  font-weight: 400;
}

.hero-desc {
  font-size: 0.95rem;
  color: #9896b0;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== PHOTO / AVATAR ===== */
/* .hero-visual est le conteneur relatif pour positionner les cards flottantes */
.hero-visual {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

/* Taille desktop : 420px                                              */
/* Changé à 280px sur tablette (≤900px) et 220px sur mobile (≤600px)  */
.avatar-ring {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7F77DD, #D85A30);
  padding: 4px;
}

.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #1a1a2e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Cards flottantes positionnées par rapport à .hero-visual            */
.hero-card {
  position: absolute;
  background: rgba(26, 26, 46, 0.92);
  border: 0.5px solid rgba(42, 42, 69, 0.8);
  backdrop-filter: blur(8px);
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.78rem;
  color: #9896b0;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.hero-card--top {
  top: 50px;
  right: -10px;
}

.hero-card--bottom {
  bottom: 60px;
  left: -10px;
}

.card-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7F77DD;
  flex-shrink: 0;
}

.card-dot--coral {
  background: #D85A30;
}

/* ===== STATS BAR ===== */
.stats-bar {
  background: #13131f;
  border-top: 0.5px solid rgba(42, 42, 69, 0.8);
  border-bottom: 0.5px solid rgba(42, 42, 69, 0.8);
}

/* .stats-inner reprend le même max-width/padding que .container       */
/* pour que les chiffres soient alignés avec le contenu des sections   */
.stats-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5rem;
  display: flex;
  align-items: center;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 1rem;
  gap: 4px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #AFA9EC;
}

.stat-label {
  font-size: 0.8rem;
  color: #9896b0;
}

.stat-divider {
  width: 0.5px;
  height: 40px;
  background: rgba(42, 42, 69, 0.8);
  flex-shrink: 0;
}

/* ===== SECTION COMMUNE ===== */
.section-eyebrow {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #D85A30;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

/* ===== ABOUT ===== */
.about {
  padding: 6rem 0;
  background: #13131f;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-bio p {
  color: #9896b0;
  line-height: 1.9;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.about-skills {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skills-group-label {
  font-size: 0.78rem;
  color: #9896b0;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.label-line {
  display: inline-block;
  width: 16px;
  height: 1.5px;
}

.label-line--purple { background: #7F77DD; }
.label-line--coral  { background: #D85A30; }
.label-line--slate  { background: #888780; }

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.82rem;
  border: 0.5px solid;
  transition: transform 0.2s;
}

.tag:hover { transform: translateY(-2px); }

.tag--purple {
  background: rgba(127, 119, 221, 0.1);
  border-color: rgba(127, 119, 221, 0.3);
  color: #AFA9EC;
}

.tag--coral {
  background: rgba(216, 90, 48, 0.1);
  border-color: rgba(216, 90, 48, 0.3);
  color: #F0997B;
}

.tag--slate {
  background: rgba(136, 135, 128, 0.1);
  border-color: rgba(136, 135, 128, 0.3);
  color: #B4B2A9;
}

/* ===== PROJECTS ===== */
.projects {
  padding: 6rem 0;
  background: #0e0e1a;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  background: #1a1a2e;
  border: 0.5px solid rgba(42, 42, 69, 0.8);
  border-radius: 14px;
  padding: 1.75rem;
  transition: transform 0.3s, border-color 0.3s;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(127, 119, 221, 0.5);
}

.project-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border: 0.5px solid;
}

.icon-purple { background: rgba(127, 119, 221, 0.12); border-color: rgba(127, 119, 221, 0.2); }
.icon-coral  { background: rgba(216, 90, 48, 0.12);  border-color: rgba(216, 90, 48, 0.2);  }
.icon-slate  { background: rgba(136, 135, 128, 0.12); border-color: rgba(136, 135, 128, 0.2); }

.project-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 0.875rem;
  color: #9896b0;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }

.project-tag {
  font-size: 0.72rem;
  color: #AFA9EC;
  background: rgba(127, 119, 221, 0.08);
  padding: 2px 9px;
  border-radius: 20px;
  border: 0.5px solid rgba(127, 119, 221, 0.2);
}

.project-link {
  font-size: 0.82rem;
  color: #9896b0;
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}

.project-link:hover { color: #f0eefc; }

/* ===== CONTACT ===== */
.contact {
  padding: 6rem 0;
  background: #13131f;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 4rem;
  align-items: start;
}

.contact-intro {
  font-size: 0.95rem;
  color: #9896b0;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-links { display: flex; flex-direction: column; gap: 0.8rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.8rem 1rem;
  background: #1a1a2e;
  border: 0.5px solid rgba(42, 42, 69, 0.8);
  border-radius: 10px;
  color: #9896b0;
  text-decoration: none;
  font-size: 0.875rem;
  transition: border-color 0.2s, color 0.2s;
}

.contact-item:hover {
  border-color: rgba(127, 119, 221, 0.4);
  color: #f0eefc;
}

.contact-icon { font-size: 1rem; flex-shrink: 0; }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  background: #1a1a2e;
  border: 0.5px solid rgba(42, 42, 69, 0.8);
  color: #f0eefc;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  resize: vertical;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder { color: #5c5a70; }

.contact-form input:focus,
.contact-form textarea:focus { border-color: rgba(127, 119, 221, 0.5); }

/* ===== BOUTONS ===== */
.btn-primary {
  display: inline-flex;
  align-items: center;
  background: #7F77DD;
  color: #fff;
  padding: 0.75rem 1.75rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover { background: #534AB7; transform: translateY(-2px); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  border: 0.5px solid #7F77DD;
  color: #7F77DD;
  padding: 0.75rem 1.75rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;
}

.btn-secondary:hover { background: rgba(127, 119, 221, 0.1); transform: translateY(-2px); }

.btn-cv { margin-top: 1.5rem; }

/* ===== FOOTER ===== */
.footer {
  background: #0e0e1a;
  border-top: 0.5px solid rgba(42, 42, 69, 0.8);
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copy { font-size: 0.8rem; color: #9896b0; }

.footer-links { display: flex; gap: 1.5rem; }

.footer-links a {
  font-size: 0.8rem;
  color: #9896b0;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover { color: #f0eefc; }

/* =====================================================
   RESPONSIVE
   3 breakpoints :
   - Desktop  : > 900px   (styles par défaut ci-dessus)
   - Tablette : ≤ 900px   (grille 2 colonnes pour projets,
                            avatar 280px, hero en colonne)
   - Mobile   : ≤ 600px   (1 colonne partout, avatar 220px)
   ===================================================== */

/* --- TABLETTE : écrans entre 601px et 900px --- */
@media (max-width: 900px) {

  /* Hero : photo passe au-dessus du texte                             */
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0 2rem;
  }

  .hero {
    padding: 3rem 0;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-buttons { justify-content: center; }
  .hero-desc    { max-width: 100%; }

  /* Avatar : 280px sur tablette (desktop = 420px)                    */
  .avatar-ring {
    width: 280px;
    height: 280px;
  }

  /* Cards flottantes repositionnées pour le plus petit avatar         */
  .hero-card--top    { top: 15px;    right: 0; font-size: 0.72rem; }
  .hero-card--bottom { bottom: 15px; left: 0;  font-size: 0.72rem; }

  /* Grilles : 2 colonnes sur tablette                                 */
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* About et Contact : 1 colonne sur tablette                        */
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  /* Formulaire : 1 colonne (nom + email l'un sous l'autre)           */
  .form-row { grid-template-columns: 1fr; }

  /* Stats : 2 par ligne sur tablette                                  */
  .stats-inner  { flex-wrap: wrap; }
  .stat-item    { flex: 0 0 50%; }
  .stat-divider { display: none; }

  /* Container général sur tablette                                    */
  .container    { padding: 0 2rem; }
  .stats-inner  { padding: 0 2rem; }

  /* Glows supprimés sur tablette (performances)                       */
  .hero-glow--purple,
  .hero-glow--coral { display: none; }
}

/* --- MOBILE : écrans ≤ 600px --- */
@media (max-width: 600px) {

  .about,
  .projects,
  .contact {
    padding: 4rem 0;
  }

  /* Titre du hero plus petit sur mobile                               */
  .hero-name { font-size: 2.2rem; }

  /* Avatar : 220px sur mobile (tablette = 280px)                     */
  .avatar-ring {
    width: 220px;
    height: 220px;
  }

  /* Cards flottantes : plus petites et sans padding débordant         */
  .hero-card--top,
  .hero-card--bottom {
    font-size: 0.68rem;
    padding: 6px 10px;
  }

  /* Projets : 1 seule colonne sur mobile                              */
  .projects-grid { grid-template-columns: 1fr; }

  /* Stats : 1 par ligne sur mobile                                    */
  .stat-item { flex: 0 0 100%; }

  /* Footer : empilé sur mobile                                        */
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1.5rem;
  }
}
</style>