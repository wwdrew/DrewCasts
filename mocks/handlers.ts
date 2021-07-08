import { rest } from 'msw';

export const handlers = [
  rest.get('http://mytest.api/login', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: 'Drew' }));
  }),

  rest.get('http:/mytest.api/user', (_req, res, ctx) => {
    return res(ctx.status(403));
  }),
];
