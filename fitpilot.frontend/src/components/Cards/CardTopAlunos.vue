<template>
  <q-card flat bordered class="overflow-hidden" style="border-radius: 12px">
    <q-card-section class="row items-center justify-between" style="padding: 20px 24px">
      <div class="column" style="gap: 2px">
        <span class="text-weight-bold" style="font-size: 18px; letter-spacing: -0.01em"
          >Top Alunos</span
        >
        <span class="text-grey-6" style="font-size: 13px; font-weight: 400; opacity: 0.5">{{
          subtitle
        }}</span>
      </div>
    </q-card-section>

    <q-separator color="grey-7" style="opacity: 0.2" />

    <q-card-section class="q-pa-none q-pb-sm">
      <div
        v-for="(aluno, index) in alunos"
        :key="index"
        class="aluno-item row items-center no-wrap"
      >
        <div
          class="row items-center justify-center bg-primary text-white"
          style="width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0"
        >
          <span class="text-weight-bold" style="font-size: 14px; letter-spacing: 0.02em">{{
            getInitials(aluno.name)
          }}</span>
        </div>

        <div class="column col" style="gap: 2px">
          <span class="text-weight-medium" style="font-size: 15px; line-height: 1.2">{{
            aluno.name
          }}</span>
          <span class="text-grey-6" style="font-size: 12px; font-weight: 400; opacity: 0.5"
            >🔥 {{ aluno.streak }} dias seguidos</span
          >
        </div>

        <div class="row items-center no-wrap">
          <span class="text-primary text-weight-bold" style="font-size: 15px"
            >{{ aluno.adherence }}%</span
          >
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
      { name: 'Ana Silva', streak: 23, adherence: 96 },
      { name: 'Bruno Costa', streak: 15, adherence: 89 },
      { name: 'Carla Mendes', streak: 12, adherence: 85 },
      { name: 'Diego Ferreira', streak: 8, adherence: 78 },
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
.aluno-item {
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
</style>
