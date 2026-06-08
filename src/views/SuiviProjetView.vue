<template>
  <div class="suivi-projet-view animate-fade-in">
    
    <!-- En-tête de la page principale -->
    <header class="page-header glass-panel stagger-1">
      <h2>Suivi de Projet</h2>
      <p class="intro-text">
        Cette section présente la méthodologie et les outils de planification que j'ai mis en œuvre pour piloter le développement. 
        Sélectionnez une sous-page ci-dessous pour découvrir le suivi de mes tâches ou mon bilan d'organisation.
      </p>
    </header>

    <!-- Grille de navigation des sous-pages (si aucune sous-page n'est active) -->
    <transition name="fade" mode="out-in">
      <div v-if="!activeSubpage" class="subpage-grid stagger-2">
        
        <div class="subpage-card glass-panel" @click="activeSubpage = 'trace'">
          <div class="card-tag project">Description & Trace</div>
          <h3>1. Suivi des tâches avec Miro et versionnement Git</h3>
          <p>
            Organisation de mon travail à l'aide d'un tableau Kanban Miro et gestion du dépôt de code Git en solo sur la branche principale.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">Git</span>
            <span class="skill-badge project">Miro</span>
            <span class="skill-badge project">Autonomie</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'bilan'">
          <div class="card-tag project">Bilan & Auto-évaluation</div>
          <h3>Bilan : Planification et Pilotage de Projet</h3>
          <p>
            Retour d'expérience sur l'estimation de la charge de travail et la structuration des tâches au fil des semaines.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">Organisation</span>
            <span class="skill-badge project">Sprints</span>
          </div>
          <span class="read-more">Consulter le bilan →</span>
        </div>

      </div>

      <!-- Contenu de la sous-page active -->
      <div v-else class="subpage-content">
        <button class="back-btn" @click="activeSubpage = null">← Retour aux sous-pages</button>
        
        <!-- Sous-page : Trace -->
        <div v-if="activeSubpage === 'trace'" class="glass-panel animate-fade-in">
          <h2>1. Suivi des tâches avec Miro et versionnement Git</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge project">Initialisation de l'environnement et versionnage (Git / GitHub)</li>
              <li class="skill-badge project">Planification visuelle et suivi des tâches de développement (Miro)</li>
              <li class="skill-badge project">Structuration du travail en autonomie</li>
            </ul>
          </div>

          <!-- Trace n°2 -->
          <div class="trace-container">
            <div class="trace-image-wrapper">
              <img src="/trace_projet.png" alt="Trace 2 : Tableau Miro" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 2 :</strong> Capture d'écran du tableau Miro utilisé pour l'organisation et le suivi des fonctionnalités de l'application Unified Champions.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              La trace n°2 montre l'organisation opérationnelle sur mon tableau Miro. Les fonctionnalités de l'application 
              y sont découpées et réparties en colonnes (À faire, En cours, Terminé). Concernant la gestion de versions, 
              le développement s'est fait sur un unique dépôt Git distant. Étant seul à travailler sur le code de l'application, 
              j'ai choisi de pousser directement l'ensemble des développements et des correctifs sur la branche principale 
              <code>main</code>.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif des savoir-faire</h3>
            <p>
              Étant seul sur le projet, j'ai utilisé Miro pour formaliser et organiser mon travail à partir des besoins 
              exprimés par Pascal Chatonnay. Ce tableau m'a permis de suivre visuellement les fonctionnalités à réaliser 
              (authentification, scan, matches). Chaque fin de semaine, l'avancement était validé à l'aide de bilans basés 
              sur mon journal de bord de stage.
            </p>
            <p>
              Concernant la gestion du code, l'utilisation de Git sur la branche <code>main</code> a permis d'assurer 
              l'historique complet de mes commits et la sauvegarde du projet sur GitHub. Le fait de travailler sur 
              une seule branche m'a demandé une attention particulière avant chaque push pour m'assurer que le code envoyé était fonctionnel.
            </p>
          </div>
        </div>

        <!-- Sous-page : Bilan -->
        <div v-if="activeSubpage === 'bilan'" class="glass-panel animate-fade-in">
          <h2>Bilan : Planification et Pilotage de Projet</h2>
          
          <div class="bilan-grid">
            <div class="bilan-card">
              <h3>Contexte d'apprentissage et d'utilisation</h3>
              <p>
                L'utilisation de Git et de plateformes de planification a été abordée en cours lors de projets universitaires. 
                En stage, j'ai dû piloter le projet seul, ce qui a nécessité une rigueur d'organisation.
              </p>
              <p>
                La principale difficulté a résidé dans l'estimation de la charge de travail et la priorisation des tâches en autonomie. 
                Utiliser un tableau Miro m'a permis de ne pas m'éparpiller et de me concentrer sur les fonctionnalités prioritaires 
                (comme la base de données et le scan de présence) avant d'aborder des aspects secondaires.
              </p>
            </div>

            <div class="bilan-card">
              <h3>Évaluation de mon niveau d'expertise</h3>
              <div class="level-comparison">
                <div class="level-box before">
                  <span class="level-label">Avant le stage</span>
                  <span class="level-title">Niveau Moyen</span>
                  <div class="level-bar"><div class="fill" style="width: 55%;"></div></div>
                  <p class="level-desc">
                    Je savais utiliser Git pour sauvegarder mon code, mais je développais sans planification structurée.
                  </p>
                </div>
                <div class="level-box after">
                  <span class="level-label">Après le stage</span>
                  <span class="level-title">Niveau Excellent</span>
                  <div class="level-bar"><div class="fill" style="width: 90%;"></div></div>
                  <p class="level-desc">
                    Capable d'organise de A à Z le développement d'un projet, de suivre mes objectifs sur Miro et de gérer un versionnage propre avec Git en toute autonomie.
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
.suivi-projet-view {
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

.card-tag.project {
  background: rgba(255, 42, 133, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(255, 42, 133, 0.2);
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
  color: var(--secondary);
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

.skill-badge.project {
  background: rgba(255, 42, 133, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(255, 42, 133, 0.3);
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
  color: var(--secondary);
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
  color: var(--secondary);
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
  border-color: rgba(255, 42, 133, 0.4);
  background: rgba(255, 42, 133, 0.03);
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
  color: var(--secondary);
  text-shadow: 0 0 10px rgba(255, 42, 133, 0.3);
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
