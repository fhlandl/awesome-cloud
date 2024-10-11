import React from 'react';
import { useLocation } from 'react-router-dom';
import useFileSystemContext from '../context/useFileSystemContext';
import styles from './DirectoryDetail.module.scss';
import { observer } from 'mobx-react-lite';

const DirectoryDetail = () => {
  const {
    state: {
      dirInfo: { path },
    },
  } = useLocation();

  const { cloudStorage } = useFileSystemContext();
  const PATH_DELIMITER = '/';

  const nodeId = parseInt(
    (path as string).split(PATH_DELIMITER).reverse()[0],
    10
  );

  const node = cloudStorage.findNodeById(nodeId);

  return (
    <section className={styles.page}>
      {node?.children.map((child) => {
        return <div>{child.name}</div>;
      })}
    </section>
  );
};

export default observer(DirectoryDetail);
