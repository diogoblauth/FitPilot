<template>
  <div class="row items-center no-wrap" style="gap: 10px; user-select: none">
    <div
      class="row items-center justify-center no-wrap bg-primary"
      :style="{
        width: large ? '38px' : '32px',
        height: large ? '38px' : '32px',
        borderRadius: large ? '11px' : '9px',
        flexShrink: 0,
      }"
    >
      <Activity :size="large ? 20 : 17" color="white" stroke-width="2.2" />
    </div>

    <div style="line-height: 1; letter-spacing: -0.4px">
      <span
        :class="dark ? 'text-white' : 'text-dark'"
        :style="{ fontSize: large ? '19px' : '17px', fontWeight: 600 }"
      >
        Fit
      </span>
      <span class="text-primary" :style="{ fontSize: large ? '19px' : '17px', fontWeight: 600 }"
        >Pilot</span
      >
    </div>
  </div>
</template>

<script setup>
import { Activity } from 'lucide-vue-next'

defineProps({
  large: Boolean,
  dark: Boolean,
})
</script>
