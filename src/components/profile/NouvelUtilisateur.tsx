import React, { useState, useEffect } from "react";
import Section from "../../widgets/Section";
import { XIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { ROLE, URL_API_SEC } from "tools/consts";
import { useForm } from "react-hook-form";
import { Input } from "widgets";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
type NouvelUtilisateurProps = {
  setEstAjt: (b: boolean) => void;
};
function NouvelUtilisateur({ setEstAjt }: NouvelUtilisateurProps) {
  const [savenew, setSaveNew] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log(data);
    const newUser = {
      id: "" + Date.now() + data.nom[0] + data.prenom[0],
      email: data.email,
      username: data.nom + "." + data.prenom + Math.floor(Math.random() * 101),
      email_constraint: data.email,
      first_name: data.prenom,
      last_name: data.nom,
      tele: data.phone,
      genre: data.genre,
      image: "",
      realm_id: "bd6b823c-bb89-4417-8d0b-5b377a08a2d4",
      created_timestamp: "" + Date.now(),
      role: data.role,
    };
    console.log(newUser);
    axios
      .post(URL_API_SEC + "/user/creer", newUser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setEstAjt(false);
    if (savenew) {
      setEstAjt(true);
      setSaveNew(false);
    }
    //@ts-ignore
    router.reload(window.location.pathname);
  };

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-rows-6">
          <div className="row-span-1">
            <p className="float-left">Nouvel Utilisateur</p>
            <XIcon
              className="w-6 h-6 float-right cursor-pointer"
              onClick={() => setEstAjt(false)}
            />
          </div>
          <div className="grid grid-cols-6 row-span-4">
            <div className="col-span-5">
              <div className="my-5">
                <div className="w-1/2  grid grid-cols-3">
                  <label className=" ">Genre</label>
                  <div className="  ">
                    <label {...register("genre")}>
                      <input
                        name="genre"
                        value="h"
                        type="radio"
                        className="mr-1"
                      />
                      Homme
                    </label>
                  </div>
                  <div className=" ">
                    <label {...register("genre")}>
                      <input
                        name="genre"
                        value="f"
                        type="radio"
                        className="mr-1"
                      />
                      Femme
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex my-5 ">
                <div className="flex items-center">
                  <label className="w-56">Nom</label>
                  <div className=" ">
                    <input type="text" className="" {...register("nom")} />
                  </div>
                </div>
                <div className="flex items-center ml-5">
                  <label className="w-44">Prénom</label>
                  <div className=" ">
                    <input type="text" className="" {...register("prenom")} />
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex items-center ">
                  <label className="w-56">Mot de passe</label>
                  <div className=" ">
                    <input type="text" className="" {...register("password")} />
                  </div>
                </div>
                <div className="flex items-center ml-5">
                  <label className="w-44">Email</label>
                  <div className=" ">
                    <input type="text" className="" {...register("email")} />
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex items-center">
                  <label className="w-56">Confirmation de mot de passe</label>
                  <div className=" ">
                    <input type="text" className="" />
                  </div>
                </div>
                <div className="flex items-center ml-5 ">
                  <label className="w-44">Téléphone</label>
                  <div className=" ">
                    <input type="text" className="" {...register("phone")} />
                  </div>
                </div>
              </div>

              <div className="flex items-center my-5">
                <label className="formbuilder-select-label w-56">Rôle</label>
                <select className="w-52" {...register("role")}>
                  {ROLE.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label className=""></label>
                <div className="">
                  <div className="my-5">
                    <label>
                      <input
                        value="add"
                        type="checkbox"
                        className="mr-5"
                        {...register("lien")}
                      />
                      Créer un lien de du profile automatiquement
                    </label>
                  </div>
                  <div className="my-5">
                    <label>
                      <input
                        value="auto"
                        type="checkbox"
                        className="mr-5"
                        {...register("auto")}
                      />
                      Automatise l'utilisateur d'acceder au systeme
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" justify-center col-span-2">
                <div className="grid justify-center">
                  <div className="w-40 h-40  block mt-10">
                    <img src="/images/empty-avatar.png" />
                  </div>
                  <div className="text-sm text-gray-600 ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>
                        <DotsHorizontalIcon className="w-8 h-8 text-gray-400 m-auto" />
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1">
            <div className="" onClick={() => setSaveNew(true)}>
              <button
                className="h-10 w-52  my-10 rounded-md bg-gray-800 text-white float-left mr-10 "
                type="submit"
              >
                Sauvgarder et Nouveau
              </button>
            </div>
            <div className="">
              <button
                className="h-10 w-40  my-10 rounded-md bg-gray-800 text-white float-right mr-10 "
                type="button"
                onClick={() => setEstAjt(false)}
              >
                Annuler
              </button>
              <button
                className="h-10 w-40  my-10 rounded-md bg-gray-800 text-white float-right mr-10 "
                type="submit"
              >
                Sauvgarder
              </button>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
}

export default NouvelUtilisateur;
