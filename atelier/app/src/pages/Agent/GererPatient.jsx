import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import PatientDetails from "./PatientDetails";
import ModalForm from "./ModalForm";
import AlertModal from "../AlertModal";
const GererPatient = () => {
    const rowData = [
      { N: 1, nom: "birouk", prenom: "mohemmed islam", Age: 20 },
      { N: 2, nom: "Nom2", prenom: "Pre2", Age: 20 },
      { N: 3, nom: "Nom3", prenom: "Pre3", Age: 20 },
      { N: 4, nom: "Nom4", prenom: "Pre4", Age: 20 },
      { N: 5, nom: "Nom5", prenom: "Pre5", Age: 20 },
      { N: 6, nom: "Nom6", prenom: "Pre6", Age: 20 },
      { N: 7, nom: "Nom7", prenom: "Pre7", Age: 20 },
      { N: 8, nom: "Nom8", prenom: "Pre8", Age: 20 },
      { N: 9, nom: "Nom9", prenom: "Pre9", Age: 20 },
    ];


    const [isHoveredInfo,setIsHoveredInfo] = useState(null)
    const [isHoveredM,setIsHoveredM] = useState(null)
    const [isHoveredAP,setIsHoveredAP] = useState(null)
    const [isHoveredD,setIsHoveredD] = useState(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };


      const handleContinue = () => {
        // Add logic to proceed with the action
        
      };

    const handleDelete = (id) => {};
    const [detailsMode, setdetailsMode] = useState({ active: false, rowId: null });
    const [editMode, seteditMode] = useState({ active: false, rowId: null });
    const [addMode, setaddMode] = useState({ active: false, rowId: null });
    const [deleteMode, setdeleteMode] = useState({ active: false, rowId: null });
    const seeDetails = (id) => {
      setdetailsMode({ active: true, rowId: id });
    };

    if (detailsMode.active) {
      return (
        <PatientDetails option="show"
          id={detailsMode.rowId}
          exitdetailsMode={() => setdetailsMode({ active: false, rowId: null })}
        />
      );
    }
    
    const EditDetails = (id) => {
      seteditMode({ active: true, rowId: id });
    };

    if (editMode.active) {
      return (
        <PatientDetails option="edit"
          id={editMode.rowId}
          exiteditMode={() => seteditMode({ active: false, rowId: null })}
        />
      );
    }

    const AddDetails = (id) => {
        setaddMode({ active: true, rowId: id });
      };

     const deleteDetails = (id)=> {
        setdeleteMode({active:true , rowId:id})
     }
     const cancelDelete=()=>{
      setdeleteMode({active:false, rowId:null})
     }

    return (
      <div className="flex flex-col items-center">
        <p className="text-2xl text-green font-bold relative top-3 ">List des Patients</p>
      <div className="w-full flex mt-10 ">
        <div className="scrollbar-thumb-rounded-full bg-white h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
          <table className=" text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full ">
            <thead>
              <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
                <th className="w-1/12 rounded-tl-lg">#</th>
                <th className="w-2/12">Nom</th>
                <th className="w-2/12">Prenom</th>
                <th className="w-1/12">Age</th>
                <th className="w-1/12">id</th>
                <th className="w-2/12">Action</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row,index) => (
                <tr key={index} className="h-16 cursor-pointer hover:bg-slate-200 border-y text-center" >
                    <td >{row.N}</td>
                    <td >{row.nom}</td>
                    <td >{row.prenom}</td>
                    <td >{row.Age}</td>
                    <td>{row.N}</td>
                  <td>
                    <label htmlFor="" className="flex justify-evenly items-center h-full w-full">
                    <div>
                      <CgDetailsMore className="cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl " 
                      onClick={() => seeDetails(row.N)}
                      onMouseEnter={() =>{setIsHoveredInfo(index)}}
                      onMouseLeave={() =>setIsHoveredInfo(null)} 
                      onMouseMove={handleMouseMove}/>
                      {isHoveredInfo===index && (
                  <p
                    className="text-sm p-1 rounded bg-slate-100 absolute mt-5 " 
                    style={{
                      left: `${mousePosition.x}px`, 
                      top: `${mousePosition.y}px`
                    }}
                  >
                    Details
                  </p>
                )}
                    </div>
                    <div>
                      <FaEdit className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl" 
                      onClick={()=> EditDetails(row.N)} 
                      onMouseEnter={() =>{setIsHoveredM(index)}} 
                      onMouseLeave={() =>setIsHoveredM(null)}
                      onMouseMove={handleMouseMove}/>
                      {isHoveredM===index && (
                  <p
                    className="text-sm p-1 rounded bg-slate-100 absolute mt-5 " 
                    style={{
                      left: `${mousePosition.x}px`, 
                      top: `${mousePosition.y}px`
                    }}
                  >
                    Modifier
                  </p>
                )}
                    </div>
                    <div>
                      <BiCommentAdd className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl" 
                      onClick={()=>AddDetails(row.N)} 
                      onMouseEnter={() =>{setIsHoveredAP(index)}} 
                      onMouseLeave={() =>setIsHoveredAP(null)}
                      onMouseMove={handleMouseMove}/>
                    {isHoveredAP===index && (
                <p
                  className="text-sm p-1 rounded bg-slate-100 absolute mt-5 " 
                  style={{
                    left: `${mousePosition.x}px`, 
                    top: `${mousePosition.y}px`
                  }}
                >
                  Ajouter Prelev
                </p>
              )}
                    </div>
                    <div>
                      <MdDelete className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl" 
                      onClick={() => deleteDetails(row.N)}
                      onMouseEnter={() =>{setIsHoveredD(index)}} 
                      onMouseLeave={() =>setIsHoveredD(null)}
                      onMouseMove={handleMouseMove}/>
                    {isHoveredD===index && (
                <p
                  className="text-sm p-1 rounded bg-slate-100 absolute mt-5 " 
                  style={{
                    left: `${mousePosition.x}px`, 
                    top: `${mousePosition.y}px`
                  }}
                >
                  Suprimer
                </p>
              )} 
                    </div>
                    </label>
                    
                  </td>
                </tr>
              ))}
              {addMode.active && (
        <ModalForm
          id={addMode.rowId}
          exitAddMode={() => setaddMode({ active: false, rowId: null })}
        />
      )}
      {deleteMode.active && ( 
        <AlertModal option={"Voulez-vous Suprimer cette patient ?" } 
        onContinue={handleDelete(deleteMode.rowId)} 
        onClose={cancelDelete}  
        exitAddMode={() => setaddMode({ active: false, rowId: null })}/>
      )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    );
  };
 export default GererPatient;

