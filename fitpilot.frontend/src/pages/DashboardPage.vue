<template>
  <q-page padding>
    <div class="row items-center justify-between">
      <div class="q-gutter-sm">
        <div class="text-h5 text-bold">Bom dia, Diogo! 💪</div>
        <div class="text-subtitle1 text-h6 text-grey-6 text-weight-regular" style="opacity: 0.5">
          Aqui está o resumo do seu dia.
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12 col-sm-6 col-md-3">
        <CardTemplate
          label="Alunos Ativos"
          :value="34"
          icon="group"
          icon-color="#22c55e"
          subtitle="+3 este mês"
          subtitle-variant="positive"
        />
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <CardTemplate
          label="Sessões Hoje"
          :value="6"
          icon="calendar_today"
          icon-color="#166634"
          subtitle="2 concluídas"
          subtitle-variant="neutral"
        />
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <CardTemplate
          label="Receita Mensal"
          :value="12850"
          prefix="R$ "
          :format-number="true"
          icon="attach_money"
          icon-color="#f97316"
          subtitle="+8.5% vs mês anterior"
          subtitle-variant="positive"
        />
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <CardTemplate
          label="Taxa de Aderência"
          :value="87"
          suffix="%"
          icon="trending_up"
          icon-color="#7c3aed"
          subtitle="+2.3% vs mês anterior"
          subtitle-variant="positive"
        />
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md items-stretch">
      <div class="col-12 col-md-8">
        <CardAgendaHoje :sessions="minhaLista" class="full-height" />
      </div>
      <div class="col-12 col-md-4">
        <CardTopAlunos :alunos="meusAlunos" class="full-height" />
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12">
        <CardAtividadesRecentes :atividades="atividades" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardAgendaHoje from 'src/components/Cards/CardAgendaHoje.vue'
import CardAtividadesRecentes from 'src/components/Cards/CardAtividadesRecentes.vue'
import CardTemplate from 'src/components/Cards/CardTemplate.vue'
import CardTopAlunos from 'src/components/Cards/CardTopAlunos.vue'
</script>
