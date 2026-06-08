<template>
  <div class="technique-view animate-fade-in">
    
    <!-- En-tête de la page principale -->
    <header class="page-header glass-panel stagger-1">
      <h2>Réalisations Techniques</h2>
      <p class="intro-text">
        Cette section détaille l'architecture logicielle et les choix techniques fondamentaux du projet Unified Champions. 
        Sélectionnez une sous-page ci-dessous pour découvrir le descriptif de mes traces ou mon auto-évaluation de compétences.
      </p>
    </header>

    <!-- Grille de navigation des sous-pages (si aucune sous-page n'est active) -->
    <transition name="fade" mode="out-in">
      <div v-if="!activeSubpage" class="subpage-grid stagger-2">
        
        <div class="subpage-card glass-panel" @click="activeSubpage = 'sql'">
          <div class="card-tag tech">Description & Trace</div>
          <h3>1. Modélisation de la Base de Données (MySQL)</h3>
          <p>
            Conception du modèle relationnel de données, scripts SQL de création et intégrité référentielle pour structurer l'application.
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">MySQL</span>
            <span class="skill-badge tech">Modélisation</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'architecture'">
          <div class="card-tag tech">Description & Trace</div>
          <h3>2. Architecture Découplée & Choix d'API</h3>
          <p>
            Séparation physique nette entre Front-end (Vue.js) et Back-end (Express.js) et intégration sous contrainte de l'API Valorant HenrikDev.
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">Vue.js</span>
            <span class="skill-badge tech">Express.js</span>
            <span class="skill-badge tech">API REST</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'security'">
          <div class="card-tag tech">Description & Trace</div>
          <h3>3. Sécurisation de l'API & Contrôle d'Accès</h3>
          <p>
            Configuration de la sécurité réseau (CORS, Rate Limit, Helmet) et contrôle d'adresses IP locales de la salle e-sport conforme RGPD.
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">Sécurité</span>
            <span class="skill-badge tech">CORS</span>
            <span class="skill-badge tech">RGPD</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'bilan'">
          <div class="card-tag tech">Bilan & Auto-évaluation</div>
          <h3>Bilan : Développement et Architecture Web Full-Stack</h3>
          <p>
            Retour d'expérience sur mes apprentissages réseau (CORS, serveurs distants) et auto-évaluation de ma progression.
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">Autonomie</span>
            <span class="skill-badge tech">Progression</span>
          </div>
          <span class="read-more">Consulter le bilan →</span>
        </div>

      </div>

      <!-- Contenu de la sous-page active -->
      <div v-else class="subpage-content">
        <button class="back-btn" @click="activeSubpage = null">← Retour aux sous-pages</button>
        
        <!-- Sous-page : SQL -->
        <div v-if="activeSubpage === 'sql'" class="glass-panel animate-fade-in">
          <h2>1. Modélisation de la Base de Données (MySQL)</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge tech">Concevoir et déployer une base de données relationnelle (MySQL)</li>
              <li class="skill-badge tech">Assurer l'intégrité référentielle par des contraintes de clés étrangères</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper large-trace">
              <img src="/trace_sql.png" alt="Trace 1 : Extrait du schéma SQL de la base de données" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1 :</strong> Extrait du script de création de la base de données MySQL illustrant les relations entre les utilisateurs, leurs sessions de présence et leurs matchs.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              La <strong>Trace 1</strong> illustre le cœur du modèle relationnel de données (MLD) conçu sous MySQL. On y observe la table centrale <code>users</code> qui stocke les informations sécurisées des étudiants (mot de passe haché par <code>bcrypt</code>, UUID pour les QR codes, identifiants Riot). Des clés étrangères (<code>FOREIGN KEY</code>) lient chaque utilisateur à son historique de matchs (<code>matches</code>) et à ses sessions de pointage dans la salle e-sport (<code>presence_sessions</code>), garantissant l'intégrité référentielle absolue des données.
            </p>
          </div>

          <div class="description-block">
            <h3>Rigueur de Conception Relationnelle</h3>
            <p>
              Pour assurer un stockage sans redondance et performant, les relations ont été normalisées. L'utilisation d'identifiants uniques (UUID) permet de détacher l'identité institutionnelle de l'étudiant de son identifiant de jeu, protégeant ainsi sa vie privée tout en permettant de lier efficacement ses pointages physiques en salle avec ses résultats compétitifs dans le jeu Valorant.
            </p>
          </div>
        </div>

        <!-- Sous-page : Architecture -->
        <div v-if="activeSubpage === 'architecture'" class="glass-panel animate-fade-in">
          <h2>2. Architecture Découplée & Choix d'API</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge tech">Architecturer une application web (Séparation Front-end / Back-end)</li>
              <li class="skill-badge tech">Évaluer et intégrer un service tiers sous contraintes administratives</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper narrow">
              <img src="/Screenshot_archi.png" alt="Trace 1b : Structure et arborescence physique du projet (Front-end & Back-end séparés)" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1b :</strong> Capture d'écran de l'arborescence du projet dans l'IDE (Visual Studio Code) montrant la séparation physique nette entre l'API <code>backend</code> (Node.js/Express), les scripts de <code>database</code> (MySQL), et l'application <code>frontend</code> (Vue.js/Vite) située à la racine.
            </p>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper large-trace">
              <img src="/trace_architecture.png" alt="Trace 1c : Architecture logique de communication" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1c :</strong> Schéma d'architecture logique du projet modélisant la communication découplée Frontend / Backend.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif des traces</h3>
            <p>
              La <strong>Trace 1b</strong> présente l'organisation des fichiers dans Visual Studio Code (<code>Screenshot_archi.png</code>). J'ai choisi de séparer physiquement les responsabilités : le répertoire autonome <code>backend</code> contient le serveur Node.js/Express de l'API, le dossier <code>database</code> réunit les scripts de modélisation SQL, tandis que la racine héberge l'application Frontend sous Vue.js/Vite.
            </p>
            <p>
              La <strong>Trace 1c</strong> synthétise le schéma d'architecture logique résultant de ce découplage, détaillant les requêtes HTTPS échangées entre le navigateur client (Front Vue), le serveur d'API (Back Express) et la base de données MySQL.
            </p>
          </div>

          <div class="description-block">
            <h3>Pourquoi séparer le Front-end et le Back-end ?</h3>
            <p>
              Ce choix architectural repose sur le principe de séparation des préoccupations (Separation of Concerns). L'interface utilisateur Vue.js est une application monopage (SPA) dont le seul rôle est la présentation et l'interaction, tandis que le serveur Express.js est une API REST purement dédiée à la logique métier, aux calculs lourds et aux accès base de données. Cela permet de développer, de tester et de déployer chaque partie de façon autonome.
            </p>
          </div>

          <div class="description-block">
            <h3>Choix et intégration d'une API externe sous contrainte (HenrikDev vs Riot Games)</h3>
            <p>
              Une des fonctionnalités majeures de l'application est le tracking des statistiques de jeu en temps réel. Pour y parvenir, une phase cruciale de réflexion technique a été menée. Deux options s'offraient à moi : l'API officielle Riot Games ou HenrikDev API (un wrapper tiers spécialisé pour Valorant).
            </p>
            <p>
              L'API officielle de Riot Games impose l'obtention d'une <strong>Production Key</strong> (clé de production approuvée) pour effectuer des requêtes régulières en dehors d'un environnement de développement local bridé. L'obtention de cette clé exigeant une application déjà fonctionnelle, déployée et validée par leurs équipes, il était administrativement impossible de démarrer le projet avec celle-ci.
            </p>
            <p>
              J'ai donc pris la décision de développer l'application en m'interfaçant avec l'<strong>API HenrikDev</strong>. Ce choix a permis de contourner cette contrainte initiale et d'assurer le tracking des données de match dès le début du développement, tout en concevant une architecture de code suffisamment découplée pour pouvoir basculer sur l'API officielle de Riot à l'avenir sans réécrire l'intégralité du système.
            </p>
          </div>
        </div>

        <!-- Sous-page : Security -->
        <div v-if="activeSubpage === 'security'" class="glass-panel animate-fade-in">
          <h2>3. Sécurisation de l'API & Contrôle d'Accès</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge tech">Sécuriser les requêtes HTTP et encadrer les échanges Cross-Origin</li>
              <li class="skill-badge tech">Implémenter des middlewares de limitation de débit (Anti brute force)</li>
              <li class="skill-badge tech">Valider la présence physique en salle conforme RGPD</li>
            </ul>
          </div>

          <div class="trace-container">
            <div class="trace-image-wrapper large-trace">
              <img src="/security_audit.png" alt="Trace 1d : Audit de sécurité (Rate Limiting HTTP 429)" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1d :</strong> Capture d'écran du script d'audit de sécurité exécutant des requêtes automatisées rapides sur <code>/api/login</code>. On constate que la 16ème requête est immédiatement bloquée avec un statut <code>HTTP 429 Too Many Requests</code>.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif de la trace</h3>
            <p>
              La <strong>Trace 1d</strong> apporte la preuve concrète du fonctionnement de notre politique de sécurité. C'est le résultat d'un script d'audit simulant une attaque par force brute sur la route de connexion. Dès le franchissement du seuil configuré (15 requêtes), le serveur Express bloque l'adresse IP de l'appelant avec le code HTTP 429, protégeant ainsi le serveur et la base de données.
            </p>
          </div>

          <div class="description-block">
            <h3>Sécurité accrue et contrôle d'accès</h3>
            <p>
              Séparer le Back-end permet de masquer l'infrastructure de la base de données (identifiants de connexion) et de protéger la logique métier sensible. Pour encadrer de manière sécurisée les échanges, j'ai configuré plusieurs modules middleware clés dans le fichier <code>server.js</code> du Back-end :
            </p>
            <ul style="margin-left: 2rem; margin-bottom: 1.5rem; color: var(--text-muted); list-style-type: square; line-height: 1.6;">
              <li style="margin-bottom: 0.5rem;">
                <strong>Le module <code>cors</code> (Cross-Origin Resource Sharing) :</strong> 
                Restreint l'accès à l'API. J'ai configuré une liste blanche d'origines autorisées (comme <code>http://localhost:5173</code> en développement ou l'URL de production officielle) afin d'interdire à tout autre site malveillant d'exécuter des requêtes sur notre serveur.
              </li>
              <li style="margin-bottom: 0.5rem;">
                <strong>Le module <code>express-rate-limit</code> :</strong> 
                Lutte contre les attaques par force brute. Sur les routes sensibles, le middleware bloque automatiquement toute adresse IP effectuant plus de 15 requêtes en 15 minutes.
              </li>
              <li style="margin-bottom: 0.5rem;">
                <strong>Le module <code>helmet</code> :</strong> 
                Sécurise les en-têtes HTTP en injectant automatiquement une série de protections contre les failles d'injection (XSS, clickjacking).
              </li>
              <li style="margin-bottom: 0.5rem;">
                <strong>La validation d'adresse IP (RGPD & Intégrité) :</strong> 
                Pour valider la présence physique en salle sans pister individuellement les étudiants (RGPD), la logique métier côté serveur compare l'adresse IP du client à une liste blanche restreinte (représentant les adresses IP de la salle e-sport). Si l'IP ne correspond pas, la transaction en base est rejetée, empêchant toute triche depuis l'extérieur de la salle sans enregistrement persistant d'identifiants géolocalisés.
              </li>
            </ul>
          </div>
        </div>

        <!-- Sous-page : Bilan -->
        <div v-if="activeSubpage === 'bilan'" class="glass-panel animate-fade-in">
          <h2>Bilan : Développement et Architecture Web Full-Stack</h2>
          
          <div class="bilan-grid">
            <div class="bilan-card">
              <h3>Contexte d'apprentissage et d'utilisation</h3>
              <p>
                L'utilisation d'une base de données MySQL et le développement d'interfaces sont des notions que j'ai largement 
                abordées et acquises en cours lors de mes deux premières années de BUT. Cependant, le contexte de ce stage m'a poussé 
                à aller beaucoup plus loin en autonomie. J'ai dû apprendre par moi-même à configurer et déployer des environnements 
                séparés (Front/Back) sur des serveurs distants (Infomaniak), et à gérer les problématiques de sécurité réseau (CORS, JWT) 
                qui en découlent.
              </p>
              <p>
                La principale difficulté technique a résidé dans l'adaptation de la logique métier aux contraintes réelles de l'université. 
                Mettre en place un système de tracking fiable sans enfreindre le RGPD a nécessité plusieurs itérations, passant de 
                l'idée d'un QR Code à un système de validation par liste blanche d'IP géré côté serveur. Le paramétrage du déploiement 
                sur Infomaniak sans posséder l'intégralité des droits d'administration a également été un défi de taille qui m'a appris 
                à dialogue avec les services techniques (CRI).
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
                  Je savais concevoir une base de données simple et coder une application web basique en local, souvent en couplant fortement le front et le back.
                </p>
              </div>
              <div class="level-box after">
                <span class="level-label">Après le stage</span>
                <span class="level-title">Niveau Autonome</span>
                <div class="level-bar"><div class="fill" style="width: 75%;"></div></div>
                <p class="level-desc">
                  Capable d'implémenter de manière autonome une architecture découplée (Vue.js / Node.js), d'intégrer des middlewares de sécurité réseau standard et de configurer un hébergement distant.
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
.technique-view {
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

.card-tag.tech {
  background: rgba(0, 242, 254, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 242, 254, 0.2);
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
  color: var(--accent-cyan);
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

.skill-badge.tech {
  background: rgba(0, 242, 254, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 242, 254, 0.3);
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

.trace-image-wrapper.narrow {
  max-width: 450px;
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
  color: var(--accent-cyan);
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
  color: var(--secondary);
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
  color: var(--accent-cyan);
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
