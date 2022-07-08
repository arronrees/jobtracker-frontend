import DetailSelectionButton from './DetailSelectionButton';

export default function DetailSelection({
  currentDetailSelection,
  setCurrentDetailSelection,
}) {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <DetailSelectionButton
        currentDetailSelection={currentDetailSelection}
        setCurrentDetailSelection={setCurrentDetailSelection}
        text='FTP Details'
        selection='ftp'
      />
      <DetailSelectionButton
        currentDetailSelection={currentDetailSelection}
        setCurrentDetailSelection={setCurrentDetailSelection}
        text='Database Details'
        selection='database'
      />
      <DetailSelectionButton
        currentDetailSelection={currentDetailSelection}
        setCurrentDetailSelection={setCurrentDetailSelection}
        text='CMS Details'
        selection='cms'
      />
      <DetailSelectionButton
        currentDetailSelection={currentDetailSelection}
        setCurrentDetailSelection={setCurrentDetailSelection}
        text='Email Details'
        selection='email'
      />
      <DetailSelectionButton
        currentDetailSelection={currentDetailSelection}
        setCurrentDetailSelection={setCurrentDetailSelection}
        text='Other Account Details'
        selection='other'
      />
    </div>
  );
}
