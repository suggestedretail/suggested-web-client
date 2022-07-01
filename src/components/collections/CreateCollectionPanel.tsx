import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/img/close.svg';
import { Collection } from '../../models/Collection';
import LocalDbService from '../../services/LocalDbService';

interface CreateCollectionPanelProps {
  showPanel: boolean;
  onClose: Function;
}

const CreateCollectionPanel: FC<CreateCollectionPanelProps> = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [canCreate, setCanCreate] = useState<boolean>(false);

  const onCreate = () => {
    let namePath = name?.toLowerCase().replaceAll(' ', '_');
    let newCollection: Collection = {
      id: namePath ?? '',
      name: name ?? '',
      description: description ?? '',
      totalItems: 0,
      totalItemsPurchased: 0,
      totalItemsScanned: 0,
      qrCode: 'www.google.com'
    };

    LocalDbService.createCollection(newCollection);
    props.onClose();
    navigate(`/collections/edit/${namePath}?create=true`);
  };

  useEffect(() => {
    let nameValid = name !== undefined;
    let descriptionValid = description !== undefined;
    setCanCreate(nameValid && descriptionValid);
  }, [name, description]);

  return (
    <div
      className={
        'flex flex-col absolute top-0 right-0 h-full max-h-full bg-white w-96 shadow-xl rounded transition ease-in-out duration-300' +
        (props.showPanel ? ' block' : ' hidden')
      }>
      <div className='h-32 bg-primary p-6'>
        <div className='flex flex-col space-y-1'>
          <div className='flex relative'>
            <div className='font-inter text-white font-medium text-lg'>
              New Project
            </div>
            <img
              className='absolute right-px hover:cursor-pointer'
              src={close}
              alt=''
              onClick={() => props.onClose()}
            />
          </div>
          <div className='font-inter text-white text-sm font-normal'>
            Get started by filling in the information below to create your new
            collection.
          </div>
        </div>
      </div>
      <div className='p-6'>
        <div className='flex flex-col space-y-6'>
          <div className='flex flex-col space-y-1'>
            <div className='font-avenir text-gray-700 text-sm font-medium'>
              Collection Name
            </div>
            <input
              type='text'
              className='h-10 border border-gray-300 rounded-md py-2 px-3 outline-0 shadow-sm'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <div className='font-avenir text-gray-700 text-sm font-medium'>
              Description
            </div>
            <textarea
              className='h-32 border border-gray-300 rounded-md py-2 px-3 outline-0 shadow-sm resize-none'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end p-6 space-x-5 mt-auto'>
        <button
          className='w-20 h-10 border border-gray-300 rounded-md font-avenir text-gray-700 text-sm font-medium shadow-sm'
          onClick={() => props.onClose()}>
          Cancel
        </button>
        <button
          className='w-20 h-10 bg-primary rounded-md font-avenir text-white text-sm font-medium shadow-sm hover:opacity-70 disabled:opacity-70'
          disabled={!canCreate}
          onClick={() => onCreate()}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateCollectionPanel;
