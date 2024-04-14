import { useState } from "react";
import Header from '../Header';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import GererPatient from "./GererPatient";
import PatientDetails from "./PatientDetails";
import GererPrelev from "./GererPrelev";

const Agent = () => { 
    
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => {
      setShowAlert(false);
    };
      
      const [activeItem, setActiveItem] = useState('item1');
  
    // Add state to track the selected row and its ID
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedDetails,setSelectedDetails]= useState(null)
  const [selectedRowCount, setSelectedRowCount] = useState(0)
  const [selectedOption,setSelectedOption] = useState(false)
  
  // Define a callback function to update the selected row ID
  const handleRowSelection = (id ,count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };
  
    const renderComponent = () => {
      switch (activeItem) {
        case 'item1':
          return <GererPatient/>
        case 'item2':
          return <PatientDetails option="ajouter"/>
        case 'item3':
          return <GererPrelev/>
        default:
          return <GererPatient/>
      }
    };
      return ( 
      <div className="flex bg-gray-light w-full">
          <div className="w-1/5 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
               <div className="h-screen">
              <div className=" h-1/4  flex justify-center ">
              <div className="mt-6">
              <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
              <h1 className="font-bold text-white text-center">Agent</h1>
              
              </div>
              </div>
              
         <div className=" h-2/4  flex-col justify-center">
          <hr className='bg-white h-1'/>
          <h1 className='text-2xl font-bold text-white underline pt-3 text-center'>Gestion Reseptionist</h1>
          <ul className="pt-8">
          <li className={`flex items-center w-64 px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === 'item1' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item1')}>
            <MdOutlinePeopleAlt className='text-white w-10 size-10'/>
            <h1 className="font-bold text-white text-xl">Gerer Patients</h1>
        </li>
        <li className={`flex items-center w-64  float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
        ${activeItem === 'item2' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item2')}>            
       <BsPersonFillAdd className='text-white w-11 size-10' />
            <h1 className="font-bold text-white text-xl">Ajouter Patient</h1>
        </li>
        
           <li className={`flex items-center w-64 px-1  float-right gap-5 py-1 mb-2 hover:bg-green-cyan rounded-s-lg 
           ${activeItem === 'item3' ? ' bg-green-cyan' : ''} cursor-pointer`} 
           onClick={() => {setActiveItem('item3')}}>            
        <TbTestPipe className='text-white w-10 size-11' />
            <h1 className="font-bold text-white text-xl">Gerer Prelevements</h1>
        </li>
         </ul>
         
         </div>
         <hr className='bg-white h-1 w-1/5 absolute '/>
         <div className=" h-1/4 flex flex-col justify-center rounded-ee-2xl items-center ">
          <div className=" py-3">
              <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
              <p className="text-white font-bold">Version 1.0</p>
          </div>
          
         </div>
          </div> 
          </div> 
          <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
          <div className="table h-screen mx-auto">
              <Header user="agent"></Header>
          <div className="w-full px-4 pt-4 ">
          {/* Render the active component */}
          {renderComponent()}
        </div>
  
          </div>
         
         
        
   </div>);
}
 
export default Agent;