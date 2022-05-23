export type Num = {
  id: number;
};
export interface ClientJson{
  content:Client[]
}

export interface TransporteurJson {
  content: Transporteur[]
}
export interface DeviseJson{
  content:Devise[]
}
export interface PaysJson {
  content: Pays[]
}
export interface DocumentJson {
  content: Document[]
}
export interface RoleJson {
  content: Role[]
}
export interface TypeJson {
  content: Type[]
}
export interface VilleJson {
  content: Ville[]
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
  adressLivs:AdressLiv[]
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

export interface AdressLivJson{
  content :AdressLiv[]
}
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
export interface Article {
  id: string,
  design: string;
  nomenclature: string;
  tauxPertes: number;
}

export const article0: Article = {
  id: "",
  design: "",
  nomenclature: "",
  tauxPertes: 0,
};

export interface UnitMeasure {
  id: string,
  design: string;
  symbole: string;
  decimal: number;
}

export const unitMeasure0: UnitMeasure = {
  id: "",
  design: "",
  symbole: "",
  decimal: 0,
};

export interface BureauDouane {
  id: string;
  code: string;
  design: string;
}

export const bureauDouane0: BureauDouane = {
  id: "",
  code: "",
  design: "",
};

export interface Declarant {
  id: string;
  design: string;
  ville: string;
}

export const declarant0: Declarant = {
  id: "",
  design: "",
  ville: "",
};

export interface Incoterm {
  id: string,
  code: string;
  design: string;
}

export const incoterm0: Incoterm = {
  id: "",
  code: "",
  design: "",
};

export interface PayementMode {
  id: string;
  code: string;
  design: string;
}

export const payementMode0: PayementMode = {
  id: "",
  code: "",
  design: "",
};

export interface RegimeDouanier {
  id: string;
  code: string;
  design: string;
}

export const regimeDouanier0: RegimeDouanier = {
  id: "",
  code: "",
  design: "",
};

export interface RawMaterial {
  id: string
  design: string;
  nomenclature: string;
  family: string;
  tauxPertes: number;
  measureUnit: string;
}

export const rawMaterial0: RawMaterial = {
  id: "",
  design: "",
  nomenclature: "",
  family: "",
  tauxPertes: 0,
  measureUnit: "",
};
export interface Transporteur {
  id: string
  designation: string;
}
export interface Document {
  id: string
  designation: string;
}
export interface Devise {
  id: string
  code_iso: string;
  symbole: string;
  designation: string;
}
export interface Pays {
  id: string
  designation: string;
}
export interface Role {
  id: string
  designation: string;
  nbrUtilisateur:string
}
export interface Ville {
  id: string
  designation: string;
  pays: Pays;
}
export interface Type {
  id: string
  designation: string;
}
export const t0: Transporteur = {
  id: '',
  designation: ''
}
export const d0: Document = {
  id: '',
  designation: ''
}
export const v0: Devise = {
  id: '',
  code_iso: '',
  symbole: '',
  designation:''
}
export const p0: Pays = {
  id: '',
  designation: ''
}
export const i0: Ville = {
  id: '',
  designation: '',
  pays: p0

}
export const y0: Document = {
  id: '',
  designation: ''
}
export const r0: Role = {
  id: '',
  designation: '',
  nbrUtilisateur:''
}
//************************************************************ */
//************************************************************ */
//**********************Fournisseur*************************** */
export interface Fournisseur{
  id:string;
  raisonSociale:string;
  contact:string;
  tel:string;
  email:string;
  adresse:string;
  modeDeReglements:string;
  incoterm:string;
  devise:string;
  nomBanque:string;
  ribBanque:string;
  swift:string;
  image:string;
  commandes:CommandeFournisseur[];
  matiere:MatierePremiere[];
}

export const f0: Fournisseur={
  id:"",
  raisonSociale:"",
  contact:"",
  tel:"",
  email:"",
  adresse:"",
  modeDeReglements:"",
  incoterm:"",
  devise:"",
  nomBanque:"",
  ribBanque:"",
  swift:"",
  image:"",
  commandes:[],
  matiere:[],
};
//************************************************************ */
//************************************************************ */
//*******************CommandeFournsieeur********************** */
export interface CommandeFournisseur{
  id:string;
  dateLivraison:Date;
  dateCommande:Date; 
  montant:number;
  fournisseur:Fournisseur;
  idFournisseur:string;
}
export const cf0 : CommandeFournisseur={
  id:"",
  dateLivraison:new Date(),
  dateCommande:new Date(), 
  //@ts-ignore 
  montant:"",
  fournisseur:f0,
  idFournisseur:""
};
export const getCf0= (f:Fournisseur):CommandeFournisseur=>{
  return {
    id:"",
    dateLivraison:new Date(),
    dateCommande:new Date(),
    //@ts-ignore 
    montant:"",
    fournisseur:f,
    idFournisseur:f.id
  }
}
export const  getFournisseur=(id: string, obj: Fournisseur[]) :Fournisseur|undefined=>{
  const apr = obj?.find(
    (o:Fournisseur) => { return o.id === id; }
  );
  return apr;
}
//************************************************************ */
//************************************************************ */
//********************MatierePremiere************************* */
export interface MatierePremiere{
  id:string;
  designation:string;
  familleMatierePremiere:string;
  prix:number;
  origine:string;
  fournisseur:Fournisseur;
  idFournisseur:string;
}
export const mp0: MatierePremiere={
  id:"",
  designation:"",
  familleMatierePremiere:"",
  //@ts-ignore
  prix:"",
  origine:"",
  fournisseur:f0,
  idFournisseur:""  
}
export const getMp0= (f:Fournisseur):MatierePremiere=>{
  return {
    id:"",
    designation:"",
    familleMatierePremiere:"",
    //@ts-ignore
    prix:"",
    origine:"",
    fournisseur:f,
    idFournisseur:f.id
  }
}
//************************************************************ */
//************************************************************ */
//********************LigneDeCommande************************* */
export interface LigneDeCommande{
  id:string;
  designation:string;
  quantite:number;
  prix:number;
  commandeFournisseur:CommandeFournisseur;
  matierePremiere:MatierePremiere;
  idCommandeFournisseur:string;
  idMatierePremiere:string;
}
export const lc0:LigneDeCommande={
  id:"",
  designation:"",
  //@ts-ignore
  quantite:"",
  //@ts-ignore
  prix:"",
  commandeFournisseur:cf0,
  matierePremiere:mp0,
  idCommandeFournisseur:"",
  idMatierePremiere:""
}
export const getlc0= (c:CommandeFournisseur,m:MatierePremiere):LigneDeCommande=>{
  return {
    id:"",
    designation:"",
     //@ts-ignore
    quantite:"",
    //@ts-ignore
    prix:"",
    commandeFournisseur:c,
    matierePremiere:m,
    idCommandeFournisseur:c.id,
    idMatierePremiere:m.id
  }
}
export interface Users {
  id: number,
  nom:string,
  prenom:string,
  password:string,
  username:string,
  first_name:string,
  last_name:string,
  tele:string,
  img : string,
  email:string,
  phone:string,
  role :string[]
}
export const u0:Users={
  id: -1,
  nom:"",
  prenom:"",
  password:"",
  username:"",
  first_name:"",
  last_name:"",
  tele:"",
  img : "",
  email:"",
  phone:"",
  role :[]
}
export interface Chaine {
  val: string;
}
