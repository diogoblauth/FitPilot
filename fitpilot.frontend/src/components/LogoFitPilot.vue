<template>
  <div class="logo-wrap">
    <div class="logo-icon" :class="{ 'logo-icon--lg': large }">
      <Activity :size="large ? 20 : 17" color="white" stroke-width="2.2" />
    </div>
    <div class="logo-text">
      <span class="logo-fit" :class="{ 'logo-fit--lg': large, 'logo-fit--light': !dark }">Fit</span>
      <span class="logo-pilot" :class="{ 'logo-pilot--lg': large }">Pilot</span>
    </div>
  </div>
</template>

<script setup>
import { Activity } from 'lucide-vue-next'
defineProps({ large: Boolean, dark: Boolean })
</script>

<style scoped>
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
}
.logo-icon {
  width: 32px;
  height: 32px;
  background: #22c55e;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.logo-icon--lg { width: 38px; height: 38px; border-radius: 11px; }

.logo-text { line-height: 1; letter-spacing: -0.4px; }

/* "Fit" — branco no dark, cinza escuro no light */
.logo-fit       { font-size: 17px; font-weight: 600; color: #fff; }
.logo-fit--light { color: #1a1a1a; }
.logo-fit--lg   { font-size: 19px; }

/* "Pilot" — sempre verde */
.logo-pilot     { font-size: 17px; font-weight: 600; color: #22c55e; }
.logo-pilot--lg { font-size: 19px; }
</style>
