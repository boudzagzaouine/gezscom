import { inRange } from "lodash";
import { Timestamp } from "rxjs";

export type Num = {
  id: number;
};
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
export interface CommandeJson {
  content: Commande[];
}
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
export interface ArticleCommandeJson {
  content: ArticleCommande[];
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
export interface ArticleJson {
  content: Article[];
}

export interface Article {
  id: String;
  design: String;
  nomenclature: String;
  tauxPertes: number;
}

export const article0: Article = {
  id: "",
  design: "",
  nomenclature: "",
  tauxPertes: 0,
};

export interface UnitMeasureJson {
  content: UnitMeasure[];
}

export interface UnitMeasure {
  id: String;
  design: String;
  symbole: String;
  decimal: number;
}

export const unitMeasure0: UnitMeasure = {
  id: "",
  design: "",
  symbole: "",
  decimal: 0,
};

export interface BureauDouaneJson {
  content: BureauDouane[];
}

export interface BureauDouane {
  id: String;
  code: String;
  design: String;
}

export const bureauDouane0: BureauDouane = {
  id: "",
  code: "",
  design: "",
};

export interface DeclarantJson {
  content: Declarant[];
}

export interface Declarant {
  id: String;
  design: String;
  ville: String;
}

export const declarant0: Declarant = {
  id: "",
  design: "",
  ville: "",
};

export interface IncotermJson {
  content: Incoterm[];
}

export interface Incoterm {
  id: String;
  code: String;
  design: String;
}

export const incoterm0: Incoterm = {
  id: "",
  code: "",
  design: "",
};

export interface PayementModeJson {
  content: PayementMode[];
}

export interface PayementMode {
  id: String;
  code: String;
  design: String;
}

export const payementMode0: PayementMode = {
  id: "",
  code: "",
  design: "",
};

export interface RegimeDouanierJson {
  content: RegimeDouanier[];
}

export interface RegimeDouanier {
  id: String;
  code: String;
  design: String;
}

export const regimeDouanier0: RegimeDouanier = {
  id: "",
  code: "",
  design: "",
};

export interface RawMaterialJson {
  content: RawMaterial[];
}

export interface RawMaterial {
  id: string;
  design: String;
  nomenclature: String;
  family: String;
  tauxPertes: number;
  measureUnit: String;
}

export const rawMaterial0: RawMaterial = {
  id: "",
  design: "",
  nomenclature: "",
  family: "",
  tauxPertes: 0,
  measureUnit: "",
};

export interface DumJson {
  content: Dum[];
}

export interface Dum {
  id: String;
  numDum: number;
  date: Date;
  valeur: number;
  fournisseur: String;
  bureauDouane: String;
  declarant: String;
  regime: String;
}

export const dum0: Dum = {
  id: "",
  numDum: 0,
  date: new Date(),
  valeur: 0.0,
  fournisseur: "",
  bureauDouane: "",
  declarant: "",
  regime: "",
};

export interface DechargeJson {
  content: Decharge[];
}

export interface Decharge {
  id: String;
  numDum: number;
  date: Date;
  valeur: number;
  client: String;
  transporteur: String;
  declarant: String;
}

export const decharge0: Decharge = {
  id: "",
  numDum: 0,
  date: new Date(),
  valeur: 0.0,
  client: "",
  transporteur: "",
  declarant: "",
};
export interface Transporteur {
  id: string;
  designation: string;
}
export interface Document {
  id: string;
  designation: string;
}
export interface Devise {
  id: string;
  code_iso: string;
  symbole: string;
  designation: string;
}
export interface Pays {
  id: string;
  designation: string;
}
export interface Role {
  id: string;
  designation: string;
  nbrUtilisateur: string;
}
export interface Ville {
  id: string;
  designation: string;
  pays: Pays;
}
export interface Type {
  id: string;
  designation: string;
}
export const t0: Transporteur = {
  id: "",
  designation: "",
};
export const d0: Document = {
  id: "",
  designation: "",
};
export const v0: Devise = {
  id: "",
  code_iso: "",
  symbole: "",
  designation: "",
};
export const p0: Pays = {
  id: "",
  designation: "",
};
export const i0: Ville = {
  id: "",
  designation: "",
  pays: p0,
};
export const y0: Document = {
  id: "",
  designation: "",
};
export const r0: Role = {
  id: "",
  designation: "",
  nbrUtilisateur: "",
};
//************************************************************ */
//************************************************************ */
//**********************Fournisseur*************************** */
export interface Fournisseur {
  id: string;
  raisonSociale: string;
  contact: string;
  tel: string;
  email: string;
  adresse: string;
  modeDeReglements: string;
  incoterm: string;
  devise: string;
  nomBanque: string;
  ribBanque: string;
  swift: string;
  image: string;
  commandes: CommandeFournisseur[];
  matiere: MatierePremiere[];
}

export const f0: Fournisseur = {
  id: "",
  raisonSociale: "",
  contact: "",
  tel: "",
  email: "",
  adresse: "",
  modeDeReglements: "",
  incoterm: "",
  devise: "",
  nomBanque: "",
  ribBanque: "",
  swift: "",
  image: "",
  commandes: [],
  matiere: [],
};
//************************************************************ */
//************************************************************ */
//*******************CommandeFournsieeur********************** */
export interface CommandeFournisseur {
  id: string;
  dateLivraison: Date;
  dateCommande: Date;
  montant: number;
  fournisseur: Fournisseur;
  idFournisseur: string;
}
export const cf0: CommandeFournisseur = {
  id: "",
  dateLivraison: new Date(),
  dateCommande: new Date(),
  //@ts-ignore
  montant: "",
  fournisseur: f0,
  idFournisseur: "",
};
export const getCf0 = (f: Fournisseur): CommandeFournisseur => {
  return {
    id: "",
    dateLivraison: new Date(),
    dateCommande: new Date(),
    //@ts-ignore
    montant: "",
    fournisseur: f,
    idFournisseur: f.id,
  };
};
export const getFournisseur = (
  id: string,
  obj: Fournisseur[]
): Fournisseur | undefined => {
  const apr = obj?.find((o: Fournisseur) => {
    return o.id === id;
  });
  return apr;
};
//************************************************************ */
//************************************************************ */
//********************MatierePremiere************************* */
export interface MatierePremiere {
  id: string;
  designation: string;
  familleMatierePremiere: string;
  prix: number;
  origine: string;
  fournisseur: Fournisseur;
  idFournisseur: string;
}
export const mp0: MatierePremiere = {
  id: "",
  designation: "",
  familleMatierePremiere: "",
  //@ts-ignore
  prix: "",
  origine: "",
  fournisseur: f0,
  idFournisseur: "",
};
export const getMp0 = (f: Fournisseur): MatierePremiere => {
  return {
    id: "",
    designation: "",
    familleMatierePremiere: "",
    //@ts-ignore
    prix: "",
    origine: "",
    fournisseur: f,
    idFournisseur: f.id,
  };
};
//************************************************************ */
//************************************************************ */
//********************LigneDeCommande************************* */
export interface LigneDeCommande {
  id: string;
  designation: string;
  quantite: number;
  prix: number;
  commandeFournisseur: CommandeFournisseur;
  matierePremiere: MatierePremiere;
  idCommandeFournisseur: string;
  idMatierePremiere: string;
}
export const lc0: LigneDeCommande = {
  id: "",
  designation: "",
  //@ts-ignore
  quantite: "",
  //@ts-ignore
  prix: "",
  commandeFournisseur: cf0,
  matierePremiere: mp0,
  idCommandeFournisseur: "",
  idMatierePremiere: "",
};
export const getlc0 = (
  c: CommandeFournisseur,
  m: MatierePremiere
): LigneDeCommande => {
  return {
    id: "",
    designation: "",
    //@ts-ignore
    quantite: "",
    //@ts-ignore
    prix: "",
    commandeFournisseur: c,
    matierePremiere: m,
    idCommandeFournisseur: c.id,
    idMatierePremiere: m.id,
  };
};
export interface Users {
  id: number;
  nom: string;
  prenom: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  tele: string;
  img: string;
  email: string;
  phone: string;
  role: string[];
}
export const u0: Users = {
  id: -1,
  nom: "",
  prenom: "",
  password: "",
  username: "",
  first_name: "",
  last_name: "",
  tele: "",
  img: "",
  email: "",
  phone: "",
  role: [],
};
export interface AccessUser {
  manageGroupMembership: boolean;
  view: boolean;
  mapRoles: boolean;
  impersonate: boolean;
  manage: boolean;
}
export const access0: AccessUser = {
  manageGroupMembership: true,
  view: true,
  mapRoles: true,
  impersonate: true,
  manage: true,
};
export interface User {
  id: string;
  createdTimestamp: number;
  username: string;
  enabled: boolean;
  totp: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  disableableCredentialTypes: any[];
  requiredActions: any[];
  notBefore: number;
  access: AccessUser;
}
export const user0: User = {
  id: "",
  createdTimestamp: 0,
  username: "",
  enabled: true,
  totp: false,
  emailVerified: false,
  firstName: "",
  lastName: "",
  email: "",
  disableableCredentialTypes: [],
  requiredActions: [],
  notBefore: 0,
  access: access0,
};
export interface Chaine {
  val: string;
}
