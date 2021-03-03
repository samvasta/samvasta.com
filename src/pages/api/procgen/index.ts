import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import isString from 'lodash/isString';
import isFinite from 'lodash/isFinite';

const getUrl = (generator: string, width: number, height: number) => {
  return `https://us-central1-samvasta-com.cloudfunctions.net/func-procgen-1/?generator=${generator}&width=${width}&height=${height}`;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { width, height, generator },
  } = req;

  if (!isString(width) || !isString(height) || !isString(generator)) {
    res.status(400);
    return;
  }

  const widthInt = Math.round(Number.parseInt(width, 10));
  const heightInt = Math.round(Number.parseInt(height, 10));

  if (!isFinite(widthInt) || !isFinite(heightInt)) {
    res.status(400);
  }

  try {
    console.log('attempting to get token');
    const { data: token, status } = await axios.get(
      `http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=https://us-central1-samvasta-com.cloudfunctions.net/func-procgen-1`,
      {
        headers: {
          'Metadata-Flavor': 'Google',
        },
        timeout: 50000,
      },
    );
    console.log(status, token);

    const url = getUrl(generator, widthInt, heightInt);

    const { data } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });

    res.setHeader('content-type', 'application/json');
    res.setHeader('connection', 'close');
    res.status(200).send(data);
  } catch (e) {
    res.status(200).json({ error: e });
  }
};
