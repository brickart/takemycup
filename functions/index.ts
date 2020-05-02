import * as functions from 'firebase-functions';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

// export const nextApp = functions.https.onRequest((req, res) => {
//   return app.prepare().then(() => handle(req, res));
// });

export const nextApp = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
});
