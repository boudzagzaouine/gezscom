//************************************************************ */
//************************************************************ */
//********************Colisage************************* */
export interface Colis {
  id: String;
  idClient: String;
  date_colisage: String;
  pois_brut: number;
  nombre_palettes: number;
  pois_net: number;
}
export const colis0: Colis = {
  id: "",
  idClient: "",
  date_colisage: new Date().toISOString().slice(0, 10),
  pois_brut: 0,
  nombre_palettes: 0,
  pois_net: 0,
};
export interface ColisJson {
  constent: Colis[];
}

//************************************************************ */
//************************************************************ */
//********************Palette************************* */
export interface Palette {
  id: string;
  NPalette: number;
  Remarque: String;
  Nombrecolis: number;
}
export const paletteM: Palette = {
  id: "-1",
  NPalette: 11,
  Remarque: "xxxxxxxxx",
  Nombrecolis: 20,
};
export const palette0: Palette = {
  id: "",
  NPalette: 0,
  Remarque: "",
  Nombrecolis: 20,
};
export interface PaletteJson {
  constent: Palette[];
}
export type OpenPaletteProp = {
  data: PaletteJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};

//************************************************************ */
//************************************************************ */
//********************Adresse************************* */

export interface AdressLivJson {
  content: AdressLiv[];
}
export interface AdressLiv {
  id: string;
  adress: string;
  country: string;
  city: string;
  idClient: string;
}
export const adr0: AdressLiv = {
  id: "",
  adress: "",
  country: "",
  city: "",
  idClient: "",
};
export type OpenClientProp = {
  data: ClientJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
//************************************************************ */
//************************************************************ */
//********************Client************************* */
export interface ClientJson {
  content: Client[];
}
export interface Client {
  id: string;
  design: string;
  contact: string;
  image: string;
  email: string;
  tel: string;
  device: string;
  adrLiv: string;
  incoterm: string;
  paymentChoice: string;
  adrFact: string;
  bank: string;
  rib: string;
  swift: string;
  adressLivs: AdressLiv[];
}
export const c0: Client = {
  id: "",
  design: "",
  contact: "",
  image: "",
  email: "",
  tel: "",
  device: "",
  adrLiv: "",
  incoterm: "",
  paymentChoice: "",
  adrFact: "",
  bank: "",
  rib: "",
  swift: "",
  adressLivs: [],
};
