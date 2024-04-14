import React, { useState,useEffect } from "react";
import Afficher from "./Afficher";
import editus from "../../js/editus";

import addus from "../../js/addus";

const AM = ({choice,option,id}) => {

  useEffect(() => {
    if (option === "Modifier") {
      const cleanupEdit = editus();
      return cleanupEdit;  // Cleanup on unmount
    } else if (option === "Ajouter") {
      const cleanupAdd = addus();
      return cleanupAdd;  // Cleanup on unmount
    }
  }, [option]);  // Only re-run when `option` changes


  // useEffect(() => {
  //   // Initialize addus and get its cleanup function
  //   // const cleanupAdd = addus();
  //   // Initialize editus and get its cleanup function
  //   // const cleanupEdit = editus();
  //   editus();

  //   // Return a combined cleanup function that calls both cleanup functions
  //   // return () => {
  //   //   cleanupAdd();
  //   //   cleanupEdit();
  //   // };
  // }, []);



  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowCount, setSelectedRowCount] = useState(0)
  const [retourP,setRetourP] = useState({active : false})
  const [retourS,setRetourS] = useState({active : false})
  const [formData,setFormData]=useState({
  Nom:'',
  prenom:'',
  id:'',
  mdb:'',
  spec:'',
  sexe:""
})
const [randomNumber, setRandomNumber] = useState('');
  const handleRowSelection = (id ,count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };
  const retourRE =() =>{
    setRetourP({active:true})
}
if (retourP.active){
    return (
    <Afficher choice="Personnel" onRowSelect={handleRowSelection} exitretour={() => setRetourP({ active: false })}></Afficher>
)
}
const retourRS =() =>{
  setRetourS({active:true})
}
if (retourS.active){
  return (
  <Afficher choice="Stock" onRowSelect={handleRowSelection} exitretour={() => setRetourS({ active: false })}></Afficher>
)
}
const initialState={}

const handleReset = () => {
  setFormData(initialState);
};
// Function to update state on input change
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  if (option ==="Ajouter"){
    console.log('Form data submitted:', formData);
  }else if (option ==="Modifier"){
    console.log('Form data modified:', formData);
  }
  // Log the form data to the console
  // You can also handle form data submission to a server here
};



  const generateRandomNumber = () => {
    const min = 1000;
    const max = 10000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  }

    return (
    <div className="flex flex-col  ">
  {choice ==="Personnel" &&
  <>
      {option==="Ajouter" && <p className="text-2xl text-green font-bold p-3 text-center">Ajouter un Nouveau utilisateur</p>}
      {option==="Modifier" && <p className="text-2xl text-green font-bold p-3 text-center">Modification</p>}

  <form className="flex mt-6 p-4 h-4/5 bg-zinc-200 rounded-lg justify-around " onSubmit={handleSubmit} onReset={handleReset}>
    <div className="flex flex-col gap-10 w-1/3">
    {option ==='Modifier' && <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input required className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" id='idu' value={id} disabled/>
                {/* <p className="hidden">{formData.id=id}</p> */}
            </div>
       </div>}
        <div>
            <label htmlFor="text" className="flex ">Nom</label>
        <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" id="us" />
        </div>
        <div>
            <label htmlFor="text" className="flex ">Prenom</label>
    <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Prénom" name="prenom" id='pr' />
        </div>
        {/* {option ==='Ajouter' && <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input required className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" placeholder="ID" value={randomNumber}
       disabled/>
                <button className="bg-green text-white font-bold p-2 rounded-sm" onClick={generateRandomNumber} type="button">Generer</button>
                <p className="hidden">{formData.id=randomNumber}</p>
            </div>
       </div>} */}
       {/* {option ==='Modifier' && <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input required className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" id='idu' value={id} disabled/>
                <p className="hidden">{formData.id=id}</p>
            </div>
       </div>} */}


            {/* <div>
                <label htmlFor="text" className="flex ">Sexe</label>
         <select required className="border p-2 rounded-md flex " name="sexe" value={formData.sexe} onChange={handleChange}>
    <option value="Homme">Homme</option>
    <option value="Femme">Femme</option>
  </select>

            </div> */}
            <div className="flex gap-10">
                {option==="Ajouter" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32" id="ajoute" >Ajouter</button> }
                {option==="Modifier" && <button type="submit" id="edit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Modifier</button> }

                <button type="reset" className=" p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32">Anuller</button>
            </div>


    </div>

    <div className="flex flex-col gap-10 w-1/3">
      {/* <div>
            <label htmlFor="text" className="flex ">Prenom</label>
    <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Prénom" name="prenom" id='pr' onChange={handleChange}/>
        </div> */}
        <div>
            <label htmlFor="text" className="flex ">username</label>
    <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text"   id='usn' />
        </div>

    <div>
        <label htmlFor="text" className="flex">Mot de passe</label>
    <input required className="border p-2 mr-2 rounded-md flex justify-start w-4/5" type="text" placeholder="Mot de passe" name="mdb" id='ps'  />
    </div>
    <div>
        <label htmlFor="text" className="flex" >Specialitee</label>
    <select required className="border p-2 rounded-md flex" name="spec" id='rl' >
    <option value="gerant">gerant</option>
    <option value="Biologiste">Biologiste</option>
    <option value="Medecin">Médecin</option>
    <option value="recepsioniste">recepsioniste</option>
  </select>
    </div>
    <div>
    {option==="Modifier" && <button className="p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32 float-right" onClick={retourRE}>Retour</button>}
    </div>
    </div>

  </form></>}
  {choice ==="Stock" &&
  <>
      {option==="Ajouter" && <p className="text-2xl text-green font-bold p-3 text-center">Ajouter un Nouveau Produit</p>}
      {option==="Modifier" && <p className="text-2xl text-green font-bold p-3 text-center">Modification</p>}

  <form className="flex mt-6 p-4 h-4/5 bg-zinc-200 rounded-lg justify-around " onSubmit={handleSubmit} onReset={handleReset}>
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Nom de Produit</label>
        <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" value={formData.Nom} onChange={handleChange}/>
        </div>
        {option ==='Ajouter' && <div>
        <label htmlFor="text" className="flex">QR Code</label>
         <div className="flex">
                <input required className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" placeholder="ID" value={randomNumber}
       disabled/>
                <button className="bg-green text-white font-bold p-2 rounded-sm" onClick={generateRandomNumber} type="button">Generer</button>
                <p className="hidden">{formData.id=randomNumber}</p>
            </div>
       </div>}
       {option ==='Modifier' && <div>
        <label htmlFor="text" className="flex">QR Code</label>
         <div className="flex">
                <input required className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" value={id} disabled/>
                <p className="hidden">{formData.id=id}</p>
            </div>
       </div>}
            <div className="flex gap-10 mt-24">
                {option==="Ajouter" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32" >Ajouter</button> }
                {option==="Modifier" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Modifier</button> }

                <button type="reset" className=" p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32">Anuller</button>
            </div>


    </div>

    <div className="flex flex-col gap-10 w-1/3">
        <div className="">
            <label htmlFor="text" className="">Quantite</label>
    <input required className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="N°" name="prenom" value={formData.prenom} onChange={handleChange}/>
    {option==="Modifier" && <button className="p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-80 float-right" onClick={retourRS}>Retour</button>}

        </div>


    </div>

  </form></>}

        </div>
);}

export default AM;
