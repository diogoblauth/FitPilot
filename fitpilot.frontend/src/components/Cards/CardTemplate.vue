<template>
  <q-card class="metric-card full-width column" :style="cardStyle" flat bordered>
    <q-card-section class="column q-pa-none" :style="sectionStyle">
      <div class="row items-start justify-between no-wrap" style="gap: 12px">
        <span class="text-weight-medium" :style="labelStyle">{{ label }}</span>

        <div class="row items-center justify-center no-wrap" :style="iconBadgeStyle">
          <q-icon :name="icon" :size="iconSize" color="white" />
        </div>
      </div>

      <div class="text-weight-bold" :style="valueStyle">
        {{ formattedValue }}
      </div>

      <div v-if="subtitle" class="row items-center" :style="subtitleStyle">
        <q-icon v-if="subtitleIcon" :name="subtitleIcon" size="12px" class="q-mr-xs" />
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  value: {
    type: [String, Number],
    required: true,
  },

  prefix: {
    type: String,
    default: '',
  },

  suffix: {
    type: String,
    default: '',
  },

  formatNumber: {
    type: Boolean,
    default: false,
  },

  locale: {
    type: String,
    default: 'pt-BR',
  },

  icon: {
    type: String,
    default: 'trending_up',
  },

  iconSize: {
    type: String,
    default: '20px',
  },

  iconColor: {
    type: String,
    default: '#22c55e',
  },

  subtitle: {
    type: String,
    default: '',
  },

  subtitleVariant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['positive', 'negative', 'warning', 'neutral'].includes(value),
  },

  subtitleIcon: {
    type: String,
    default: '',
  },

  minWidth: {
    type: String,
    default: '200px',
  },

  padding: {
    type: String,
    default: '20px 24px',
  },

  borderRadius: {
    type: String,
    default: '12px',
  },

  bgColor: {
    type: String,
    default: null,
  },

  labelColor: {
    type: String,
    default: '#9ca3af',
  },

  valueColor: {
    type: String,
    default: null,
  },

  valueFontSize: {
    type: String,
    default: '28px',
  },
})

const formattedValue = computed(() => {
  let currentValue = props.value

  if (props.formatNumber && typeof currentValue === 'number') {
    currentValue = currentValue.toLocaleString(props.locale)
  }

  return `${props.prefix}${currentValue}${props.suffix}`
})

const cardStyle = computed(() => ({
  background: props.bgColor,
  borderRadius: props.borderRadius,
  minWidth: props.minWidth,
}))

const sectionStyle = computed(() => ({
  padding: props.padding,
  gap: '6px',
}))

const iconBadgeStyle = computed(() => ({
  background: props.iconColor,
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  flexShrink: 0,
}))

const labelStyle = computed(() => ({
  color: props.labelColor,
  fontSize: '13px',
  lineHeight: 1.3,
  letterSpacing: '0.01em',
}))

const valueStyle = computed(() => ({
  color: props.valueColor,
  fontSize: props.valueFontSize,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  marginTop: '4px',
}))

const subtitleStyle = computed(() => {
  const colorMap = {
    positive: '#22c55e',
    negative: '#ef4444',
    warning: '#f97316',
    neutral: '#9ca3af',
  }

  return {
    color: colorMap[props.subtitleVariant],
    fontSize: '12px',
    fontWeight: 500,
    marginTop: '2px',
  }
})
</script>

<style scoped>
.metric-card {
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.32);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.45);
}
</style>
