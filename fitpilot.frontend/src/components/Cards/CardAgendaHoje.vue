<template>
  <q-card flat bordered class="overflow-hidden" style="border-radius: 12px">
    <q-card-section class="row items-center justify-between" style="padding: 20px 24px">
      <span class="text-weight-bold" style="font-size: 18px; letter-spacing: -0.01em"
        >Agenda de Hoje</span
      >
      <span class="text-grey-6" style="font-size: 13px; font-weight: 400; opacity: 0.5">{{
        formattedDate
      }}</span>
    </q-card-section>

    <q-separator color="grey-7" style="opacity: 0.2" />

    <q-card-section class="q-pa-none">
      <div
        v-for="(session, index) in sessions"
        :key="index"
        class="agenda-item row items-center no-wrap"
        :class="{ 'agenda-item--now': session.status === 'now' }"
      >
        <span
          class="text-grey-6 text-weight-medium"
          style="
            font-size: 13px;
            min-width: 38px;
            font-variant-numeric: tabular-nums;
            letter-spacing: 0.02em;
            opacity: 0.5;
          "
        >
          {{ session.time }}
        </span>

        <div class="column col" style="gap: 2px">
          <span class="text-weight-medium" style="font-size: 15px; line-height: 1.2">{{
            session.name
          }}</span>
          <span class="text-grey-6" style="font-size: 12px; font-weight: 400; opacity: 0.5">{{
            session.type
          }}</span>
        </div>

        <div class="row items-center no-wrap" style="flex-shrink: 0">
          <template v-if="session.status === 'done'">
            <span class="text-primary text-weight-medium" style="font-size: 13px">✓ Concluído</span>
          </template>

          <template v-else-if="session.status === 'now'">
            <span class="text-primary" style="font-size: 13px; font-weight: 600">● Agora</span>
          </template>

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
      { name: 'Ana Silva', type: 'Treino', time: '06:00', status: 'done' },
      { name: 'Bruno Costa', type: 'Treino', time: '07:00', status: 'done' },
      { name: 'Carla Mendes', type: 'Avaliação', time: '08:30', status: 'now' },
      { name: 'Diego Ferreira', type: 'Treino', time: '10:00', status: 'pending' },
      { name: 'Elena Souza', type: 'Reavaliação', time: '14:00', status: 'pending' },
      { name: 'Felipe Lima', type: 'Treino', time: '16:00', status: 'pending' },
    ],
  },
})

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  })
    .format(new Date())
    .replace('-feira', '')
    .replace(/\b\p{L}/gu, (char) => char.toUpperCase())
})
</script>

<style scoped>
.agenda-item {
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
}
</style>
