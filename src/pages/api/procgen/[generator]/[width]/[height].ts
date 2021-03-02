import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const getUrl = (generator: string, width: number, height: number) => {
  return `${process.env.GCR_SERVER}/generate/${generator}/${Math.round(width)}x${Math.round(
    height,
  )}`;
};

const token =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkMjg1ZWQ0ZmViY2IxYWVhZmU3ODA0NjJiYzU2OWQyMzhjNTA2ZDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyNDU2MjMxMjUxNDUyNzE2NjQ3IiwiZW1haWwiOiJzYW11ZWwubS52YXN0YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlVCMTdvWV9MYlBPY2ZoMU1rMmlpTWciLCJpYXQiOjE2MTMzNjM2MzcsImV4cCI6MTYxMzM2NzIzN30.qyVGXgoF79XlzzNopBa1jrCvqasMs105Iz-E5ap4BG-JvcrZrbbB8ctr-4hWTbOZozXWiQ7AvCbVORVz720RNJxhNPlmiIqcPazbQl8OW2qT5nd7tywNH-SXyAuVgTo8qTanWy4rSS0aAuuZdr_MM4_ZXl9YdsRpFRq9MXKvayeyjAI-3XeXVWJbv-wBXZQdyoUVIvqFpv4wW28L1M9BLoGgCOBZsmz8YCYXMHEDDtN_BTRRUrMfBiICuOjv4RexkB_fRoHGXEQlcM1A_uO2HWa_ioBHN33XK79_AQKmD2OdrRm0VH2VMrGsK3YYcBqCR-zX9DZgeuNX-qc_YO8ODA';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { width, height, generator },
  } = req;

  const url = getUrl(generator, width, height);

  try {
    const { data: image, headers } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(headers);
    console.log(JSON.stringify(image));
    // res.setHeader('Authorization', `Bearer ${token}`);
    // res.redirect(url);
    res.setHeader('content-type', 'image/png');
    res.setHeader('connection', 'close');
    // res.setHeader('Transfer-Encoding', 'chunked');
    // res.setHeader('Cache-Control', 'max-age=86400');
    // res.setHeader('Accept', 'image/png');
    res.status(200).send(image);
  } catch (e) {
    res.status(200).json({ error: e });
  }
};
