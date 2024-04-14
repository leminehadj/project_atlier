import Afficher from "../Afficher"
import { useState } from "react"
const UserDetails = ({id,username,nom,prenom,role,password}) => {
   const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowCount, setSelectedRowCount] = useState(0)
  const [retour,setRetour] = useState({active : false})

  // Add state to track the selected row and its ID





  // Define a callback function to update the selected row ID
  const handleRowSelection = (id ,count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };
const retourGP =() =>{
    setRetour({active:true})
}
if (retour.active){
    return (
    <Afficher choice="Personnel" onRowSelect={handleRowSelection} exitretour={() => setRetour({ active: false })}></Afficher>
)
}
  //here a function from backend using sql query to find the person with the id then put the details in constants

    return (
      <>
        <p className="text-2xl text-green font-bold relative top-3 text-center">
          Information Personnel
        </p>
        <div className="flex p-4 h-fit bg-white rounded-lg justify-around mt-12 ">
          <div className="flex flex-col gap-20 w-1/3 p-6 ">
            <div className="flex flex-col justify-start">
              <p className="  text-slate-500 text-xl items-start">Id</p>
              <p className="font-bold text-xl pt-4">{id} </p>
            </div>

            <div>
              <p className="  text-slate-500 text-xl">username</p>
              <p className="font-bold text-xl pt-4">{username}</p>
            </div>

            <div>
              <p className="  text-slate-500 text-xl">nom</p>
              <p className="font-bold text-xl pt-4">{nom} </p>
            </div>
          </div>
          <hr className="h-96 w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-20 w-1/3 p-6 ">
          <div>
              <p className="  text-slate-500 text-xl">Prenom</p>
              <p className="font-bold text-xl pt-4">{prenom} </p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">Specialite</p>
              <p className="font-bold text-xl pt-4">{role} </p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">password</p>
              <p className="font-bold text-xl pt-4">{password} </p>
            </div>
          </div>
        </div>
        <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white" onClick={retourGP}>Retour</button>

      </>
    );
}

export default UserDetails;
