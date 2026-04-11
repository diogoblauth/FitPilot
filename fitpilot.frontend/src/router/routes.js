const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/dashboard',
    children: [
      { path: 'dashboard',    component: () => import('pages/DashboardPage.vue')   },
      { path: 'alunos',       component: () => import('pages/AlunosPage.vue')      },
      { path: 'treinos',       component: () => import('pages/TreinosPage.vue')    }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
