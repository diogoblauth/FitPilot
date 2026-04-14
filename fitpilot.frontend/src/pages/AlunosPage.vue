<template>
  <q-page padding>
    <div class="flex justify-between items-center">
      <div class="q-gutter-sm">
        <div class="text-h5 text-bold">Alunos</div>
        <div
          class="text-subtitle1 text-h6"
          style="font-weight: 400; opacity: 0.5;"
        >
          8 alunos cadastrados
        </div>
      </div>

      <div>
        <q-btn
          no-caps
          :style="[
            'border-radius: 12px; height: 40px;',
            $q.screen.xs ? 'width: 100%' : '',
          ]"
          unelevated
          color="primary"
        >
          <Plus :size="16" />
          <span class="q-pl-xs">Novo Aluno</span>
        </q-btn>
      </div>
    </div>

    <!-- Busca + Filtros na mesma linha -->
    <div class="q-mt-md">
      <CardSearchAlunos
        v-model="searchQuery"
        @filter-change="onFilterChange"
      />
    </div>

    <div class="row q-col-gutter-md q-mt-sm">
  <div
    v-for="aluno in alunos"
    :key="aluno.name"
    class="col-12 col-sm-6 col-lg-4"
  >
    <CardAluno :aluno="aluno" />
  </div>
</div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import CardSearchAlunos from '../components/Cards/CardSearchAlunos.vue'
import CardAluno from '../components/Cards/CardAluno.vue'

const searchQuery = ref('')
const activeFilter = ref('todos')

function onFilterChange(filter) {
  activeFilter.value = filter
}

const alunos = [
  { name: 'Ana Silva',      treino: 'Musculação 5x', status: 'ativo',        adherence: 96, objetivo: 'Hipertrofia',    tags: ['hipertrofia', 'avançado'] },
  { name: 'Felipe Lima',    treino: 'Musculação 5x', status: 'inadimplente', adherence: 45, objetivo: 'Hipertrofia',    tags: ['hipertrofia'] },
  { name: 'Bruno Costa',    treino: 'Funcional 3x',  status: 'ativo',        adherence: 89, objetivo: 'Emagrecimento',  tags: ['cardio', 'iniciante'] },
  { name: 'Carla Mendes',   treino: 'Yoga 2x',       status: 'pausado',      adherence: 60, objetivo: 'Flexibilidade',  tags: ['yoga', 'intermediário'] },
  { name: 'Diego Ferreira', treino: 'Musculação 4x', status: 'inativo',      adherence: 20, objetivo: 'Força',          tags: ['força', 'avançado'] },
  { name: 'Bruno Costa',    treino: 'Funcional 3x',  status: 'ativo',        adherence: 89, objetivo: 'Emagrecimento',  tags: ['cardio', 'iniciante'] },
  { name: 'Carla Mendes',   treino: 'Yoga 2x',       status: 'pausado',      adherence: 60, objetivo: 'Flexibilidade',  tags: ['yoga', 'intermediário'] },
  { name: 'Diego Ferreira', treino: 'Musculação 4x', status: 'inativo',      adherence: 20, objetivo: 'Força',          tags: ['força', 'avançado'] },
  { name: 'Bruno Costa',    treino: 'Funcional 3x',  status: 'ativo',        adherence: 89, objetivo: 'Emagrecimento',  tags: ['cardio', 'iniciante'] },
  { name: 'Carla Mendes',   treino: 'Yoga 2x',       status: 'pausado',      adherence: 60, objetivo: 'Flexibilidade',  tags: ['yoga', 'intermediário'] },
  { name: 'Diego Ferreira', treino: 'Musculação 4x', status: 'inativo',      adherence: 20, objetivo: 'Força',          tags: ['força', 'avançado'] },
]
</script>
