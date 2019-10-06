import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Lambchop from 'lambchop';
import App from '../app';

const app = Lambchop.app({
  appName: 'nuorder',
  dataFetcher: async () => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Welcome!');
      })
    });
    return data;
  },
  render: (req, res) => {
    const { statusCode } = res;
    const { data, path, cookies } = req;
    return {
      pageMetaData: {
        title: `Nuorder`,
        description: `Nuorder`,
      },
      hashIdEndpoint: null,
      appRoot: (
        <StaticRouter location={path} context={data || {}}>
          <App
            pageData={data || {}}
            cookies={cookies}
            statusCode={statusCode}
          />
        </StaticRouter>
      ),
      headerSnippet: [],
      bodySnippet: [],
    };
  },
});

exports.handler = app.run();
