import React, { ReactNode } from 'react';
import { GoFileDirectoryFill } from 'react-icons/go';
import { FaFile } from 'react-icons/fa';
import { BiSolidFileTxt } from 'react-icons/bi';
import { BsFiletypeMp3 } from 'react-icons/bs';
import { BsFiletypePdf } from 'react-icons/bs';
import { BsFiletypeXls } from 'react-icons/bs';
import { BsFiletypeXlsx } from 'react-icons/bs';
import { BsFiletypePpt } from 'react-icons/bs';
import { BsFiletypePptx } from 'react-icons/bs';
import { PiFileDocDuotone } from 'react-icons/pi';
import { BsFiletypeDocx } from 'react-icons/bs';

const fileIconMap: Map<string, ReactNode> = new Map([
  ['txt', <BiSolidFileTxt />],
  ['mp3', <BsFiletypeMp3 />],
  ['pdf', <BsFiletypePdf />],
  ['xls', <BsFiletypeXls />],
  ['xlsx', <BsFiletypeXlsx />],
  ['ppt', <BsFiletypePpt />],
  ['pptx', <BsFiletypePptx />],
  ['doc', <PiFileDocDuotone />],
  ['docx', <BsFiletypeDocx />],
]);

function getFileIcon(ext?: string): ReactNode {
  if (ext && fileIconMap.has(ext)) {
    return fileIconMap.get(ext);
  }
  return <FaFile />;
}

interface IProps {
  dType: string;
  ext?: string;
}

const StorageIcon = (props: IProps) => {
  const { dType, ext } = props;
  return (
    <>
      {dType === 'D' && <GoFileDirectoryFill />}
      {dType === 'F' && getFileIcon(ext)}
    </>
  );
};

export default StorageIcon;
