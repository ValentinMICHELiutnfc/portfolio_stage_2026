<template>
  <div class="app-container">
    <header class="global-header glass-panel">
      <div class="header-content">
        <div class="identity">
          <h1><span class="highlight">Valentin</span> MICHEL</h1>
          <p class="subtitle">Étudiant en BUT Informatique – Portfolio de Compétences</p>
        </div>
        <div class="contact-info">
          <p>Contact : <a href="mailto:valentin.michel@edu.univ-fcomte.fr">valentin.michel@edu.univ-fcomte.fr</a></p>
        </div>
      </div>
      
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/technique" class="nav-link">Technique</router-link>
        <router-link to="/suivi-projet" class="nav-link">Suivi de projet</router-link>
        <router-link to="/integration" class="nav-link">Intégration en entreprise</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
// Le composant App gère la structure globale
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.global-header {
  margin-bottom: 3rem;
  padding: 1.5rem 2.5rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.identity h1 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.highlight {
  color: var(--primary);
  background: -webkit-linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.contact-info a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(173, 70, 242, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(173, 70, 242, 0.2);
  transition: all 0.3s ease;
}

.contact-info a:hover {
  background: rgba(173, 70, 242, 0.2);
  transform: translateY(-2px);
}

.main-nav {
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid var(--border-light);
  padding-top: 1.5rem;
  flex-wrap: wrap;
}

.nav-link {
  position: relative;
  padding: 0.5rem 0;
  color: var(--text-muted);
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--text-main);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--text-main);
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
