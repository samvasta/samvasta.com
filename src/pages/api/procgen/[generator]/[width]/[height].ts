import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

const getUrl = (generator: string, width: number, height: number) => {
  return `${process.env.GCR_SERVER}/generate/${generator}/${Math.round(width)}x${Math.round(
    height,
  )}`;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { width, height, generator },
  } = req;

  if (!isNumber(width) || !isNumber(height) || !isString(generator)) {
    res.status(400);
    return;
  }

  const url = getUrl(generator, width, height);

  try {
    const { data } = await axios.get(url);

    res.setHeader('content-type', 'application/json');
    res.setHeader('connection', 'close');
    res.status(200).send(data);
  } catch (e) {
    res.status(200).json({ error: e });
  }
};
