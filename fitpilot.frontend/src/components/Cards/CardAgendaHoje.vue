<template>
  <q-card class="agenda-card" flat bordered>
    <q-card-section class="agenda-card__header">
      <span class="agenda-card__title">Agenda de Hoje</span>
      <span class="agenda-card__date">{{ formattedDate }}</span>
    </q-card-section>

    <q-separator color="grey-7" style="opacity: 0.2;"/>

    <q-card-section class="q-pa-none">
      <div
        v-for="(session, index) in sessions"
        :key="index"
        class="agenda-item"
        :class="{ 'agenda-item--now': session.status === 'now' }"
      >
        <span class="agenda-item__time">{{ session.time }}</span>

        <div class="agenda-item__info">
          <span class="agenda-item__name">{{ session.name }}</span>
          <span class="agenda-item__type">{{ session.type }}</span>
        </div>

        <!-- Status -->
        <div class="agenda-item__status">
          <!-- Concluído -->
          <template v-if="session.status === 'done'">
            <span class="agenda-item__status--done">✓ Concluído</span>
          </template>

          <!-- Agora -->
          <template v-else-if="session.status === 'now'">
            <span class="agenda-item__status--now">● Agora</span>
          </template>

          <!-- Pendente -->
          <template v-else>
            <q-icon name="schedule" size="20px" color="grey-6" />
          </template>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  sessions: {
    type: Array,
    default: () => [
      { name: 'Ana Silva',      type: 'Treino',      time: '06:00', status: 'done'    },
      { name: 'Bruno Costa',    type: 'Treino',      time: '07:00', status: 'done'    },
      { name: 'Carla Mendes',   type: 'Avaliação',   time: '08:30', status: 'now'     },
      { name: 'Diego Ferreira', type: 'Treino',      time: '10:00', status: 'pending' },
      { name: 'Elena Souza',    type: 'Reavaliação', time: '14:00', status: 'pending' },
      { name: 'Felipe Lima',    type: 'Treino',      time: '16:00', status: 'pending' },
    ],
  },

})

const formattedDate = computed(() => {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  })
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/^(\w+)-feira/, (_, d) => d.charAt(0).toUpperCase() + d.slice(1))
    .replace(/ de (\w)/, (_, m) => ` de ${m.toUpperCase()}${  ''}`)
    .replace(/,.*$/, (s) => s.replace(/(\d+) de (\w+)/, (_, d, m) => `${d} de ${m.charAt(0).toUpperCase()}${m.slice(1)}`))
})
</script>

<style scoped>
.agenda-card {
  border-radius: 12px;
  overflow: hidden;
}

.agenda-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
}

.agenda-card__title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.agenda-card__date {
  font-size: 13px;
  color: #757575;
  font-weight: 400;
}

.agenda-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 16px;
  margin: 4px 12px;
  border-bottom: 1px solid #ffffff08;
  transition: background 0.2s ease;
  border-radius: 12px;
}

.agenda-item:last-child {
  border-bottom: none;
}

.agenda-item:hover:not(.agenda-item--now) {
  background: rgba(0, 0, 0, 0.03);
}

.agenda-item--now {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 12px;
  margin: 4px 12px;
  padding: 14px 16px;
}

.agenda-item__time {
  font-size: 13px;
  color: #757575;
  font-weight: 500;
  min-width: 38px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

.agenda-item__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.agenda-item__name {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
}

.agenda-item__type {
  font-size: 12px;
  color: #757575;
  font-weight: 400;
}

.agenda-item__status {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.agenda-item__status--done {
  font-size: 13px;
  font-weight: 500;
  color: var(--q-primary);
}

.agenda-item__status--now {
  font-size: 13px;
  font-weight: 600;
  color: var(--q-primary);
}
</style>
