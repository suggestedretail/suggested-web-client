import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionMetadata } from '../../models/CollectionMetadata';

interface CollectionsTableRowProps extends CollectionMetadata {
  setShowQr(value: boolean): void;
  setQrTitle(value: string): void;
  setQrValue(value: string): void;
}

const CollectionsTableRow: FC<CollectionsTableRowProps> = (props) => {
  const navigate = useNavigate();
  const generateQr = (e: MouseEvent) => {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();

    props.setQrTitle(props.name);
    props.setQrValue(props.qrCode);
    props.setShowQr(true);
  };

  return (
    <div
      id={props.name}
      className='flex w-full h-14 items-center border-b border-lightGray px-2.5 hover:cursor-pointer'>
      <div className='flex items-center w-1/12 h-4'>
        <input type='checkbox' className='h-full w-4' />
      </div>
      <div
        className='flex w-11/12 h-full items-center justify-between'
        onClick={() => navigate(`/collections/edit/${props.id}`)}>
        <div className='w-1/5 h-6 font-avenir font-extrabold text-base'>
          {props.name}
        </div>
        <div className='w-1/5 h-6 flex'>
          <div className='flex h-4 items-end space-x-1'>
            <div className='font-avenir font-black text-base h-4'>
              {props.totalItems}
            </div>
            <div className='flex font-avenir font-medium text-sm h-3.5'>
              Items
            </div>
          </div>
        </div>
        <div className='w-1/5 h-6 flex'>
          <div className='flex h-4 items-end space-x-1'>
            <div className='font-avenir font-black text-base h-4'>
              {props.totalItemsPurchased}
            </div>
            <div className='flex font-avenir font-medium text-sm h-3.5'>
              Purchases
            </div>
          </div>
        </div>
        <div className='w-1/5 h-6 flex'>
          <div className='flex h-4 items-end space-x-1'>
            <div className='font-avenir font-black text-base h-4'>
              {props.totalItemsScanned}
            </div>
            <div className='flex font-avenir font-medium text-sm h-3.5'>
              Scans
            </div>
          </div>
        </div>
        <div
          className='w-1/5 h-6 flex font-avenir font-extrabold text-base text-primary hover:cursor-pointer hover:underline'
          onClick={(e) => generateQr(e)}>
          View Code
        </div>
      </div>
    </div>
  );
};

export default CollectionsTableRow;
