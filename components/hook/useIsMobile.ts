import { useLayoutEffect, useState } from 'react';

const UseIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      console.log('window.innerWidth', window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    console.log('window.innerWidth', window.innerWidth);
    window.addEventListener('resize', updateSize);
    updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default UseIsMobile;
