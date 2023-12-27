import { useEffect } from 'react';

const usePageTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `Admin | ${pageTitle || 'Home'}`;

    return () => {
      // Optionally, reset the title when the component unmounts
      document.title = 'Admin';
    };
  }, [pageTitle]);
};

export default usePageTitle;
