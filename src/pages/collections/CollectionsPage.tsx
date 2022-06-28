import { FC, useState } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/img/close-gray.svg';
import plus from '../../assets/img/plus.svg';
import CollectionsTableRow from '../../components/collections/CollectionsTableRow';
import { mockCollectionMetadata } from '../../MockData';

const CollectionsPage: FC = () => {
  const navigate = useNavigate();
  const [showQr, setShowQr] = useState<boolean>(false);
  const [qrTitle, setQrTitle] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');

  return (
    <div
      className={'flex flex-col w-full h-full px-10 pt-4' + (showQr ? '' : '')}>
      {/* Header */}
      <div className='flex w-full h-8'>
        <div className='font-avenir text-primary font-extrabold text-xl align-top'>
          Collections
        </div>
        <button
          className='flex h-full w-44 items-center justify-center bg-primary rounded ml-auto hover:opacity-70'
          onClick={() => navigate('/collections/create')}>
          <img src={plus} alt='' />
          <div className='font-lato text-white text-sm font-normal ml-2'>
            Create Collection
          </div>
        </button>
      </div>
      {/* Table */}
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
          {mockCollectionMetadata.map((md) => (
            <CollectionsTableRow
              {...md}
              setShowQr={setShowQr}
              setQrTitle={setQrTitle}
              setQrValue={setQrValue}
            />
          ))}
        </div>
      </div>
      <div
        className={
          'flex justify-center items-center fixed top-0 left-0 z-10 w-full h-full bg-black/40' +
          (showQr ? ' block' : ' hidden')
        }>
        <div className='flex flex-col w-80 h-96 bg-white rounded-xl'>
          <div className='flex justify-between mx-8 mt-auto mb-4'>
            <div className='font-avenir font-extrabold text-xl text-trueGray-800'>
              {qrTitle}
            </div>
            <img
              src={close}
              alt=''
              onClick={() => setShowQr(false)}
              className='hover:cursor-pointer'
            />
          </div>
          <div className='flex bg-white border border-lighterGray rounded-xl m-auto mt-4'>
            <QRCode value={qrValue} size={208} className='m-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
