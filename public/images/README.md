# Images Directory

Place your local images in this directory. Supported formats:
- .jpg
- .jpeg
- .png
- .gif
- .webp
- .avif

Example usage in components:
```jsx
import Image from 'next/image';
import localImage from '@/public/images/your-image.jpg';

// Then in your component:
<Image 
  src={localImage}
  alt="Description"
  width={500}
  height={300}
/>
```