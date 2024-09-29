import React from 'react';
import { useLocation } from 'react-router-dom';

const DirectoryDetail = () => {
  const {
    state: {
      dirInfo: { path },
    },
  } = useLocation();
  return <div>{path}</div>;
};

export default DirectoryDetail;
