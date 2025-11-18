import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({ 
  cloud: { 
    cloudName: 'dqs9oiho2' 
  } 
});

// Function to generate Cloudinary image URLs
export const getCloudinaryImage = (folder, imageName, transformations = '') => {
  // Remove file extension if present and keep the full path
  const nameWithoutExt = imageName.replace(/\.[^/.]+$/, "");
  return `https://res.cloudinary.com/dqs9oiho2/image/upload/${transformations}v1/${folder}/${nameWithoutExt}`;
};

// Alternative simpler version
export const getCloudinaryImageSimple = (folder, imageName) => {
  return `https://res.cloudinary.com/dqs9oiho2/image/upload/${folder}/${imageName}`;
};

// For the AdvancedImage component
export const getAdvancedImage = (publicId, transformations = {}) => {
  return cld.image(publicId).format('auto').quality('auto');
};

export default cld;