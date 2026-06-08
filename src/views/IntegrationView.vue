<template>
  <div class="integration-view animate-fade-in">
    
    <!-- En-tête de la page principale -->
    <header class="page-header glass-panel stagger-1">
      <h2>Intégration en Entreprise</h2>
      <p class="intro-text">
        Cette section présente ma collaboration au sein du département MMI de l'Université de Franche-Comté 
        et mes démarches techniques auprès du CRI (Centre de Ressources Informatiques) de l'IUT. 
        Sélectionnez une sous-page ci-dessous pour découvrir le descriptif de mes démarches réseau ou mon bilan d'intégration.
      </p>
    </header>

    <!-- Grille de navigation des sous-pages (si aucune sous-page n'est active) -->
    <transition name="fade" mode="out-in">
      <div v-if="!activeSubpage" class="subpage-grid stagger-2">
        
        <div class="subpage-card glass-panel" @click="activeSubpage = 'trace'">
          <div class="card-tag collab">Description & Trace</div>
          <h3>1. Collaboration Inter-services et Déploiement Réseau</h3>
          <p>
            Analyse de la demande d'ouverture de ports et de configuration du réseau local effectuée par le biais d'un ticket GLPI.
          </p>
          <div class="card-skills">
            <span class="skill-badge collab">GLPI</span>
            <span class="skill-badge collab">CRI Support</span>
            <span class="skill-badge collab">Réseau IUT</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'bilan'">
          <div class="card-tag collab">Bilan & Auto-évaluation</div>
          <h3>Bilan : Collaboration Inter-services</h3>
          <p>
            Analyse des démarches de négociation et d'explication des contraintes techniques avec les équipes système universitaires.
          </p>
          <div class="card-skills">
            <span class="skill-badge collab">Intégration</span>
            <span class="skill-badge collab">Communication</span>
          </div>
          <span class="read-more">Consulter le bilan →</span>
        </div>

      </div>

      <!-- Contenu de la sous-page active -->
      <div v-else class="subpage-content">
        <button class="back-btn" @click="activeSubpage = null">← Retour aux sous-pages</button>
        
        <!-- Sous-page : Trace -->
        <div v-if="activeSubpage === 'trace'" class="glass-panel animate-fade-in">
          <h2>1. Collaboration Inter-services et Déploiement Réseau</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge collab">Collaborer au sein d'une équipe universitaire (tuteur, enseignants)</li>
              <li class="skill-badge collab">Négocier et adapter des contraintes techniques avec le service réseau (CRI)</li>
              <li class="skill-badge collab">Déployer et intégrer une application sur un portail captif</li>
            </ul>
          </div>

          <!-- Trace n°3 -->
          <div class="trace-container">
            <div class="trace-image-wrapper">
              <img src="/Screenshot_ticket_CRI.png" alt="Trace 3 : Ticket GLPI au CRI" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 3 :</strong> Capture d'écran du ticket d'assistance réseau (GLPI) envoyé aux administrateurs du CRI de l'IUT pour l'ouverture des flux de l'application.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              La trace n°3 montre le ticket d'assistance officiel (GLPI) que j'ai soumis au CRI (Centre de Ressources 
              Informatiques) de l'IUT. Ce document détaille ma demande de configuration réseau pour l'application 
              Unified Champions, spécifiant l'adresse IP et les requêtes nécessaires au bon fonctionnement de notre 
              serveur de base de données et de l'interface.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif des savoir-faire</h3>
            <p>
              L'intégration au sein de l'université a requis une collaboration directe avec le CRI. Mon maître de stage 
              Pascal Chatonnay m'a orienté vers eux. Pour l'intégration, j'ai rédigé et soumis ce ticket décrivant nos 
              contraintes (redirection réseau pour le pointage des machines de la salle).
            </p>
            <p>
              Dans cette démarche, le savoir-faire réside dans la formulation claire et argumentée de besoins de développement 
              auprès d'un service réseau académique. Cela a permis d'obtenir l'ouverture de ports nécessaires et d'assurer 
              que l'application de pointage s'affiche à l'allumage des postes.
            </p>
          </div>
        </div>

        <!-- Sous-page : Bilan -->
        <div v-if="activeSubpage === 'bilan'" class="glass-panel animate-fade-in">
          <h2>Bilan : Collaboration Inter-services</h2>
          
          <div class="bilan-grid">
            <div class="bilan-card">
              <h3>Contexte d'apprentissage et d'utilisation</h3>
              <p>
                La configuration et les requêtes réseau sont vues en cours en situation de TP. Cependant, interagir avec 
                les équipes système d'un vrai réseau universitaire sécurisé était une première.
              </p>
              <p>
                La principale difficulté a été de s'adapter aux protocoles de communication de l'université (dépôt formel 
                de tickets d'assistance) et d'expliquer nos besoins techniques précis de manière concise afin que les 
                administrateurs du CRI valident et appliquent la redirection réseau demandée pour la salle e-sport.
              </p>
            </div>

            <div class="bilan-card">
            <h3>Auto-évaluation de ma progression</h3>
            <div class="level-comparison">
              <div class="level-box before">
                <span class="level-label">Avant le stage</span>
                <span class="level-title">Bases Académiques</span>
                <div class="level-bar"><div class="fill" style="width: 50%;"></div></div>
                <p class="level-desc">
                  Je savais expliquer le fonctionnement théorique d'un réseau local, mais je n'avais jamais communiqué de manière professionnelle avec un service d'infrastructure.
                </p>
              </div>
              <div class="level-box after">
                <span class="level-label">Après le stage</span>
                <span class="level-title">Niveau Autonome</span>
                <div class="level-bar"><div class="fill" style="width: 75%;"></div></div>
                <p class="level-desc">
                  Capable de formaliser des demandes réseau techniques claires (via ticket GLPI), de collaborer efficacement avec un service informatique tiers (CRI) et d'intégrer une solution dans un réseau local.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSubpage = ref(null)
</script>

<style scoped>
.integration-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.7;
}

.page-header h2 {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.page-header h2::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), transparent);
  border-radius: 2px;
}

/* Grille des sous-pages */
.subpage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.subpage-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.subpage-card:hover {
  transform: translateY(-6px);
  border-color: rgba(173, 70, 242, 0.4);
  box-shadow: 0 12px 40px rgba(173, 70, 242, 0.15);
}

.card-tag {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.card-tag.collab {
  background: rgba(173, 70, 242, 0.15);
  color: #c084fc;
  border: 1px solid rgba(173, 70, 242, 0.2);
}

.subpage-card h3 {
  font-size: 1.3rem;
  color: #fff;
  line-height: 1.3;
}

.subpage-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.read-more {
  font-size: 0.9rem;
  font-weight: 600;
  color: #c084fc;
  margin-top: 1rem;
}

/* Contenu sous-pages */
.back-btn {
  background: rgba(173, 70, 242, 0.1);
  border: 1px solid var(--border-light);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: var(--primary);
  box-shadow: 0 0 12px rgba(173, 70, 242, 0.4);
  transform: translateX(-4px);
}

.skills-highlight {
  margin: 1.5rem 0;
}

.skills-highlight h3 {
  font-size: 1.1rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.skills-badges {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-badge {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.03em;
}

.skill-badge.collab {
  background: rgba(173, 70, 242, 0.15);
  color: #c084fc;
  border: 1px solid rgba(173, 70, 242, 0.3);
}

.trace-container {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0 2rem 0;
}

.trace-image-wrapper {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1rem;
}

.trace-image {
  width: 100%;
  height: auto;
  display: block;
}

.trace-caption {
  font-size: 0.95rem;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.5;
}

.description-block {
  margin-bottom: 2rem;
}

.description-block h3 {
  font-size: 1.3rem;
  color: #c084fc;
  margin-bottom: 0.8rem;
}

.description-block p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.description-block code {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
  color: var(--accent-cyan);
}

.bilan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .bilan-grid {
    grid-template-columns: 1fr;
  }
}

.bilan-card h3 {
  font-size: 1.3rem;
  color: #c084fc;
  margin-bottom: 1.2rem;
}

.bilan-card p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.level-comparison {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.level-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 1.2rem;
}

.level-box.after {
  border-color: rgba(173, 70, 242, 0.4);
  background: rgba(173, 70, 242, 0.03);
}

.level-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
}

.level-title {
  display: block;
  font-size: 1.4rem;
  font-weight: 900;
  font-style: italic;
  font-family: 'Outfit', sans-serif;
  color: #fff;
  margin-bottom: 0.8rem;
}

.level-box.before .level-title {
  color: var(--text-muted);
}

.level-box.after .level-title {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(173, 70, 242, 0.3);
}

.level-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.level-bar .fill {
  height: 100%;
  border-radius: 3px;
}

.level-box.before .fill {
  background: var(--text-muted);
}

.level-box.after .fill {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.level-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-muted);
}

/* Transition de fondu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
