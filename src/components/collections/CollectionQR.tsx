import { FC, MouseEventHandler } from 'react';
import QRCode from 'react-qr-code';
import close from '../../assets/img/close-gray.svg';

interface CollectionQRProps {
  showQr: boolean;
  title: string;
  value: string;
  onClose: MouseEventHandler<HTMLImageElement>;
}

const CollectionQR: FC<CollectionQRProps> = (props) => {
  return (
    <div
      className={
        'flex justify-center items-center fixed top-0 left-0 z-10 w-full h-full bg-black/40' +
        (props.showQr ? ' block' : ' hidden')
      }>
      <div className='flex flex-col w-80 h-96 bg-white rounded-xl'>
        <div className='flex justify-between mx-8 mt-auto mb-4'>
          <div className='font-avenir font-extrabold text-xl text-trueGray-800'>
            {props.title}
          </div>
          <img
            src={close}
            alt=''
            draggable={false}
            onClick={props.onClose}
            className='hover:cursor-pointer'
          />
        </div>
        <div className='flex bg-white border border-lighterGray rounded-xl m-auto mt-4'>
          <QRCode value={props.value} size={208} className='m-4' />
        </div>
      </div>
    </div>
  );
};

export default CollectionQR;
