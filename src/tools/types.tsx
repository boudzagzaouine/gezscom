export type Num = {
  id: number;
};
export interface Client {
  id: string;
  design: string;
  concat: string;
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
  adressLivs:AdressLiv[]
}
export const c0: Client = {
  id: "",
  design: "",
  concat: "",
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
  adressLivs:[]
 };

export interface Commande {
  id: string;
  date: Date;
  season: string;
  amount: string;
  idClient: string;
  adrLiv: string;
 }
export const cm0: Commande = {
  id: "",
  date: new Date(),
  amount: "",
  season: "",
  idClient: "",
  adrLiv: "",
};


export interface AdressLiv {
  id: string;
  adress: string;
  country: string;
  city: string;
  idClient:string;
}
export const adr0:AdressLiv={
  id:"",
  adress:"",
  country:"",
  city:"",
  idClient:""
}
export interface ArticleCommande {
  id: string;
  design: string;
  qte: number;
  portion: string;
  pu: number;
  idCommande: string;
}
export const arc0: ArticleCommande = {
  id: "",
  design: "",
  //@ts-ignore
  qte: "",
  portion: "",
  //@ts-ignore
  pu: "",
  idCommande: "",
};
export interface Chaine {
  val: string;
}
