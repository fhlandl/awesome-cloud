import React from 'react';
import { useLocation } from 'react-router-dom';
import useFileSystemContext from '../context/useFileSystemContext';
import { observer } from 'mobx-react-lite';
import styles from './DirectoryDetail.module.scss';
import StorageIcon from '../components/ui/StorageIcon';

const Drive = () => {
  const { pathname } = useLocation();

  const { cloudStorage } = useFileSystemContext();
  const PATH_DELIMITER = '/';

  const nodeId = parseInt(
    (pathname as string).split(PATH_DELIMITER).reverse()[0],
    10
  );

  const node = cloudStorage.findNodeById(nodeId);

  return (
    <section className={styles.page}>
      <div className={styles.titleArea}>
        <h1 className={styles.titleText}>{node?.name}</h1>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.column_first}>이름</th>
              <th className={styles.column_second}>소유자</th>
              <th className={styles.column_third}>마지막으로 수정한 날짜</th>
              <th className={styles.column_fourth}>파일 크기</th>
            </tr>
          </thead>
          <tbody>
            {node?.children.map((child) => {
              const ext = child.name.includes('.')
                ? child.name.split('.').reverse()[0]
                : undefined;
              return (
                <tr
                  key={`directory-detail-${nodeId}-${child.id}`}
                  className={styles.dataRow}
                >
                  <td>
                    <div className={styles.nameArea}>
                      <StorageIcon dType={child.dType} ext={ext} />
                      <span>{child.name}</span>
                    </div>
                  </td>
                  <td>{child.userName}</td>
                  <td>{child.lastModifiedAt}</td>
                  <td>1MB</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default observer(Drive);
