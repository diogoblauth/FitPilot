<template>
  <q-card class="metric-card" :style="cardStyle" flat bordered>
    <q-card-section class="metric-card__section">
      <div class="metric-card__header">
        <span class="metric-card__label">{{ label }}</span>

        <div class="metric-card__icon-badge" :style="iconBadgeStyle">
          <q-icon :name="icon" :size="iconSize" color="white" />
        </div>
      </div>

      <div class="metric-card__value" :style="valueStyle">
        {{ formattedValue }}
      </div>

      <div v-if="subtitle" class="metric-card__subtitle" :style="subtitleStyle">
        <q-icon
          v-if="subtitleIcon"
          :name="subtitleIcon"
          size="12px"
          class="q-mr-xs"
        />
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
    validator: (v) => ['positive', 'negative', 'warning', 'neutral'].includes(v),
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
  let val = props.value
  if (props.formatNumber && typeof val === 'number') {
    val = val.toLocaleString(props.locale)
  }
  return `${props.prefix}${val}${props.suffix}`
})

const cardStyle = computed(() => ({
  background: props.bgColor,
  borderRadius: props.borderRadius,
  minWidth: props.minWidth,
  padding: props.padding,
}))

const iconBadgeStyle = computed(() => ({
  background: props.iconColor,
}))

const valueStyle = computed(() => ({
  color: props.valueColor,
  fontSize: props.valueFontSize,
})
)

const subtitleStyle = computed(() => {
  const colorMap = {
    positive: '#22c55e',
    negative: '#ef4444',
    warning: '#f97316',
    neutral: '#9ca3af',
  }
  return { color: colorMap[props.subtitleVariant] }
})
</script>

<style scoped>
.metric-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.32);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.45);
}

.metric-card .q-card__section {
  padding: 0 !important;
}

.metric-card__section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.metric-card__label {
  font-size: 13px;
  font-weight: 500;
  color: v-bind('props.labelColor');
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.metric-card__icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
}

.metric-card__value {
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-top: 4px;
}

.metric-card__subtitle {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
}
</style>
