<template>
  <q-card class="top-alunos-card" flat bordered>
    <q-card-section class="top-alunos-card__header">
      <div class="top-alunos-card__header-info">
        <span class="top-alunos-card__title">Top Alunos</span>
        <span class="top-alunos-card__subtitle">{{ subtitle }}</span>
      </div>
    </q-card-section>

    <q-separator color="grey-7" style="opacity: 0.2;" />

    <q-card-section class="q-pa-none q-pb-sm">
      <div
        v-for="(aluno, index) in alunos"
        :key="index"
        class="aluno-item"
      >
        <!-- Avatar com iniciais -->
        <div class="aluno-item__avatar">
          <span class="aluno-item__initials">{{ getInitials(aluno.name) }}</span>
        </div>

        <!-- Info -->
        <div class="aluno-item__info">
          <span class="aluno-item__name">{{ aluno.name }}</span>
          <span class="aluno-item__streak">🔥 {{ aluno.streak }} dias seguidos</span>
        </div>

        <!-- Percentual de aderência -->
        <div class="aluno-item__adherence">
          <span class="aluno-item__percent">{{ aluno.adherence }}%</span>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: 'Por aderência no mês',
  },

  alunos: {
    type: Array,
    default: () => [
      { name: 'Ana Silva',      streak: 23, adherence: 96 },
      { name: 'Bruno Costa',    streak: 15, adherence: 89 },
      { name: 'Carla Mendes',   streak: 12, adherence: 85 },
      { name: 'Diego Ferreira', streak: 8,  adherence: 78 },
    ],
  },
})

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}
</script>

<style scoped>
.top-alunos-card {
  border-radius: 12px;
  overflow: hidden;
}

.top-alunos-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
}

.top-alunos-card__header-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.top-alunos-card__title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.top-alunos-card__subtitle {
  font-size: 13px;
  opacity: 0.5;
  font-weight: 400;
}

.aluno-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  margin: 4px 12px;
  border-bottom: 1px solid #ffffff08;
  transition: background 0.2s ease;
  border-radius: 12px;
}

.aluno-item:last-child {
  border-bottom: none;
}

.aluno-item:hover {
  background: rgba(0, 0, 0, 0.03);
}

.aluno-item__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--q-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.aluno-item__initials {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.aluno-item__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.aluno-item__name {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
}

.aluno-item__streak {
  font-size: 12px;
  opacity: 0.5;
  font-weight: 400;
}

.aluno-item__adherence {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.aluno-item__percent {
  font-size: 15px;
  font-weight: 700;
  color: var(--q-primary);
}
</style>
