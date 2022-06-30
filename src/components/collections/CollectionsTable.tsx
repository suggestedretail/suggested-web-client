import { FC, useState } from 'react';
import { CollectionMetadata } from '../../models/CollectionMetadata';
import CollectionQR from './CollectionQR';
import CollectionsTableRow from './CollectionsTableRow';

interface CollectionsTableProps {
  collections: Array<CollectionMetadata>;
}

const CollectionsTable: FC<CollectionsTableProps> = (props) => {
  const [showQr, setShowQr] = useState<boolean>(false);
  const [qrTitle, setQrTitle] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');

  return (
    // Table
    <>
      <div className='flex flex-col mt-6 w-full'>
        {/* Table Header */}
        <div className='flex w-full items-center h-14 border-b border-lightGray px-2.5'>
          <div className='w-1/12'></div>
          <div className='flex w-11/12 h-full items-center justify-between'>
            <div className='h-5 w-1/5 font-avenir text-sm font-normal text-lightGray text-left'>
              Name
            </div>
            <div className='h-5 w-1/5 font-avenir text-sm font-normal text-lightGray text-left'>
              Total Items
            </div>
            <div className='h-5 w-1/5 font-avenir text-sm font-normal text-lightGray text-left'>
              Total Items Purchased
            </div>
            <div className='h-5 w-1/5 font-avenir text-sm font-normal text-lightGray text-left'>
              Total Items Scanned
            </div>
            <div className='w-1/5'></div>
          </div>
        </div>
        {/* Table Body */}
        <div className='flex flex-col w-full'>
          {props.collections.map((md) => (
            <CollectionsTableRow
              {...md}
              setShowQr={setShowQr}
              setQrTitle={setQrTitle}
              setQrValue={setQrValue}
            />
          ))}
        </div>
      </div>
      <CollectionQR
        title={qrTitle}
        value={qrValue}
        showQr={showQr}
        onClose={() => setShowQr(false)}
      />
    </>
  );
};

export default CollectionsTable;
