import React, { useState } from 'react';

const ModalForm = ({id}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [selectedTestName, setSelectedTestName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true); // Assuming you want the modal to be open by default or triggered by some action

  const typesToTests = {
    Veineux: ["Hémogramme", "Fer Sérique"],
    Arteriel: ["Glycémie"],
    Capillaire: ["Cholestérol Total", "TSH"],
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedTestName('');
  };

  const handleTestNameChange = (event) => {
    setSelectedTestName(event.target.value);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const cancelForm = () => {
    setSelectedType('');
    setSelectedTestName('');
    setCurrentPage(1);
    setIsModalOpen(false); // Close the modal
  };

  if (!isModalOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="shadow-custom-black bg-white p-8 rounded-lg h-fit max-w-sm w-full">
        <form className='h-64 flex flex-col justify-between'>
          {currentPage === 1 && (
            <> 
              <select className="block w-full p-2 border border-gray-300 rounded mt-4" name="typeDePrelevement" value={selectedType} onChange={handleTypeChange}>
                <option value="">Sélectionnez type de prélèvement</option>
                <option value="Veineux">Prélèvement Veineux</option>
                <option value="Arteriel">Prélèvement Artériel</option>
                <option value="Capillaire">Prélèvement Capillaire</option>
              </select>
              <div className="flex justify-around mt-4">
              <button 
              className={`px-4 text-white rounded-md ${!selectedType ? 'bg-green-cyan1 hover:bg-green cursor-not-allowed opacity-65' : ' bg-green-cyan1 hover:bg-green'}`} 
              type="button" 
              onClick={nextPage}
              disabled={!selectedType} // Disable if no type is selected
            >Suivant
            </button>                
            <button className="px-4 py-2 bg-gray-500 bg-gray-light text-green rounded-md hover:bg-slate-100" type="button" onClick={cancelForm}>Annuler</button>
              </div>
            </>
          )}

          {currentPage === 2 && (
            <>
              <select className="block w-full p-2 border border-gray-300 rounded mt-4" name="nomDuPrelevement" value={selectedTestName} onChange={handleTestNameChange}>
                <option value="">Sélectionnez le nom du prélèvement</option>
                {(typesToTests[selectedType] || []).map(testName => (
                  <option key={testName} value={testName}>{testName}</option>
                ))}
              </select>
              <div className="flex justify-around mt-4">
              <button className="px-4 py-2 bg-gray-500 text-green bg-gray-light rounded hover:bg-gray-700" type="button" onClick={prevPage}>Retour</button>
              <button 
              className={`px-4 py-2 text-white rounded ${!selectedTestName ? 'bg-green-cyan1 hover:bg-green cursor-not-allowed opacity-65' : ' bg-green-cyan1 hover:bg-green'}`} 
              type="submit" 
              disabled={!selectedTestName} // Disable if no test name is selected
            >
              Ajouter
            </button>
            
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
