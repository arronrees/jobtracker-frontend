export default function DetailSelectionButton({
  text,
  currentDetailSelection,
  setCurrentDetailSelection,
  selection,
}) {
  return (
    <button
      type='button'
      className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 text-center ${
        currentDetailSelection === selection ? 'border-orange-500' : ''
      }`}
      onClick={() => setCurrentDetailSelection(selection)}
    >
      {text}
    </button>
  );
}
