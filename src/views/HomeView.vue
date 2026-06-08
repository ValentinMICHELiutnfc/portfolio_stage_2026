<template>
  <div class="home-view animate-fade-in">
    
    <!-- Partie 2 : Introduction de la page d'accueil avec illustration -->
    <section class="section glass-panel stagger-1 intro-grid">
      <div class="intro-text-wrapper">
        <h2>Introduction</h2>
        <p>
          Bienvenue sur mon site portfolio de deuxième année de BUT Informatique. 
          Ce site présente les compétences et savoir-faire que j'ai développés 
          durant mon stage de fin d'année. Vous y trouverez mes réalisations techniques, 
          mon suivi de projet ainsi que mon intégration au sein de l'organisme d'accueil, 
          avec des traces concrètes issues de mon travail.
        </p>
      </div>
      <div class="intro-image-wrapper">
        <img src="/home_illustration.png" alt="Illustration Unified Champions Setup" class="intro-image" />
      </div>
    </section>

    <!-- Partie 3 : Description du Contexte Entreprise -->
    <section class="section glass-panel stagger-2">
      <h2>Contexte Entreprise</h2>
      <p>
        J'ai effectué mon stage au sein de l'Université de Franche-Comté, dans le 
        département MMI (Métiers du Multimédia et de l'Internet) de Montbéliard, pour le compte de leur salle e-sport.
      </p>
      <p>
        Mon maître de stage était Pascal Chatonnay, chef du département MMI et 
        responsable de la salle e-sport. Nous avons collaboré tout au long du projet 
        pour définir les besoins et valider les étapes de développement.
      </p>
      <div class="highlight-box">
        <h3>Moyens de travail</h3>
        <p>
          Pour ce projet, j'ai utilisé les ordinateurs de la salle e-sport. 
          Le code source est versionné avec Git et hébergé sur <a href="https://github.com/ValentinMICHELiutnfc" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          J'ai également collaboré avec le CRI (Centre de Ressources Informatiques) de l'IUT pour la configuration du réseau.
        </p>
      </div>
    </section>

    <!-- Partie 4 : Description du Contexte Sujet -->
    <section class="section glass-panel stagger-3">
      <h2>Contexte Sujet</h2>
      <div class="grid-content">
        <div class="card">
          <div class="card-icon">🔍</div>
          <h3>L'existant et ses problématiques</h3>
          <p>
            Avant mon arrivée, il n'existait pas d'application pour gérer la salle e-sport ou enregistrer le suivi 
            physique et les performances des joueurs. Les responsables effectuaient ces tâches manuellement. 
            Cependant, l'association possédait déjà un site promotionnel (<a href="https://unifiedchampions.fr/" target="_blank" rel="noopener noreferrer">unifiedchampions.fr</a>) avec une identité forte.
          </p>
        </div>
        
        <div class="card">
          <div class="card-icon">🎨</div>
          <h3>Le sujet et l'inspiration</h3>
          <p>
            Ma mission a consisté à développer de bout en bout l'application de gestion <strong>Unified Champions</strong>. 
            Pour l'interface utilisateur, je me suis fortement inspiré de la charte graphique et de l'esthétique du site existant afin d'assurer 
            une cohérence visuelle parfaite avec l'image du club.
          </p>
        </div>

        <div class="card full-width">
          <div class="card-icon">🚀</div>
          <h3>Objectifs</h3>
          <p>
            Les objectifs principaux comprenaient l'automatisation des pointages par scan, la centralisation des données de jeu via l'API Riot Games, 
            la sécurisation des connexions avec les comptes institutionnels de l'université, et l'intégration de la solution sur le réseau local de l'IUT.
          </p>
        </div>
      </div>
    </section>

    <!-- Partie 5 : Synthèse des Savoir-faire Généraux -->
    <section class="section glass-panel stagger-4">
      <h2>Synthèse des Savoir-faire Généraux</h2>
      <p class="section-intro">
        Le développement de l'application Unified Champions a mobilisé plusieurs compétences professionnelles (cliquez sur une compétence pour accéder à ses détails) :
      </p>
      
      <ul class="skills-list">
        <li>
          <router-link to="/technique" class="skill-link">
            <span class="skill-badge tech">Volet Technique</span>
            <strong>Développement Web Full-Stack :</strong> Création de l'interface réactive en Vue.js et du serveur en Express.js.
          </router-link>
        </li>
        <li>
          <router-link to="/technique" class="skill-link">
            <span class="skill-badge tech">Volet Technique</span>
            <strong>Gestion de Données :</strong> Conception et administration d'une base de données MySQL.
          </router-link>
        </li>
        <li>
          <router-link to="/suivi-projet" class="skill-link">
            <span class="skill-badge project">Volet Suivi de Projet</span>
            <strong>Suivi de Projet :</strong> Utilisation de Git/GitHub pour le versionnement, Miro pour la planification et réunions régulières de suivi.
          </router-link>
        </li>
        <li>
          <router-link to="/integration" class="skill-link">
            <span class="skill-badge collab">Volet Intégration en Entreprise</span>
            <strong>Intégration et réseau :</strong> Collaboration avec le CRI de l'IUT pour le déploiement de l'application sur le réseau local.
          </router-link>
        </li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Grille d'introduction avec illustration */
.intro-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

@media (max-width: 768px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
}

.intro-image-wrapper {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--border-light);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.intro-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.intro-image:hover {
  transform: scale(1.02);
}

.section h2 {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.section h2::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), transparent);
  border-radius: 2px;
}

.section p {
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.highlight-box {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(173, 70, 242, 0.05);
  border-left: 4px solid var(--primary);
  border-radius: 0 8px 8px 0;
}

.highlight-box h3 {
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.grid-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--accent-cyan);
  box-shadow: 0 4px 20px rgba(0, 242, 254, 0.1);
}

.card.full-width {
  grid-column: 1 / -1;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

.section-intro {
  margin-bottom: 2rem;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skills-list li {
  background: rgba(0, 0, 0, 0.25);
  padding: 0;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  line-height: 1.7;
  transition: all 0.3s ease;
}

.skills-list li:hover {
  border-color: rgba(173, 70, 242, 0.4);
  background: rgba(173, 70, 242, 0.03);
  transform: translateX(6px);
  box-shadow: 0 4px 20px rgba(173, 70, 242, 0.1);
}

.skill-link {
  display: block;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
}

.skill-link:hover {
  text-shadow: none;
  color: inherit;
}

.skill-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.03em;
}

.skill-badge.tech {
  background: rgba(0, 242, 254, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 242, 254, 0.3);
}

.skill-badge.project {
  background: rgba(255, 42, 133, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(255, 42, 133, 0.3);
}

.skill-badge.collab {
  background: rgba(173, 70, 242, 0.15);
  color: #c084fc;
  border: 1px solid rgba(173, 70, 242, 0.3);
}

strong {
  color: #fff;
}
</style>
