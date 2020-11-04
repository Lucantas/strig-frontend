export default {
  items: [
    {
      name: 'Início',
      url: '/',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      name: 'Usuários',
      url: '/users',
      icon: 'icon-user',
      badge: {
        variant: 'primary'
      }
    },
    {
      name: 'Pagamentos',
      url: '/payments',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Todos',
          url: '/payments',
          icon: 'icon-cursor'
        },
        {
          name: 'Entrada',
          url: '/payments?type=credit',
          icon: 'icon-cursor'
        },
        {
          name: 'Saída',
          url: '/payments?type=debit',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Relatórios',
      url: '/reports',
      icon: 'icon-chart',
      badge: {
        variant: 'primary'
      }
    }
    // {
    //   divider: true
    // },
    // {
    //   title: true,
    //   name: 'Relatórios'
    // },    
  ]
}
