import { defineConfig } from '@umijs/max';

export default defineConfig({
  // favicons: ['assets/logo.svg'],
  antd: {
    dark: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'mock server',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      // menuRender: false,
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
      path: '/schemas',
      routes: [
        {
          path: '/schemas/:hash',
          component: './App/Schemas/$id',
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

