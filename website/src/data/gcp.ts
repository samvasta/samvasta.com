import { Storage } from '@google-cloud/storage';
import { GalleryProps } from 'components/Gallery';

const storage = new Storage();

const bucket = storage.bucket(process.env.GCS_BUCKET ?? '');

export default async function getGalleryUrls(generatorName: string): Promise<GalleryProps> {
  // Lists files in the bucket, filtered by a prefix
  const [landscapeFiles] = await bucket.getFiles({ prefix: `${generatorName}/landscape` });
  const [portraitFiles] = await bucket.getFiles({ prefix: `${generatorName}/portrait` });
  const [squareFiles] = await bucket.getFiles({ prefix: `${generatorName}/square` });

  return {
    landscapeUrls: landscapeFiles.map((f) => f.publicUrl()),
    portraitUrls: portraitFiles.map((f) => f.publicUrl()),
    squareUrls: squareFiles.map((f) => f.publicUrl()),
  };
}
