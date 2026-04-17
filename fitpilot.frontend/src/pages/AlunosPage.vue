<template>
  <q-page padding>
    <div class="row items-center justify-between">
      <div class="q-gutter-sm">
        <div class="text-h5 text-bold">Alunos</div>
        <div class="text-subtitle1 text-h6 text-grey-7 text-weight-regular">
          8 alunos cadastrados
        </div>
      </div>

      <div>
        <q-btn
          no-caps
          unelevated
          color="primary"
          class="rounded-borders"
          :class="{ 'full-width': $q.screen.xs }"
          style="height: 40px; border-radius: 12px"
        >
          <Plus :size="16" />
          <span class="q-pl-xs">Novo Aluno</span>
        </q-btn>
      </div>
    </div>

    <div class="q-mt-md">
      <CardSearchAlunos v-model="searchQuery" @filter-change="onFilterChange" />
    </div>

    <div class="row q-col-gutter-md q-mt-sm">
      <div v-for="aluno in alunos" :key="aluno.name" class="col-12 col-sm-6 col-lg-4">
        <CardAluno :aluno="aluno" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { Plus } from 'lucide-vue-next'
import { ref } from 'vue'

import CardAluno from 'src/components/Cards/CardAluno.vue'
import CardSearchAlunos from 'src/components/Cards/CardSearchAlunos.vue'

const searchQuery = ref('')
const activeFilter = ref('todos')

function onFilterChange(filter) {
  activeFilter.value = filter
}

const alunos = [
  {
    name: 'Ana Silva',
    treino: 'Musculação 5x',
    status: 'ativo',
    adherence: 96,
    objetivo: 'Hipertrofia',
    tags: ['hipertrofia', 'avançado'],
  },
  {
    name: 'Felipe Lima',
    treino: 'Musculação 5x',
    status: 'inadimplente',
    adherence: 45,
    objetivo: 'Hipertrofia',
    tags: ['hipertrofia'],
  },
  {
    name: 'Bruno Costa',
    treino: 'Funcional 3x',
    status: 'ativo',
    adherence: 89,
    objetivo: 'Emagrecimento',
    tags: ['cardio', 'iniciante'],
  },
  {
    name: 'Carla Mendes',
    treino: 'Yoga 2x',
    status: 'pausado',
    adherence: 60,
    objetivo: 'Flexibilidade',
    tags: ['yoga', 'intermediário'],
  },
  {
    name: 'Diego Ferreira',
    treino: 'Musculação 4x',
    status: 'inativo',
    adherence: 20,
    objetivo: 'Força',
    tags: ['força', 'avançado'],
  },
  {
    name: 'Bruno Costa',
    treino: 'Funcional 3x',
    status: 'ativo',
    adherence: 89,
    objetivo: 'Emagrecimento',
    tags: ['cardio', 'iniciante'],
  },
  {
    name: 'Carla Mendes',
    treino: 'Yoga 2x',
    status: 'pausado',
    adherence: 60,
    objetivo: 'Flexibilidade',
    tags: ['yoga', 'intermediário'],
  },
  {
    name: 'Diego Ferreira',
    treino: 'Musculação 4x',
    status: 'inativo',
    adherence: 20,
    objetivo: 'Força',
    tags: ['força', 'avançado'],
  },
  {
    name: 'Bruno Costa',
    treino: 'Funcional 3x',
    status: 'ativo',
    adherence: 89,
    objetivo: 'Emagrecimento',
    tags: ['cardio', 'iniciante'],
  },
  {
    name: 'Carla Mendes',
    treino: 'Yoga 2x',
    status: 'pausado',
    adherence: 60,
    objetivo: 'Flexibilidade',
    tags: ['yoga', 'intermediário'],
  },
  {
    name: 'Diego Ferreira',
    treino: 'Musculação 4x',
    status: 'inativo',
    adherence: 20,
    objetivo: 'Força',
    tags: ['força', 'avançado'],
  },
]
</script>
