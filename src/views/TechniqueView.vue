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
        
        <div class="subpage-card glass-panel" @click="activeSubpage = 'trace'">
          <div class="card-tag tech">Description & Trace</div>
          <h3>1. Modélisation relationnelle et Architecture Back-end</h3>
          <p>
            Analyse de la base de données MySQL de l'application, choix de la séparation Front-end / Back-end et gestion réglementaire (RGPD).
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">MySQL</span>
            <span class="skill-badge tech">Express.js</span>
            <span class="skill-badge tech">RGPD</span>
          </div>
          <span class="read-more">Consulter la trace →</span>
        </div>

        <div class="subpage-card glass-panel" @click="activeSubpage = 'bilan'">
          <div class="card-tag tech">Bilan & Auto-évaluation</div>
          <h3>Bilan : Développement et Architecture Web Full-Stack</h3>
          <p>
            Retour d'expérience sur mes apprentissages réseau (CORS, serveurs distants) et évaluation de ma montée en compétences.
          </p>
          <div class="card-skills">
            <span class="skill-badge tech">Autonomie</span>
            <span class="skill-badge tech">Expertise</span>
          </div>
          <span class="read-more">Consulter le bilan →</span>
        </div>

      </div>

      <!-- Contenu de la sous-page active -->
      <div v-else class="subpage-content">
        <button class="back-btn" @click="activeSubpage = null">← Retour aux sous-pages</button>
        
        <!-- Sous-page : Trace -->
        <div v-if="activeSubpage === 'trace'" class="glass-panel animate-fade-in">
          <h2>1. Modélisation relationnelle et Architecture Back-end</h2>
          
          <div class="skills-highlight">
            <h3>Savoir-faire élémentaires mobilisés :</h3>
            <ul class="skills-badges">
              <li class="skill-badge tech">Concevoir et déployer une base de données relationnelle (MySQL)</li>
              <li class="skill-badge tech">Architecturer une application web (Séparation Front-end / Back-end)</li>
              <li class="skill-badge tech">Implémenter une logique métier sécurisée et conforme (RGPD)</li>
            </ul>
          </div>

          <!-- Trace n°1 -->
          <div class="trace-container">
            <div class="trace-image-wrapper">
              <img src="/trace_sql.png" alt="Trace 1 : Extrait du schéma SQL de la base de données" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1 :</strong> Extrait du script de création de la base de données MySQL illustrant les relations entre les utilisateurs, leurs sessions de présence et leurs matchs.
            </p>
          </div>

          <!-- Trace n°1b -->
          <div class="trace-container">
            <div class="trace-image-wrapper narrow">
              <img src="/Screenshot_archi.png" alt="Trace 1b : Structure et arborescence physique du projet (Front-end & Back-end séparés)" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1b :</strong> Capture d'écran de l'arborescence du projet dans l'IDE (Visual Studio Code) montrant la séparation physique nette entre l'API <code>backend</code> (Node.js/Express), les scripts de <code>database</code> (MySQL), et l'application <code>frontend</code> (Vue.js/Vite) située à la racine.
            </p>
          </div>

          <!-- Trace n°1c -->
          <div class="trace-container">
            <div class="trace-image-wrapper">
              <img src="/trace_architecture.png" alt="Trace 1c : Architecture logique et Sécurité" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1c :</strong> Schéma d'architecture logique du projet modélisant la communication découplée Frontend / Backend et les différents mécanismes de sécurité réseau mis en œuvre.
            </p>
          </div>

          <!-- Trace n°1d -->
          <div class="trace-container">
            <div class="trace-image-wrapper">
              <img src="/security_audit.png" alt="Trace 1d : Audit de sécurité (Rate Limiting HTTP 429)" class="trace-image" />
            </div>
            <p class="trace-caption">
              <strong>Trace 1d :</strong> Capture d'écran de notre script d'audit de sécurité exécutant des requêtes automatisées rapides sur <code>/api/login</code>. On constate que la 16ème requête est immédiatement bloquée avec un statut <code>HTTP 429 Too Many Requests</code>, démontrant l'efficacité opérationnelle de notre middleware de limitation de débit.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif des traces</h3>
            <p>
              La <strong>Trace 1</strong> illustre le cœur du modèle relationnel de données (MLD) conçu sous MySQL. On y observe 
              la table centrale <code>users</code> qui stocke les informations sécurisées des étudiants (mot de passe haché par <code>bcrypt</code>, 
              UUID pour les QR codes, identifiants Riot). Les clés étrangères (<code>FOREIGN KEY</code>) lient chaque utilisateur 
              à son historique de matchs (<code>matches</code>) et à ses sessions de pointage dans la salle e-sport 
              (<code>presence_sessions</code>), garantissant l'intégrité référentielle absolue des données.
            </p>
            <p>
              La <strong>Trace 1b</strong> présente la structure d'arborescence du projet directement depuis ma capture d'écran de l'IDE (<code>Screenshot_archi.png</code>). J'ai fait le choix d'une séparation physique stricte : un dossier indépendant <code>backend</code> héberge le serveur Node.js/Express, un dossier <code>database</code> regroupe les scripts SQL de modélisation, et le reste des fichiers à la racine (dont <code>src</code> et <code>vite.config.js</code>) constitue le projet Front-end autonome sous Vue.js.
            </p>
            <p>
              La <strong>Trace 1c</strong> synthétise le schéma d'architecture logique résultant de ce découplage, détaillant les flux de requêtes HTTPS 
              sécurisées entre le navigateur client (Front Vue), le serveur d'API (Back Express) et le serveur de base de données MySQL.
            </p>
            <p>
              La <strong>Trace 1d</strong> apporte la preuve concrète du fonctionnement en temps réel de notre politique de sécurité. C'est le résultat d'un outil d'audit de vulnérabilités simulant une attaque par force brute sur la route de connexion. Dès le franchissement du seuil configuré (15 requêtes), le serveur Express bloque l'adresse IP de l'appelant avec le code HTTP 429, protégeant ainsi le serveur et la base de données de la surcharge.
            </p>
          </div>

          <div class="description-block">
            <h3>Descriptif des savoir-faire et Choix Architecturaux</h3>
            <p>
              <strong>Pourquoi séparer le Front-end et le Back-end ?</strong>
              Cette architecture découplée repose sur deux piliers majeurs :
            </p>
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem; font-size: 1.1rem;">1. Facilité et confort de développement (Separation of Concerns)</h4>
              <p style="margin-left: 1rem; margin-bottom: 1rem; color: var(--text-muted); line-height: 1.6;">
                Le découplage sépare clairement les responsabilités logicielles. L'interface utilisateur Vue.js est une application statique compilée (SPA) dont le seul rôle est la présentation et l'interaction, tandis que le serveur Express.js est une API REST purement dédiée à la logique métier, aux traitements lourds et aux accès base de données.
                Cette séparation permet de :
              </p>
              <ul style="margin-left: 3rem; margin-bottom: 1rem; color: var(--text-muted); list-style-type: square; line-height: 1.6;">
                <li>Développer et tester l'API Express de manière autonome (via des outils comme Postman ou Thunder Client) sans dépendre du serveur de développement frontend.</li>
                <li>Paralléliser le travail de développement et isoler les erreurs (un bug d'affichage côté Front n'impacte pas la disponibilité de l'API et inversement).</li>
                <li>Optimiser le déploiement de production en hébergeant l'application Front-end sur un espace de stockage statique ultra-rapide (ou GitHub Pages) et le Back-end Node.js sur un serveur d'application dédié.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem; font-size: 1.1rem; margin-top: 1.5rem;">2. Sécurité accrue et contrôle d'accès</h4>
              <p style="margin-left: 1rem; margin-bottom: 1rem; color: var(--text-muted); line-height: 1.6;">
                Dans une application web monopage (SPA) classique, tout code envoyé au client (JavaScript) est visible par l'utilisateur via l'inspecteur du navigateur. Séparer le Back-end permet de masquer l'infrastructure de la base de données (identifiants de connexion) et de protéger la logique métier sensible.
                Pour encadrer de manière ultra-sécurisée les échanges Cross-Origin entre nos serveurs, j'ai configuré plusieurs modules middleware clés dans le fichier <code>server.js</code> du Back-end :
              </p>
              <ul style="margin-left: 3rem; margin-bottom: 1rem; color: var(--text-muted); list-style-type: square; line-height: 1.6;">
                <li>
                  <strong>Le module <code>cors</code> (Cross-Origin Resource Sharing) :</strong> 
                  Essentiel pour restreindre l'accès à l'API. J'ai configuré une liste blanche d'origines autorisées (<code>origin: ['https://app.unifiedchampions.fr', 'http://localhost:5173']</code>) afin d'interdire à tout autre site malveillant d'exécuter des requêtes AJAX sur notre serveur de données.
                </li>
                <li>
                  <strong>Le module <code>express-rate-limit</code> :</strong> 
                  Mis en place pour lutter contre les attaques par force brute (Brute Force) et les surcharges de requêtes (DoS). Sur les routes sensibles (connexion, enregistrement), le middleware <code>authLimiter</code> bloque automatiquement toute adresse IP effectuant plus de 15 requêtes en 15 minutes.
                </li>
                <li>
                  <strong>Le module <code>helmet</code> :</strong> 
                  Sécurise les requêtes HTTP en injectant automatiquement une série d'en-têtes HTTP recommandés (protection contre les failles d'injection de scripts XSS, le clickjacking et l'analyse MIME non autorisée).
                </li>
                <li>
                  <strong>La validation d'adresse IP (RGPD & Intégrité) :</strong> 
                  Pour valider la présence physique en salle sans pister individuellement les étudiants (RGPD), la logique métier côté serveur compare l'adresse IP du client à une liste blanche restreinte (<code>ALLOWED_ROOM_IPS</code>, représentant les adresses IP de la salle e-sport). Si l'IP ne correspond pas, la transaction en base est rejetée, empêchant toute triche depuis l'extérieur de la salle.
                </li>
              </ul>
            </div>
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
              <h3>Évaluation de mon niveau d'expertise</h3>
              <div class="level-comparison">
                <div class="level-box before">
                  <span class="level-label">Avant le stage</span>
                  <span class="level-title">Niveau Moyen</span>
                  <div class="level-bar"><div class="fill" style="width: 50%;"></div></div>
                  <p class="level-desc">
                    Je savais créer une application web fonctionnelle en local, avec un back-end et un front-end souvent couplés et un déploiement basique.
                  </p>
                </div>
                <div class="level-box after">
                  <span class="level-label">Après le stage</span>
                  <span class="level-title">Niveau Excellent</span>
                  <div class="level-bar"><div class="fill" style="width: 95%;"></div></div>
                  <p class="level-desc">
                    Capable de concevoir l'architecture complète d'un projet, de créer une API REST sécurisée, et de la déployer sur des infrastructures professionnelles complexes tout en intégrant des contraintes RGPD.
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
}

.trace-image-wrapper.narrow {
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
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
