<template>
  <div class="search-filter-row">
    <!-- Campo de busca -->
    <div class="search-card" :class="{ 'search-card--focused': isFocused }">
      <q-icon name="search" size="18px" class="search-card__icon" />
      <input
        v-model="query"
        class="search-card__input"
        placeholder="Buscar por nome ou objetivo..."
        @input="$emit('update:modelValue', query)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <q-icon
        v-if="query"
        name="close"
        size="16px"
        class="search-card__clear"
        @click="clear"
      />
    </div>

    <!-- Filtros de status -->
    <div class="filter-chips">
      <button
        v-for="filter in filters"
        :key="filter.key"
        class="filter-chip"
        :class="{ 'filter-chip--active': activeFilter === filter.key }"
        @click="setFilter(filter.key)"
      >
        <span class="filter-chip__label">{{ filter.label }}</span>
        <span class="filter-chip__count">{{ filter.count }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  filters: {
    type: Array,
    default: () => [
      { key: 'todos',         label: 'Todos',         count: 8 },
      { key: 'ativos',        label: 'Ativos',        count: 5 },
      { key: 'pausados',      label: 'Pausados',      count: 1 },
      { key: 'inadimplentes', label: 'Inadimplentes', count: 1 },
      { key: 'inativos',      label: 'Inativos',      count: 1 },
    ],
  },
})

const emit = defineEmits(['update:modelValue', 'filter-change'])

const query = ref('')
const activeFilter = ref('todos')
const isFocused = ref(false)

function clear() {
  query.value = ''
  emit('update:modelValue', '')
}

function setFilter(key) {
  activeFilter.value = key
  emit('filter-change', key)
}
</script>

<style scoped>
.search-filter-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
}

/* ── Search ── */
.search-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background: rgba(128, 128, 128, 0.06);
  transition: border-color 0.42s ease, background 0.2s ease;
  min-width: 400px;
  max-width: 420px;
}

.search-card:hover:not(.search-card--focused) {
  border-color: rgba(128, 128, 128, 0.45);
}

.search-card--focused {
  border-color: var(--q-primary);
  background: rgba(128, 128, 128, 0.06);
}

.search-card__icon {
  opacity: 0.4;
  flex-shrink: 0;
}

.search-card__input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: inherit;
  opacity: 0.6;
  min-width: 0;
}

.search-card__input::placeholder {
  color: inherit;
  opacity: 0.6;
}

.search-card__input:focus {
  opacity: 1;
}

.search-card__clear {
  opacity: 0.35;
  flex-shrink: 0;
  cursor: pointer;
  color: inherit;
  transition: opacity 0.15s ease;
}

.search-card__clear:hover {
  opacity: 0.7;
}

/* ── Filter Chips ── */
.filter-chips {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;        /* não quebra linha */
  overflow-x: auto;         /* scroll horizontal */
  -webkit-overflow-scrolling: touch; /* scroll suave no iOS */
  scrollbar-width: none;    /* esconde barra no Firefox */
  -ms-overflow-style: none; /* esconde barra no IE/Edge */
  min-width: 0;             /* permite encolher dentro do flex pai */
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
}

.filter-chip:hover {
  border-color: rgba(128, 128, 128, 0.45);
}

.filter-chip--active {
  background: rgba(var(--q-primary-rgb, 34, 197, 94), 0.15);
  border-color: var(--q-primary);
}

.filter-chip__label {
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  opacity: 0.7;
}

.filter-chip--active .filter-chip__label {
  opacity: 1;
  color: var(--q-primary);
}

.filter-chip__count {
  font-size: 12px;
  font-weight: 600;
  color: inherit;
  opacity: 0.45;
}

.filter-chip--active .filter-chip__count {
  opacity: 1;
  color: var(--q-primary);
}

.filter-chips::-webkit-scrollbar {
  display: none;
}
/* ── Responsividade ── */
@media (max-width: 1180px) {
  .search-filter-row {
    flex-direction: column;
    align-items: stretch; /* filhos esticam para ocupar a largura total */
  }

  .search-card {
    min-width: unset;
    max-width: unset;
    width: 100%; /* mesmo tamanho da linha dos chips */
  }

  .filter-chips {
    width: 100%;
    gap: 6px;
  }

  .filter-chip {
    padding: 6px 10px;
  }

  .filter-chip__label {
    font-size: 12px;
  }
}
</style>
