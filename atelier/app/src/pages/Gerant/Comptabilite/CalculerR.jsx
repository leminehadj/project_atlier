const CalculerR = () => {
  return (
    <div className=" flex flex-col justify-center text-center">
      <p className="text-2xl text-green font-bold p-3 text-center">
        Calculer le Revenu
      </p>
      <table className="rounded-2xl bg-white h-[32rem] border-slate-400">
        <tr className="roundde-2xl">
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-r rounded-2xl">
            La Boit de Paiment
          </td>
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-b">
            Paiment
          </td>
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-l">
            Time Frame
          </td>
        </tr>
        <tr className="">
          <td className=" border-t">
            <div className="flex flex-col items-center gap-10">
              <p className="text-2xl text-green font-semibold p-3">
                Montant Initial
              </p>
              <input
                type="number"
                className="p-3 rounded-xl outline-slate-300 text-center outline"
                placeholder="Saisir le montant initial"
              />
              <br />
              <button className=" p-2 bg-green rounded-sm text-white font-bold w-1/3">
                Valide
              </button>
            </div>
          </td>
          <td className="border-x">
            <div className="flex flex-col items-center gap-6">
              <div className=" ">
                <p className="text-2xl text-green font-semibold p-3">
                  Nombre des tests
                </p>
                <span className=" p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3 ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">
                  Montant total
                </p>
                <span className=" p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3  ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">Revenu</p>
                <span className="text-xl ">200</span>
              </div>
            </div>
          </td>

          <td className="border-t  ">
            <div className="flex flex-col items-center gap-10">
              <select
                name=""
                id=""
                className=" bg-slate-300 p-2 px-4 rounded-sm"
              >
                <option value="">Ajourd'hui</option>
                <option value="">7 jour</option>
                <option value="">14 jour</option>
                <option value="">1 mois</option>
                <option value="">6 mois</option>
                <option value="">1 ans</option>
              </select>

              <div className="">
                {" "}
                <p className="text-2xl text-green font-semibold p-3">
                  Nombre des tests
                </p>
                <span className="   p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3 ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">
                  Montant total
                </p>
                <span className="text-xl ">
                  12
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div className="absolute w-fit right-24 bottom-6">
        <button className="  p-2 px-9 bg-green rounded-sm text-white font-bold ">
          Calculer
        </button>
      </div>
    </div>
  );
};

export default CalculerR;
