import { Storage, File } from '@google-cloud/storage';
import { GalleryItem, GalleryProps } from 'components/Gallery';

const storage = new Storage();

const bucket = storage.bucket(process.env.GCS_BUCKET ?? '');

const blobToGalleryItem = async (blob: File): Promise<GalleryItem> => {
  const [metadata] = await blob.getMetadata();
  return {
    src: blob.publicUrl(),
    width: Number.parseInt(metadata.metadata.width, 10),
    height: Number.parseInt(metadata.metadata.height, 10),
  };
};

export default async function getGalleryUrls(generatorName: string): Promise<GalleryProps> {
  // Lists files in the bucket, filtered by a prefix
  const [landscapeFiles] = await bucket.getFiles({
    prefix: `${generatorName}/landscape`,
    maxResults: 5,
  });
  const [portraitFiles] = await bucket.getFiles({
    prefix: `${generatorName}/portrait`,
    maxResults: 5,
  });
  const [squareFiles] = await bucket.getFiles({
    prefix: `${generatorName}/square`,
    maxResults: 5,
  });

  const landscapeUrls = await Promise.all(landscapeFiles.map(blobToGalleryItem));
  const portraitUrls = await Promise.all(portraitFiles.map(blobToGalleryItem));
  const squareUrls = await Promise.all(squareFiles.map(blobToGalleryItem));

  return {
    landscapeUrls,
    portraitUrls,
    squareUrls,
  };
}

export async function getThumbnailUrl(generatorName: string): Promise<string> {
  const [files] = await bucket.getFiles({ prefix: `${generatorName}/square`, maxResults: 1 });

  if (files[0]) {
    return files[0].publicUrl();
  }
  return '/images/art/techniques/midpoint_displacement.png';
}
