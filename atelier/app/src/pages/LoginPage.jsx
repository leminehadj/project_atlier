import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Stock from "./Gerant/Stock/Stock";
import Comptabilite from "./Gerant/Comptabilite/Comptabilite";
import Medcine from "./Medcine/Medcine";
import Agent from "./Agent/Agent";
import Home from "./Gerant/home";
import Personnel from "./Gerant/Personnel/Personnel";
import {loginus} from "../js/loginus";
//import { useNavigate } from "react-router-dom";
//import soio from "../server/socket.io";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    loginus();
  }, []);

  return (

              <div className="flex min-h-screen bg-gradient-to-t from-green-cyan1 to-green-dark1  bg-gray">
                <div className="flex flex-col w-full md:flex-row ">
                  <img
                    src="assets/logo logiciel.png"
                    alt=""
                    className="absolute w-10 -rotate-45 m-3"
                  />
                  <div className=" w-1/3"></div>
                  <h1 className="text-white text-5xl absolute top-28 left-32">
                    Bienvenue !
                  </h1>
                  <img
                    src="assets/logo.svg"
                    alt=""
                    width={600}
                    className="absolute mt-24 ml-32 "
                  />
                  <div className="flex items-center justify-center  w-2/3 bg-white rounded-s-2xl text-center p-8">
                    <div className="max-w-md w-full">
                      <h1 className="text-4xl relative bottom-28">
                        Connectez-vous
                      </h1>
                      <form

                        id="loginForm"

                        className="flex flex-col space-y-4 font-semibold"
                      >
                        <div className="mb-4">
                          <label
                            htmlFor="input"
                            className="text-sm text-green  relative top-2 left-7 float-left bg-white px-1"
                          >
                            Identifiant
                          </label>
                          <input
                          id="usn"

                            type="text"
                            placeholder="Write here..."

                            className="p-4 text-sm  border border-green rounded-sm bg-gray-200 focus:outline-none w-11/12 "

                          />
                        </div>
                        <div className="mb-20">
                          <label
                            className="text-sm text-green float-left relative top-2 left-7 bg-white px-1"
                            htmlFor="password"
                          >
                            Mot de passe
                          </label>
                          <input
                            className="p-4 text-sm border border-green rounded-sm bg-gray-200 focus:outline-none w-11/12"
                            id="password"
                            type="password"
                            placeholder="******************"

                          />
                        </div>
                        <div className="flex items-center justify-center relative top-10">
                        {/* <Link to="/Home"> */}
                            <button
                              className=" bg-green hover:shadow-xl hover:bg-green-cyan1 shadow-green/50 text-lg text-white font-bold py-3 rounded-lg w-44 "
                              type="submit"
                            >
                              Se connecter
                            </button>
                          {/* </Link> */}

                        </div>
                      </form>
                      <div className="flex items-center justify-center relative top-10" id="loginError" style={{ color: 'red', display: 'none' }}>Login failed. Please try again.</div>

                    </div>
                  </div>
                </div>
              </div>

     
  );
};

export default Login;
