<template>
  <q-card class="atividade-card" flat bordered>
    <q-card-section class="atividade-card__header">
      <span class="atividade-card__title">Atividade Recente</span>
    </q-card-section>

    <q-separator color="grey-7" style="opacity: 0.2;" />

    <q-card-section class="q-pa-none q-pb-sm">
      <div
        v-for="(item, index) in atividades"
        :key="index"
        class="atividade-item"
      >
        <!-- Ícone -->
        <div
          class="atividade-item__icon"
          :style="{ backgroundColor: getIconBg(item.type) }"
        >
          <q-icon
            :name="getIconName(item.type)"
            size="18px"
            :style="{ color: getIconColor(item.type) }"
          />
        </div>

        <!-- Descrição -->
        <span class="atividade-item__description">{{ item.description }}</span>

        <!-- Tempo -->
        <span class="atividade-item__time">{{ item.time }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  atividades: {
    type: Array,
    default: () => [
      { type: 'treino',    description: 'Ana Silva completou treino A',          time: 'há 2h' },
      { type: 'pagamento', description: 'Novo pagamento: Bruno Costa - R$ 350',  time: 'há 3h' },
      { type: 'meta',      description: 'Carla Mendes atingiu meta de peso',     time: 'há 5h' },
      { type: 'agenda',    description: 'Diego Ferreira reagendou sessão',       time: 'há 6h' },
      { type: 'avaliacao', description: 'Nova avaliação física: Elena Souza',    time: 'há 8h' },
    ],
  },
})

function getIconName(type) {
  const icons = {
    treino:    'percent',
    pagamento: 'attach_money',
    meta:      'show_chart',
    agenda:    'calendar_today',
    avaliacao: 'person_add',
  }
  return icons[type] ?? 'info'
}

function getIconBg(type) {
  const bgs = {
    treino:    'rgba(34, 197, 94, 0.15)',
    pagamento: 'rgba(234, 179, 8, 0.15)',
    meta:      'rgba(139, 92, 246, 0.15)',
    agenda:    'rgba(100, 116, 139, 0.15)',
    avaliacao: 'rgba(100, 116, 139, 0.15)',
  }
  return bgs[type] ?? 'rgba(100,116,139,0.15)'
}

function getIconColor(type) {
  const colors = {
    treino:    '#22c55e',
    pagamento: '#eab308',
    meta:      '#8b5cf6',
    agenda:    '#94a3b8',
    avaliacao: '#94a3b8',
  }
  return colors[type] ?? '#94a3b8'
}
</script>

<style scoped>
.atividade-card {
  border-radius: 12px;
  overflow: hidden;
}

.atividade-card__header {
  display: flex;
  align-items: center;
  padding: 20px 24px;
}

.atividade-card__title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.atividade-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  margin: 4px 12px;
  border-bottom: 1px solid #ffffff08;
  transition: background 0.2s ease;
  border-radius: 12px;
}

.atividade-item:last-child {
  border-bottom: none;
}

.atividade-item:hover {
  background: rgba(0, 0, 0, 0.03);
}

.atividade-item__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.atividade-item__description {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
  flex: 1;
}

.atividade-item__time {
  font-size: 13px;
  color: #757575;
  font-weight: 400;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Responsividade */
@media (max-width: 480px) {
  .atividade-card__header {
    padding: 16px 18px;
  }

  .atividade-item {
    gap: 12px;
    padding: 12px 12px;
    margin: 4px 8px;
  }

  .atividade-item__icon {
    width: 36px;
    height: 36px;
  }

  .atividade-item__description {
    font-size: 13px;
  }

  .atividade-item__time {
    font-size: 11px;
  }
}
</style>
