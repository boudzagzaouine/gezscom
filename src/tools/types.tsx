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
}
export type ColsClient =
  | "design"
  | "concat"
  | "image"
  | "email"
  | "tel"
  | "device"
  | "adrLiv"
  | "incoterm"
  | "paymentChoice"
  | "adrFact"
  | "bank"
  | "rib"
  | "swift";
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
};

export interface Chaine {
  val: string;
}
