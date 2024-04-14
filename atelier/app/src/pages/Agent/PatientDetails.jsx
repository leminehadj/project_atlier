import { useState } from "react";
import GererPatient from "./GererPatient";
const PatientDetails = ({id,option}) => {
    
     //here a function from backend using sql query to find the person with the id then put the details in constants to show his details or edit them or delete
const [retour,setRetour] = useState({active : false})
const retourGP =() =>{
    setRetour({active:true})
} 
if (retour.active){
    return (
    <GererPatient exitretour={() => setRetour({ active: false })}></GererPatient>
)
}
    return (
      <>
      {option==="show" && <>
      <p className="text-2xl text-green font-bold relative top-3 text-center">
          Information De Patient
        </p>
        <div className="flex p-4 h-fit bg-white rounded-lg justify-around mt-10 ">
          <div className="flex flex-col gap-10 w-1/3 p-6 ">
            <div className="flex flex-col justify-start">
              <p className="  text-slate-500 text-xl items-start">Nom</p>
              <p className="font-bold text-xl pt-4">{id} nom</p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">Prenom</p>
              <p className="font-bold text-xl pt-4">{id} nom</p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">ID</p>
              <p className="font-bold text-xl pt-4">{id} nom</p>
            </div>

            <div>
              <p className="  text-slate-500 text-xl">Numero Telephone</p>
              <p className="font-bold text-xl pt-4">{id} nom</p>
            </div>
          </div>
          <hr className="h-96 w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-10 w-1/3 p-6 ">
          <div>
              <p className="  text-slate-500 text-xl">Date De naissance</p>
              <p className="font-bold text-xl pt-4">{id.nom} nom</p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">Email</p>
              <p className="font-bold text-xl pt-4">{id.nom} nom</p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">Sexe</p>
              <p className="font-bold text-xl pt-4">{id} nom</p>
            </div>
            <div>
              <p className="  text-slate-500 text-xl">Email</p>
              <p className="font-bold text-xl pt-4">{id.nom} nom</p>
            </div>
          </div>
        </div>
        <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white" onClick={retourGP}>Retour</button>
      </>}
      {
        option==="edit" && <>
        <p className="text-2xl text-green font-bold relative top-3 text-center">
         Modifier les Informations De Patient
        </p>
        <form className="flex p-4 bg-white rounded-lg justify-around mt-10 text-lg ">
          <div className="flex flex-col gap-10 w-1/2 py-6 ">
            <div className="flex justify-start">
              <p className=" text-green font-semibold items-center flex w-28">Nom</p>
              <input required type="text" className="  rounded-sm bg-slate-100 p-2 outline-green" placeholder="islam.."/>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-28">Prenom</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="islam.."/>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-28">ID</p>
              <input required type="text" className="  rounded-sm bg-slate-100 p-2 outline-green w-1/4 text-center" value={id} disabled/>
            </div>

            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-28">Telephone</p>
              <input required type="number" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="0543.."/>
            </div>
            <div className="flex mt-8 gap-8">
                <button type="submit" className="  bg-green rounded-sm text-white font-semibold w-1/4 ">Enregistrer</button> 
                <button type="reset" className=" p-2 bg-gray-light rounded-sm text-green font-semibold w-1/4">Supprimer</button>
         
            </div>
             </div>

          <hr className=" h-96 w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-10 w-1/2 py-6 pl-3 ">
          <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-44">Date De naissance</p>
              <input required type="date" name="" id="" className="rounded-sm bg-slate-100 p-2 outline-green" />
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-44">Email</p>
              <input required type="email" name="" id="" className="rounded-sm bg-slate-100 p-2 outline-green" />
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-44">Sexe</p>
              <select required className=" rounded-sm bg-slate-100 p-2 outline-green">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold text-xl items-center flex w-44">Groupe sanguin</p>
              <select required className=" rounded-sm bg-slate-100 p-2 outline-green">
                <option value={"0+"}>O+</option>
                <option value={"0-"}>O-</option>
                <option value={"A-"}>A-</option>
                <option value={"0-"}>A+</option>
                <option value={"0-"}>AB-</option>
                <option value={"0-"}>AB+</option>

              </select>
            </div>
            <div className="flex mt-8 gap-8 justify-end">
            <button className=" p-2 bg-green rounded-sm text-white font-semibold w-1/4 " onClick={retourGP}>Retour</button>
            </div>
          </div>
        </form>
        </>
      }

        {
        option==="ajouter" && <>
        <p className="text-2xl text-green font-bold relative top-3 text-center">
        Ajouter Un Patient
        </p>
        <form className="flex p-4 bg-white rounded-lg justify-around mt-10 text-lg">
          <div className="flex flex-col gap-10 w-1/2 py-6 ">
            <div className="flex justify-start">
              <p className=" text-green font-semibold  items-center flex w-28">Nom</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="islam.."/>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-28">Prenom</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="islam.."/>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-28">ID</p>
              <input required type="number" className="  rounded-sm bg-slate-100 p-2 outline-green w-1/4" placeholder="234.."/>
            </div>

            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-28">Telephone</p>
              <input required type="number" className="  rounded-sm bg-slate-100 p-2 outline-green" placeholder="0543.."/>
            </div>
            <div className="flex mt-8 gap-8">
                <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green">Ajouter</button> 
                <button type="reset" className=" p-2 bg-gray-light rounded-sm text-green font-bold w-1/4">Supprimer</button>
         
            </div>
             </div>

          <hr className="h-96 w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-10 w-1/2 py-6 pl-3 ">
          <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-44">Date De naissance</p>
              <input required type="date" name="" id="" className=" rounded-sm bg-slate-100 p-2 outline-green" />
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-44">Email</p>
              <input required type="email" name="" id="" className="rounded-sm bg-slate-100 p-2 outline-green" />
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold t items-center flex w-44">Sexe</p>
              <select required className=" rounded-sm bg-slate-100 p-2 outline-green">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-44">Group Sang</p>
              <select required className=" rounded-sm bg-slate-100 p-2 outline-green">
                <option value={"0+"}>O+</option>
                <option value={"0-"}>O-</option>
                <option value={"0-"}>A-</option>
                <option value={"0-"}>A+</option>
                <option value={"0-"}>AB-</option>
                <option value={"0-"}>AB+</option>

              </select>
            </div>
          </div>
        </form>
        </>
      }
        
      </>
    );
}
 
export default PatientDetails;
