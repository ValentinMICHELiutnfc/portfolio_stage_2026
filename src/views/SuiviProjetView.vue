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
        
        <div class="subpage-card glass-panel" @click="activeSubpage = 'git'">
          <div class="card-tag project">Description & Trace</div>
          <h3>1. Versionnement Git & Collaboration Solo</h3>
          <p>
            Suivi du versionnement de code en solo sur GitHub et historique linéaire de commits pour un développement autonome et structuré.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">Git</span>
            <span class="skill-badge project">GitHub</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'infomaniak'">
          <div class="card-tag project">Description & Trace</div>
          <h3>2. Configuration de l'Hébergement Découplé</h3>
          <p>
            Configuration et serveurs distincts sur Infomaniak : hébergement statique pour l'interface client (Frontend) et serveur Cloud Node.js pour l'API Backend.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">Infomaniak</span>
            <span class="skill-badge project">Architecture</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'filezilla'">
          <div class="card-tag project">Description & Trace</div>
          <h3>3. Déploiement et Transfert FTP (FileZilla)</h3>
          <p>
            Gestion des builds de production du Frontend et transfert sécurisé des fichiers statiques compilés vers l'hébergeur avec le protocole FTP.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">FileZilla</span>
            <span class="skill-badge project">FTP</span>
            <span class="skill-badge project">Déploiement</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'logs'">
          <div class="card-tag project">Description & Trace</div>
          <h3>4. Supervision et Logs en Production</h3>
          <p>
            Surveillance en temps réel et analyse des logs d'erreurs du serveur Backend pour diagnostiquer et résoudre de manière réactive les dysfonctionnements.
          </p>
          <div class="card-skills">
            <span class="skill-badge project">Logs</span>
            <span class="skill-badge project">Monitoring</span>
            <span class="skill-badge project">Maintenance</span>
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
            <span class="skill-badge project">Autonomie</span>
          </div>
          <span class="read-more">Consulter le bilan →</span>
        </div>

      </div>

      <!-- Contenu de la sous-page active -->
      <div v-else class="subpage-content">
        <button class="back-btn" @click="activeSubpage = null">← Retour aux sous-pages</button>
        
        <!-- Sous-page : Git -->
        <div v-if="activeSubpage === 'git'" class="glass-panel animate-fade-in">
          <h2>1. Versionnement Git & Collaboration Solo</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge project">Initialisation de l'environnement et versionnage (Git)</li>
              <li class="skill-badge project">Régularité des commits et journalisation du travail</li>
              <li class="skill-badge project">Gestion du projet en autonomie sur un dépôt distant</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper medium-trace">
              <img src="/screenshot_GIT.png" alt="Trace 2 : Dépôt GitHub et historique linéaire de commits" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 2 :</strong> Historique de commits du dépôt GitHub de l'application, illustrant la régularité des sauvegardes et le flux de travail direct sur la branche principale <code>main</code>.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              Cette capture d'écran présente l'historique de commits de mon dépôt GitHub. Étant le seul développeur sur l'application <em>Unified Champions</em>, j'ai adopté un workflow direct sur la branche principale (<code>main</code>). Chaque commit représente un incrément fonctionnel et stable, testé localement avant d'être poussé en ligne, évitant ainsi la complexité inutile de branches secondaires pour un développement en solo.
            </p>
          </div>

          <div class="description-block">
            <h3>Bilan technique & Rigueur</h3>
            <p>
              Le fait de travailler seul sur le projet nécessite une rigueur constante pour ne pas perdre le fil des modifications. L'historique Git sert de journal d'avancement. Chaque commit est rédigé de manière explicite pour retracer l'évolution du code, facilitant ainsi les retours en arrière en cas d'anomalie et garantissant la transparence des développements vis-à-vis du maître de stage.
            </p>
          </div>
        </div>

        <!-- Sous-page : Infomaniak -->
        <div v-if="activeSubpage === 'infomaniak'" class="glass-panel animate-fade-in">
          <h2>2. Configuration de l'Hébergement Découplé (Infomaniak)</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge project">Architecture de déploiement multi-serveurs</li>
              <li class="skill-badge project">Configuration d'hébergement Web statique et Cloud Node.js</li>
              <li class="skill-badge project">Gestion des environnements de production</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper medium-trace">
              <img src="/screenshot_mise_en_place_infomaniak.png" alt="Trace 2b : Configuration des serveurs sur Infomaniak" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 2b :</strong> Interface de gestion Infomaniak montrant l'hébergement séparé (le Frontend statique pour l'interface client Vue.js et l'API Backend Node.js).
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              Cette trace montre l'organisation de l'hébergement de l'application au sein de la console d'administration Infomaniak. Deux instances distinctes ont été créées : un hébergement web classique configuré pour servir l'application Frontend statique compilée, et un serveur Cloud configuré pour exécuter l'environnement d'exécution Node.js de l'API Backend.
            </p>
          </div>

          <div class="description-block">
            <h3>Choix architectural et Sécurité</h3>
            <p>
              Le découplage physique du Frontend et du Backend offre une sécurité accrue. Les identifiants de base de données et les clés secrètes JWT sont stockés sur le serveur Backend dans des variables d'environnement inaccessibles aux clients. Les communications entre les deux serveurs sont restreintes par les politiques CORS et configurées de façon à n'autoriser que les requêtes provenant du nom de domaine officiel du Frontend.
            </p>
          </div>
        </div>

        <!-- Sous-page : Filezilla -->
        <div v-if="activeSubpage === 'filezilla'" class="glass-panel animate-fade-in">
          <h2>3. Déploiement et Transfert FTP (FileZilla)</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge project">Mise en production par transfert de fichiers (FTP)</li>
              <li class="skill-badge project">Génération de builds optimisées (Vite.js)</li>
              <li class="skill-badge project">Synchronisation de répertoires distants</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper large-trace">
              <img src="/screenshot_utilisation_filezila.png" alt="Trace 2c : Téléversement FTP via FileZilla" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 2c :</strong> Utilisation du client FTP FileZilla pour téléverser les fichiers statiques compilés de l'interface utilisateur (dossier <code>dist</code> du frontend) sur le serveur d'hébergement statique.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              Cette trace illustre le processus de déploiement de l'interface utilisateur. Après compilation locale de l'application Vue.js (génération du dossier optimisé <code>dist</code> via la commande <code>npm run build</code>), le client FTP FileZilla est utilisé pour téléverser de façon sécurisée les fichiers statiques (HTML, CSS, JS) sur le serveur web d'Infomaniak.
            </p>
          </div>

          <div class="description-block">
            <h3>Intégration opérationnelle</h3>
            <p>
              La mise en production via FileZilla a été automatisée au niveau de la structure des dossiers locaux et distants. Ce flux simple m'a permis de déployer de manière agile et itérative les retours de mon maître de stage, assurant qu'une version récente et testée de l'interface client soit continuellement accessible en production pour les démonstrations et les tests d'utilisabilité de la salle e-sport.
            </p>
          </div>
        </div>

        <!-- Sous-page : Logs -->
        <div v-if="activeSubpage === 'logs'" class="glass-panel animate-fade-in">
          <h2>4. Supervision et Logs en Production</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge project">Surveillance active des serveurs de production</li>
              <li class="skill-badge project">Lecture et interprétation des logs d'erreurs</li>
              <li class="skill-badge project">Diagnostic rapide d'anomalies réseau ou base de données</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper large-trace">
              <img src="/screenshot_console_backend.png" alt="Trace 2d : Console d'administration et logs d'erreurs Infomaniak" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 2d :</strong> Console d'administration Infomaniak affichant les logs d'erreurs en production pour superviser et diagnostiquer le comportement du serveur backend.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              Cette capture d'écran présente l'outil de console et de journalisation fourni par Infomaniak pour l'hébergement Backend. Elle permet de suivre en temps réel la sortie standard (stdout/stderr) de l'application Node.js en cours d'exécution. Les lignes de codes d'erreur ou d'exception y sont répertoriées chronologiquement (les informations sensibles ayant été nettoyées pour cette présentation).
            </p>
          </div>

          <div class="description-block">
            <h3>Supervision active & Maintenance</h3>
            <p>
              La mise en ligne d'une application ne s'arrête pas au déploiement. Consulter régulièrement cette console de logs m'a permis d'assurer une maintenance réactive du serveur backend. Grâce à ces traces d'exécution, j'ai pu identifier et corriger des exceptions liées aux micro-coupures de connexion de la base de données MySQL ainsi que des tentatives d'accès non autorisées, améliorant ainsi la résilience globale du service.
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
                L'utilisation de Git pour le versionnement a été abordée en cours lors de projets universitaires. En stage, j'ai dû piloter le projet et la mise en production seul, ce qui a nécessité une rigueur d'organisation accrue.
              </p>
              <p>
                La principale difficulté a résidé dans l'estimation de la charge de travail et la priorisation des tâches en autonomie. La définition d'objectifs de livraison hebdomadaires et la gestion d'un journal de bord rigoureux m'ont permis de ne pas m'éparpiller et de me concentrer sur les fonctionnalités prioritaires (comme la base de données et le scan de présence) avant d'aborder des aspects secondaires.
              </p>
            </div>

            <div class="bilan-card">
            <h3>Auto-évaluation de ma progression</h3>
            <div class="level-comparison">
              <div class="level-box before">
                <span class="level-label">Avant le stage</span>
                <span class="level-title">Bases Académiques</span>
                <div class="level-bar"><div class="fill" style="width: 55%;"></div></div>
                <p class="level-desc">
                  Je savais utiliser les commandes Git de base pour sauvegarder mon code, mais je travaillais sans méthodologie de planification ni livrables réguliers.
                </p>
              </div>
              <div class="level-box after">
                <span class="level-label">Après le stage</span>
                <span class="level-title">Niveau Autonome</span>
                <div class="level-bar"><div class="fill" style="width: 75%;"></div></div>
                <p class="level-desc">
                  Capable de planifier mes objectifs par cycles de livraison hebdomadaires, de maintenir un dépôt Git propre en solo et de suivre les étapes de déploiement et de supervision de l'application.
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
  margin-left: auto;
  margin-right: auto;
}

.trace-image-wrapper.large-trace {
  max-width: 850px;
}

.trace-image-wrapper.medium-trace {
  max-width: 700px;
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
