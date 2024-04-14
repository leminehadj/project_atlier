import { IoIosMan } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import React, { useEffect, useState } from 'react';
import UserDetails from "./Personnel/UserDetails";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AM from "./AM";
import AlertModal from "../AlertModal";
import {table_socket} from "../../js/table_socket";
import io from 'socket.io-client';
const Afficher = ({onRowSelect,choice}) => {
  const [rowData, setRowData] = useState([]);
  // const [detailsMode, setDetailsMode] = useState({ active: false, rowId: null });
  const [editMode, setEditMode] = useState({ active: false, rowId: null, choice: null });
  const [deleteMode, setDeleteMode] = useState({ active: false, rowId: null });

  useEffect(() => {
    const socket = io('http://localhost:4000');

    // Handle new user data
    socket.on('userData', (users) => {
      setRowData(users.map(user => ({
        N: user.id,
        username: user.username,
        nom: user.nom,
        prenom: user.prenom,
        role: user.role,
        password: user.password
      })));
    });

    // Handle delete response
    socket.on('deleteResponse', (response) => {
      if (response.success) {
       // setRowData(prev => prev.filter(user => user.N !== response.userId));
        alert('User deleted successfully');
        document.querySelector(`tr[data-user-id="${response.userId}"]`).remove();
      } else {
        alert('Failed to delete user');
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);



  const [isHoveredInfo,setIsHoveredInfo] = useState(null)
  const [isHoveredM,setIsHoveredM] = useState(null)
  const [isHoveredD,setIsHoveredD] = useState(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
const [selectedRows, setSelectedRows] = useState([]);
const [selectAll, setSelectAll] = useState(false);

    // const handleRowClick = (row) => {
    //   const isSelected = selectedRows.includes(row.N);
    //   if (isSelected) {
    //     const newSelectedRows = selectedRows.filter(N => N!== row.N);
    //     setSelectedRows(newSelectedRows);
    //     onRowSelect(null, newSelectedRows.length); // No row is considered selected
    //   } else {
    //     const newSelectedRows = [...selectedRows, row.N];
    //     setSelectedRows(newSelectedRows);
    //     onRowSelect(row.N, newSelectedRows.length); // Pass the new length of selectedRows
    //     console.log(`Details: Nom: ${row.nom}, Pre: ${row.Quantite}, Id: ${row.N}`);
    //   }
    //   console.log(selectedRows.length);
    // };


    const toggleSelectAll = () => {
      if (selectAll) {
        setSelectedRows([]);
      } else {
        setSelectedRows(rowData.map((row) => row.N));
      }
      setSelectAll(!selectAll);
    };

    const handleDeletePer = (id) => {};
    const handleDeleteStock = (id) => {};
    const [detailsMode, setdetailsMode] = useState({ active: false, rowId: null,username:null,nom:null,prenom:null,role:null,password:null });
    const [editModePer, seteditModePer] = useState({ active: false, rowId: null });
    const [editModeStock, seteditModeStock] = useState({ active: false, rowId: null });

    const [addMode, setaddMode] = useState({ active: false, rowId: null });
    // const [deleteMode, setdeleteMode] = useState({ active: false, rowId: null });
    const seeDetails = (id,username,nom,prenom,role,password) => {
      setdetailsMode({ active: true, rowId: id ,username:username,nom:nom,prenom:prenom,role:role,password:password});
    };
    if (detailsMode.active) {
      return (
        <UserDetails
          id={detailsMode.rowId}
          username={detailsMode.username}
          nom={detailsMode.nom}
          prenom={detailsMode.prenom}
          role={detailsMode.role}
          password={detailsMode.password}
          exitdetailsMode={() => setdetailsMode({ active: false, rowId: null,username:null,nom:null,prenom:null,role:null,password:null  })}
        />
      );
    }
    const editDetails = (id, choice) => {
      setEditMode({ active: true, rowId: id, choice });
    };
    const cancelDelete = () => {
      setDeleteMode({ active: false, rowId: null });
    };

    const deleteDetails = (id) => {
      const socket = io('http://localhost:4000'); // Ensure socket is initialized at a higher level or use existing socket
      socket.emit('deleteUser', id); // Or the appropriate event for deleting
      setDeleteMode({ active: false, rowId: null }); // Reset delete mode after initiating delete
    };

    // Listen to the delete response from the server
    // socket.on('deleteResponse', (response) => {
    //   if (response.success) {
    //     setRowData(prev => prev.filter(user => user.N !== response.userId));
    //     alert('User deleted successfully');
    //   } else {
    //     alert('Failed to delete user');
    //   }
    // });


    // const handleDeleteUser = (id) => {
    //   // This function should emit the deleteUser event to the socket
    //   // For example: socket.emit('deleteUser', id);
    //   setDeleteMode({ active: false, rowId: null });
    // };
    // if (detailsMode.active) {
    //   return (
    //     <UserDetails
    //       id={detailsMode.rowId}
    //       exitdetailsMode={() => setdetailsMode({ active: false, rowId: null })}
    //     />
    //   );
    // }

    const EditDetails = (id,choice) => {
      if(choice==="personnel")
         {seteditModePer({ active: true, rowId: id });}

    if(choice==="stock")
         {seteditModeStock({ active: true, rowId: id });}
    };

    if (editModePer.active) {
      return (
        <AM option="Modifier" choice="Personnel"
          id={editModePer.rowId}
          exiteditMode={() => seteditModePer({ active: false, rowId: null })}
        />
      );
    }
    if (editModeStock.active) {
      return (
        <AM option="Modifier" choice="Stock"
          id={editModeStock.rowId}
          exiteditMode={() => seteditModeStock({ active: false, rowId: null })}
        />
      );
      }

    const AddDetails = (id) => {
        setaddMode({ active: true, rowId: id });
      };

    //  const deleteDetails = (id)=> {
    //     setdeleteMode({active:true , rowId:id})
    //  }
    //  const cancelDelete=()=>{
    //   setdeleteMode({active:false, rowId:null})
    //  }

  return (

    <div className="flex flex-col ">
    {choice==="Stock" && <>
    <p className="text-2xl text-green font-bold relative top-3 text-center">List des Produit</p>
    <div className="w-full flex mt-12">

      <div className="scrollbar-thumb-rounded-full bg-white h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">

</div>



    </div></>}
    {choice==="Personnel" && <>
    <p className="text-2xl text-green font-bold relative top-3 text-center">List des Utilisateurs</p>
    <div className="w-full flex gap-4 mt-12">

      <div className="scrollbar-thumb-rounded-full bg-white h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
        <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full text-center">
        <thead>

            <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg ">

              <td className="w-1/12 ">ID</td>
              <td className="w-1/8">username</td>
              <td className="w-1/8">nom</td>
              <td className="w-1/8">prenom</td>
              <td className="w-1/8">role</td>
              <td className="w-1/8">password</td>

              <td className="w-3/8">action</td>


            </tr>

        </thead>
        <tbody>
          {rowData.map(user => (
            <tr data-user-id={user.N}>
              <td>{user.N}</td>
              <td>{user.username}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.role}</td>
              <td>{user.password}</td>
              <td>
              <label className="flex justify-evenly items-center h-full w-full">
        <div>
                      <CgDetailsMore className="cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl "
                    onClick={() => seeDetails(user.N,user.username,user.nom,user.prenom,user.role,user.password)}
                      onMouseEnter={() =>{setIsHoveredInfo(user.N)}}
                      onMouseLeave={() =>setIsHoveredInfo(null)}
                      onMouseMove={handleMouseMove}/>
                      {isHoveredInfo===user.N && (
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
                      onClick={()=> EditDetails(user.N,"personnel")}
                      onMouseEnter={() =>{setIsHoveredM(user.N)}}
                      onMouseLeave={() =>setIsHoveredM(null)}
                      onMouseMove={handleMouseMove}/>
                      {isHoveredM===user.N && (
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
                      <MdDelete className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl"
                      onClick={() => deleteDetails(user.N)}
                      onMouseEnter={() =>{setIsHoveredD(user.N)}}
                      onMouseLeave={() =>setIsHoveredD(null)}
                      onMouseMove={handleMouseMove}/>
                    {isHoveredD===user.N && (
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

{deleteMode.active && (
  <AlertModal
    option={"Voulez-vous Suprimer cette utilisateur ?"}
    onContinue={() => handleDeletePer(deleteMode.rowId)}
    onClose={cancelDelete}
  />
)}

        </tbody>
          {/* <tbody id="tbd">

          </tbody> */}
          </table>

{/*
            {rowData.map((row,index) => (
  <tr
    key={row.id}
    className="h-16 cursor-pointer hover:bg-slate-200 border-y "
    onClick={() => handleRowClick(row)}
  >

    <th >{row.N}</th>
    <td >{row.nom}</td>
    <td>{row.pre}</td>
    <td >{row.role}</td>
    <td className="w-1/5">password</td>

<td className="w-1/5">action</td>
    <td>
      <label className="flex justify-evenly items-center h-full w-full">
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
                      onClick={()=> EditDetails(row.N,"personnel")}
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
 {deleteMode.active && (
        <AlertModal option={"Voulez-vous Suprimer cette utilisateur ?" }
        onContinue={handleDeletePer(deleteMode.rowId)}
        onClose={cancelDelete}
        exitAddMode={() => setaddMode({ active: false, rowId: null })}/>
      )} */}

            {/* Other table rows */}


</div>

{/* <div className="flex flex-col relative  gap-3">
    <div className="bg-green-cyan h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Biologist</p>
    </div>
    <div>
    <div className="bg-green h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Reciptionniste</p>
    </div>
    </div>
    <div>
    <div className="bg-green-dark1 h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Utilisateurs</p>
    </div>
    </div>
</div> */}

    </div></>}

    </div>
     );
}

export default Afficher;
