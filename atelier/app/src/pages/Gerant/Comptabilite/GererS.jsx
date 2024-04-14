import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditS from "./EditS";
import AlertModal from "../../AlertModal";
const GererS = ({ onRowSelect }) => {
  const rowData = [
    { N: 1, nom: "Nom1", QRCode: "Pre1", Quantite: "Bio" },
    //Ndd more objects foQRCodeachQuantite
    { N: 2, nom: "Nom2", QRCode: "Pre2", Quantite: "bio" },
    { N: 3, nom: "Nom3", QRCode: "Pre3", Quantite: "med" },
    { N: 4, nom: "Nom4", QRCode: "Pre4", Quantite: "resp" },
    { N: 5, nom: "Nom5", QRCode: "Pre5", Quantite: "inferm" },
    { N: 6, nom: "Nom6", QRCode: "Pre6", Quantite: "bio" },
    { N: 7, nom: "Nom7", QRCode: "Pre7", Quantite: "sdfs" },
    { N: 8, nom: "Nom8", QRCode: "Pre8", Quantite: "xwcw" },
    { N: 9, nom: "Nom9", QRCode: "Pre9", Quantite: "xwcw" },
  ];
  const [isHoveredM,setIsHoveredM] = useState(null)
  const [isHoveredD,setIsHoveredD] = useState(null)
  const [deleteMode, setdeleteMode] = useState({ active: false, rowId: null });
  const [selectAll, setSelectAll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (row) => {
    const isSelected = selectedRows.includes(row.N);
    if (isSelected) {
      const newSelectedRows = selectedRows.filter((N) => N !== row.N);
      setSelectedRows(newSelectedRows);
      onRowSelect(null, newSelectedRows.length); // No row is considered selected
    } else {
      const newSelectedRows = [...selectedRows, row.N];
      setSelectedRows(newSelectedRows);
      onRowSelect(row.N, newSelectedRows.length); // Pass the new length of selectedRows
      console.log(
        `Details: Nom: ${row.nom}, Pre: ${row.Quantite}, Id: ${row.N}`
      );
    }
    console.log(selectedRows.length);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(rowData.map((row) => row.N));
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = (id) => {};

  const deleteDetails = (id)=> {
    setdeleteMode({active:true , rowId:id})
 }
 const cancelDelete=()=>{
  setdeleteMode({active:false, rowId:null})
 }

  const handleEdit = (id) => {
    setEditMode({ active: true, rowId: id });
  };
  const [editMode, setEditMode] = useState({ active: false, rowId: null });
  if (editMode.active) {
    return (
      <EditS
        id={editMode.rowId}
        exitEditMode={() => setEditMode({ active: false, rowId: null })}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl text-green font-bold relative top-3 ">
        List des Salaires
      </p>
      <div className="w-full flex mt-10">
        <div className="scrollbar-thumb-rounded-full bg-white h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
          <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full text-center">
            <tbody>
            <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
              <th>
              <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    className=" cursor-pointer"
                  />
              </th>
            <th className=" w-1/12 ">#</th>
                <th className="w-1/5">Nom Employe</th>
              <th className="w-1/5">Profession</th>
                <th className="w-1/5">Salaire</th>
                <th className="w-1/5">Action</th>
              </tr>

              {rowData.map((row,index) => (
                <tr
                  key={row.id}
                  className="h-16 cursor-pointer hover:bg-slate-200 border-y" 
                  onClick={() => handleRowClick(row)}
                >
                  <td>
                  <input
       type="checkbox"
       checked={selectedRows.includes(row.N)}
       onChange={() => handleRowClick(row.N)}
       className="table mx-auto cursor-pointer"
      />
                  </td>
                  <th>{row.N}</th>
                  <td>{row.nom}</td>
                  <td >{row.QRCode}</td>
                  <td>{row.Quantite}</td>
                  <td>
                    <label className="flex justify-center gap-6 items-center h-full w-full">
                      <FaEdit
                        className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl" 
                        onClick={() => handleEdit(row.N)} onMouseEnter={() =>{setIsHoveredM(index)}} 
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
                      <MdDelete
                        className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl" 
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

                    </label>
                    
                  </td>
                </tr>
              ))}
        {deleteMode.active && ( 
        <AlertModal option={"Voulez-vous Suprimer cette Utilisateur ?" } 
        onContinue={handleDelete(deleteMode.rowId)} 
        onClose={cancelDelete}  
        exitAddMode={() => setdeleteMode({ active: false, rowId: null })}/>
      )}
              {/* Other table rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GererS;
