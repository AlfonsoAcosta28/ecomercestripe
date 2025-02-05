import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qyatp684', // Tu ID de proyecto en Sanity
  dataset: 'production', // Dataset que estás usando
  apiVersion: '2025-01-29', // Versión de la API de Sanity
  useCdn: true, // Habilita CDN para mejorar la velocidad
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Token de acceso
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
