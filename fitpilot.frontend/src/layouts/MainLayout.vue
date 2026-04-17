<template>
  <q-layout view="lHh Lpr lFf">

    <q-header
      v-if="isMobile"
      class="mobile-header-bar"
      :class="isDark ? 'theme-dark' : 'theme-light'"
    >
      <div class="mobile-header">
        <LogoFitPilot large :dark="isDark" />
        <button class="hamburger" :class="isDark ? 'theme-dark' : 'theme-light'" @click="drawer = true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </q-header>

    <q-drawer
      v-model="drawer"
      :behavior="isMobile ? 'mobile' : 'desktop'"
      show-if-above
      bordered
      width="240"
      :class="isDark ? 'drawer-dark' : 'drawer-light'"
    >
      <div class="column full-height q-pa-sm">

        <div class="q-py-lg q-pl-sm">
          <LogoFitPilot large :dark="isDark" />
        </div>

        <q-separator :color="isDark ? 'white' : 'grey-7'" style="opacity:.2" />

        <nav class="q-py-sm col">
          <div
            v-for="item in navItems"
            :key="item.path"
            class="nav-item"
            :class="[
              isDark ? 'nav-item--dark' : 'nav-item--light',
              { 'nav-item--active': isActive(item.path) }
            ]"
            @click="navigate(item.path)"
          >
            <component :is="item.icon" :size="18" />
            <span>{{ item.name }}</span>
          </div>
        </nav>

        <q-separator :color="isDark ? 'white' : 'grey-7'" style="opacity:.2" />

        <div class="q-py-sm">

          <div
            class="nav-item"
            :class="isDark ? 'nav-item--dark' : 'nav-item--light'"
            @click="toggleDark"
          >
            <component :is="isDark ? Sun : Moon" :size="18" />
            <span>{{ isDark ? 'Modo claro' : 'Modo escuro' }}</span>
            <div class="toggle-pill" :class="{ 'toggle-pill--on': isDark }">
              <div class="toggle-thumb" />
            </div>
          </div>

          <div
            class="nav-item"
            :class="isDark ? 'nav-item--dark' : 'nav-item--light'"
            @click="navigate('/configuracoes')"
          >
            <Settings :size="18" />
            <span>Configurações</span>
          </div>

        </div>
      </div>
    </q-drawer>

    <transition name="fade">
      <div
        v-if="isMobile && drawer"
        class="backdrop"
        @click="drawer = false"
      />
    </transition>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import {
  LayoutDashboard, Users, Dumbbell,
  CalendarDays, DollarSign, BarChart2, MessageSquare,
  Trophy, Store, Zap, Settings, Sun, Moon
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { Dark, LocalStorage, setCssVar, useQuasar } from 'quasar'
import LogoFitPilot from 'src/components/LogoFitPilot.vue'

onBeforeMount(() => {
  Dark.set(LocalStorage.getItem('modoEscuro'))
  const cor = LocalStorage.getItem('corPrincipal')
  if (cor) setCssVar('primary', cor)
})

const $q = useQuasar()
const router = useRouter()
const drawer = ref(false)

const isMobile = computed(() => $q.screen.width < 750)
const isDark    = computed(() => $q.dark.isActive)

function toggleDark() {
  const next = !$q.dark.isActive
  Dark.set(next)
  LocalStorage.set('modoEscuro', next)
}

const navItems = [
  { name: 'Dashboard',       path: '/dashboard',    icon: LayoutDashboard },
  { name: 'Alunos',          path: '/alunos',        icon: Users           },
  { name: 'Treinos',         path: '/treinos',       icon: Dumbbell        },
  { name: 'Agenda',          path: '/agenda',        icon: CalendarDays    },
  { name: 'Financeiro',      path: '/financeiro',    icon: DollarSign      },
  { name: 'Relatórios',      path: '/reports',       icon: BarChart2       },
  { name: 'Mensagens',       path: '/mensagens',     icon: MessageSquare   },
  { name: 'Gamificação',     path: '/gamificacao',   icon: Trophy          },
  { name: 'Marketplace',     path: '/marketplace',   icon: Store           },
  { name: 'IA & Automações', path: '/ia',            icon: Zap             },
]

const isActive = (path) => router.currentRoute.value.path === path

function navigate(path) {
  router.push(path)
  if (isMobile.value) drawer.value = false
}
</script>

<style lang="scss" scoped>
/* ── Drawer ── */
.drawer-dark  { background: $dark !important; }
.drawer-light { background: $primarybg !important; }

/* ── Header mobile ── */
.mobile-header-bar { box-shadow: none !important; }
.mobile-header-bar.theme-dark  { background: $dark;  border-bottom: 1px solid rgba(255,255,255,.07); }
.mobile-header-bar.theme-light { background: $primarybg; border-bottom: 1px solid rgba(0,0,0,.08); }

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
}

/* ── Hamburger ── */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  padding: 0 9px;
  transition: background .15s ease;

  &.theme-dark {
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.08);
    span { background: #aaa; }
  }
  &.theme-light {
    background: rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.1);
    span { background: $muted-foreground; }
  }
  &:active { opacity: .7; }

  span {
    display: block;
    height: 1.5px;
    border-radius: 2px;
    transition: width .2s ease;
    &:nth-child(2) { width: 70%; }
  }
}

/* ── Nav items ── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  margin: 2px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background .15s ease, color .15s ease;

  &--dark {
    color: rgba(255,255,255,.4);
    &:hover { background: rgba(255,255,255,.06); color: rgba(255,255,255,.85); }
  }

  &--light {
    color: $muted-foreground;
    &:hover { background: $secondarybg; color: $foreground; }
  }

  &--active {
    background: rgba($primary, .15) !important;
    color: $primary !important;
  }
}

.nav-item--dark span {
  color: #fff;
}

.nav-item--active span {
  color: inherit;
}

/* ── Toggle pill ── */
.toggle-pill {
  margin-left: auto;
  width: 32px;
  height: 18px;
  border-radius: 9px;
  background: rgba(128,128,128,.25);
  position: relative;
  transition: background .2s ease;
  flex-shrink: 0;

  &--on { background: $primary; }
}
.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  transition: transform .2s ease;

  .toggle-pill--on & { transform: translateX(14px); }
}

/* ── Backdrop ── */
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 1999;
  background: rgba(0,0,0,.5);
  backdrop-filter: blur(2px);
}
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
