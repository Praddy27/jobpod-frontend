export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profileCandidate', title: 'User Profile', icon: 'person', children: null },
    {path: 'components/price-table', title: 'My Pods', icon: 'group_work',  children: null},
    { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
        {path: 'components/price-table', title: 'Pod Table', icon: 'PT'},
      ]},
    { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
