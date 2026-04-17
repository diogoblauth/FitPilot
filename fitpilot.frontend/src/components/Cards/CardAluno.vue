<template>
  <q-card class="aluno-card overflow-hidden" flat style="border-radius: 14px">
    <q-card-section
      class="aluno-card__section--header row items-center no-wrap"
      style="gap: 14px; padding: 18px 20px 10px"
    >
      <div
        class="row items-center justify-center bg-primary text-white"
        style="width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0"
      >
        <span class="text-weight-bold" style="font-size: 15px; letter-spacing: 0.02em">{{
          getInitials(aluno.name)
        }}</span>
      </div>

      <div class="column col" style="gap: 2px; min-width: 0">
        <span
          class="aluno-card__name ellipsis text-weight-bold"
          style="font-size: 16px; line-height: 1.2"
          >{{ aluno.name }}</span
        >
        <span class="text-grey-7" style="font-size: 13px; font-weight: 400">{{
          aluno.treino
        }}</span>
      </div>

      <q-btn flat round dense icon="more_vert" class="aluno-card__menu-btn" size="sm" />
    </q-card-section>

    <q-card-section
      class="aluno-card__section--status row items-center justify-between"
      style="padding: 8px 18px"
    >
      <div
        class="row items-center no-wrap"
        :style="{ backgroundColor: getStatusBg(aluno.status), color: getStatusColor(aluno.status) }"
        style="gap: 6px; padding: 4px 12px; border-radius: 23px; font-size: 13px; font-weight: 600"
      >
        <span
          :style="{ backgroundColor: getStatusColor(aluno.status) }"
          style="width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0"
        />
        <span>{{ getStatusLabel(aluno.status) }}</span>
      </div>

      <span style="font-size: 13px; font-weight: 300">
        Aderência:
        <strong :style="{ color: getAdherenceColor(aluno.adherence) }"
          >{{ aluno.adherence }}%</strong
        >
      </span>
    </q-card-section>

    <q-card-section
      class="aluno-card__section--goal row items-baseline"
      style="gap: 6px; padding: 0 20px 10px"
    >
      <span class="text-grey-7" style="font-size: 13px; font-weight: 400"
        >Objetivo:</span
      >
      <span class="text-weight-medium" style="font-size: 14px">{{ aluno.objetivo }}</span>
    </q-card-section>

    <q-card-section class="aluno-card__section--tags row" style="gap: 8px; padding: 0 20px 8px">
      <span
        v-for="tag in aluno.tags"
        :key="tag"
        style="
          font-size: 12px;
          font-weight: 600;
          color: #8b5cf6;
          background: rgba(139, 92, 246, 0.12);
          padding: 2px 10px;
          border-radius: 23px;
        "
      >
        #{{ tag }}
      </span>
    </q-card-section>

    <q-card-section
      class="aluno-card__section--contact row items-center"
      style="gap: 20px; padding: 6px 20px 12px"
    >
      <button type="button" class="aluno-card__contact-btn row items-center no-wrap">
        <q-icon name="mail_outline" size="16px" />
        <span class="aluno-card__contact-label">E-mail</span>
      </button>
      <button type="button" class="aluno-card__contact-btn row items-center no-wrap">
        <q-icon name="phone" size="16px" />
        <span class="aluno-card__contact-label">WhatsApp</span>
      </button>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  aluno: {
    type: Object,
    default: () => ({
      name: 'Ana Silva',
      treino: 'Musculação 5x',
      status: 'ativo',
      adherence: 96,
      objetivo: 'Hipertrofia',
      tags: ['hipertrofia', 'avançado'],
    }),
  },
})

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}

function getStatusLabel(status) {
  const labels = {
    ativo: 'Ativo',
    pausado: 'Pausado',
    inadimplente: 'Inadimplente',
    inativo: 'Inativo',
  }

  return labels[status] ?? status
}

function getStatusColor(status) {
  const colors = {
    ativo: '#22c55e',
    pausado: '#94a3b8',
    inadimplente: '#ef4444',
    inativo: '#64748b',
  }

  return colors[status] ?? '#94a3b8'
}

function getStatusBg(status) {
  const bgs = {
    ativo: 'rgba(34, 197, 94, 0.12)',
    pausado: 'rgba(148, 163, 184, 0.12)',
    inadimplente: 'rgba(239, 68, 68, 0.12)',
    inativo: 'rgba(100, 116, 139, 0.12)',
  }

  return bgs[status] ?? 'rgba(148, 163, 184, 0.12)'
}

function getAdherenceColor(value) {
  if (value >= 80) return '#22c55e'
  if (value >= 50) return '#eab308'
  return '#ef4444'
}
</script>

<style scoped>
.aluno-card {
  border: 1px solid rgba(117, 117, 117, 0.5);
  transition: border-color 0.3s ease;
  cursor: pointer;
}

.aluno-card:hover {
  border-color: color-mix(in srgb, var(--q-primary) 50%, transparent);
}

.aluno-card__menu-btn {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
}

.aluno-card:hover .aluno-card__menu-btn {
  opacity: 0.7;
  visibility: visible;
}

.aluno-card__contact-btn {
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  padding: 0;
  transition: color 0.15s ease;
}

.aluno-card__contact-btn :deep(.q-icon) {
  opacity: 0.55;
  transition:
    color 0.15s ease,
    opacity 0.15s ease;
}

.aluno-card__contact-label {
  opacity: 1;
}

.aluno-card__contact-btn:hover {
  color: var(--q-primary);
}

.aluno-card__contact-btn:hover :deep(.q-icon) {
  opacity: 1;
}

@media (max-width: 480px) {
  .aluno-card__section--header {
    padding: 16px 16px 12px !important;
  }

  .aluno-card__section--status,
  .aluno-card__section--goal,
  .aluno-card__section--tags,
  .aluno-card__section--contact {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .aluno-card__name {
    font-size: 15px !important;
  }
}
</style>
