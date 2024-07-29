import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    dark: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '应用管理',
      path: '/app',
      routes: [
        {
          name: '应用列表',
          path: '/app/list',
          component: './App/List',
        },
        {
          path: '/app/:id',
          component: './App/Detail/$id',
        },
      ],
    },
    {
      name: '表单管理',
      path: '/schema',
      routes: [
        {
          name: '配置',
          path: '/schema/config',
          component: './Form/Config',
        },
        {
          name: '列表',
          path: '/schema/list',
          component: './Form/List',
        },
        {
          path: '/schema/:id',
          component: './Form/Detail/$id',
        },
      ],
    },
    {
      name: '数据管理',
      path: '/mock',
      routes: [
        {
          name: 'mock数据池',
          path: '/mock/pool',
          component: './Mock/Pool',
        },
      ],
    },
  ],
  plugins: ['@umijs/max-plugin-openapi'],
  openAPI: [
    {
      requestLibPath: 'import { request } from \'@umijs/max\'',
      // 或者使用在线的版本
      schemaPath: 'http://localhost:8888/api/v3/api-docs',
      // schemaPath: join(__dirname, 'openapi.json'),
      projectName: 'api',
      apiPrefix: '/api/',
      mock: false,
    },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8888',
      changeOrigin: true,
    },
  },
  npmClient: 'pnpm',
});

