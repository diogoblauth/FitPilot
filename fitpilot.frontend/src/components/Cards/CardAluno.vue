<template>
  <q-card class="aluno-card" flat>
    <!-- Header: Avatar + Nome + Menu -->
    <q-card-section class="aluno-card__header">
      <!-- Avatar -->
      <div class="aluno-card__avatar">
        <span class="aluno-card__initials">{{ getInitials(aluno.name) }}</span>
      </div>

      <!-- Nome e treino -->
      <div class="aluno-card__info">
        <span class="aluno-card__name">{{ aluno.name }}</span>
        <span class="aluno-card__treino">{{ aluno.treino }}</span>
      </div>

      <!-- Menu (três pontos) -->
      <q-btn
        flat
        round
        dense
        icon="more_vert"
        class="aluno-card__menu-btn"
        size="sm"
      >

      </q-btn>
    </q-card-section>

    <!-- Status + Aderência -->
    <q-card-section class="aluno-card__status-row">
      <div
        class="aluno-card__status-badge"
        :style="{ backgroundColor: getStatusBg(aluno.status), color: getStatusColor(aluno.status) }"
      >
        <span class="aluno-card__status-dot" :style="{ backgroundColor: getStatusColor(aluno.status) }" />
        <span class="aluno-card__status-label">{{ getStatusLabel(aluno.status) }}</span>
      </div>

      <span class="aluno-card__adherence">
        Aderência:
        <strong :style="{ color: getAdherenceColor(aluno.adherence) }">{{ aluno.adherence }}%</strong>
      </span>
    </q-card-section>

    <!-- Objetivo -->
    <q-card-section class="aluno-card__objetivo-row">
      <span class="aluno-card__objetivo-label">Objetivo:</span>
      <span class="aluno-card__objetivo-value">{{ aluno.objetivo }}</span>
    </q-card-section>

    <!-- Tags -->
    <q-card-section class="aluno-card__tags-row">
      <span
        v-for="tag in aluno.tags"
        :key="tag"
        class="aluno-card__tag"
      >
        #{{ tag }}
      </span>
    </q-card-section>

    <q-separator style="color: rgba(117, 117, 117, 0.5)" />

    <!-- Contato -->
    <q-card-section class="aluno-card__contact-row">
      <button class="aluno-card__contact-btn">
        <q-icon name="mail_outline" size="16px" />
        <span>E-mail</span>
      </button>
      <button class="aluno-card__contact-btn">
        <q-icon name="phone" size="16px" />
        <span>WhatsApp</span>
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
    .map((w) => w.charAt(0).toUpperCase())
    .join('')
}

function getStatusLabel(status) {
  const labels = {
    ativo:         'Ativo',
    pausado:       'Pausado',
    inadimplente:  'Inadimplente',
    inativo:       'Inativo',
  }
  return labels[status] ?? status
}

function getStatusColor(status) {
  const colors = {
    ativo:        '#22c55e',
    pausado:      '#94a3b8',
    inadimplente: '#ef4444',
    inativo:      '#64748b',
  }
  return colors[status] ?? '#94a3b8'
}

function getStatusBg(status) {
  const bgs = {
    ativo:        'rgba(34, 197, 94, 0.12)',
    pausado:      'rgba(148, 163, 184, 0.12)',
    inadimplente: 'rgba(239, 68, 68, 0.12)',
    inativo:      'rgba(100, 116, 139, 0.12)',
  }
  return bgs[status] ?? 'rgba(148,163,184,0.12)'
}

function getAdherenceColor(value) {
  if (value >= 80) return '#22c55e'
  if (value >= 50) return '#eab308'
  return '#ef4444'
}
</script>

<style scoped>
.aluno-card {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(117, 117, 117, 0.5);
  transition: border-color 0.3s ease;
  cursor: pointer;
}

.aluno-card:hover {
border-color: color-mix(in srgb, var(--q-primary) 50%, transparent);
}

/* ── Header ── */
.aluno-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px 10px;
}

.aluno-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--q-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.aluno-card__initials {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.aluno-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.aluno-card__name {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.aluno-card__treino {
  font-size: 13px;
  opacity: 0.5;
  font-weight: 400;
}

.aluno-card__menu-btn {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
}

.aluno-card:hover .aluno-card__menu-btn {
  opacity: 0.7;
  visibility: visible;
}

/* ── Status + Aderência ── */
.aluno-card__status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
}

.aluno-card__status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 23px;
  font-size: 13px;
  font-weight: 600;
}

.aluno-card__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.aluno-card__adherence {
  font-size: 13px;
  font-weight: 300;
}

.aluno-card__adherence strong {
  font-weight: 700;
}

/* ── Objetivo ── */
.aluno-card__objetivo-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 0 20px 10px;
}

.aluno-card__objetivo-label {
  font-size: 13px;
  opacity: 0.5;
  font-weight: 400;
}

.aluno-card__objetivo-value {
  font-size: 14px;
  font-weight: 500;
}

/* ── Tags ── */
.aluno-card__tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 20px 16px;
}

.aluno-card__tag {
  font-size: 12px;
  font-weight: 600;
  color: #8b5cf6;
  background: rgba(139, 92, 246, 0.12);
  padding: 2px 10px;
  border-radius: 23px;
}

/* ── Contato ── */
.aluno-card__contact-row {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 20px;
}

.aluno-card__contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  opacity: 0.55;
  padding: 0;
  transition: color 0.15s ease, opacity 0.15s ease;
}

.aluno-card__contact-btn:hover {
  opacity: 1;
  color: var(--q-primary);
}

/* ── Responsividade ── */
@media (max-width: 480px) {
  .aluno-card__header {
    padding: 16px 16px 12px;
  }

  .aluno-card__status-row,
  .aluno-card__objetivo-row,
  .aluno-card__tags-row,
  .aluno-card__contact-row {
    padding-left: 16px;
    padding-right: 16px;
  }

  .aluno-card__name {
    font-size: 15px;
  }
}
</style>
