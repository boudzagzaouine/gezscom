export const getCm0 = (cl: Client): Commande => {
    return {
      id: "",
      date: new Date(),
      amount: "",
      season: "",
      client: cl,
      idClient: cl.id,
      adrLiv: "",
    };
  };
   export const getCm = (cl: Client,cm:Commande): Commande => {
    return {
      id: cm.id,
      date: cm.date,
      amount: cm.amount,
      season: cm.season,
      client: cl,
      idClient: cm.idClient,
      adrLiv: cm.adrLiv,
    };
  };
  export const initSel=(tab:string[])=>{
    tab.unshift("")
    return tab
    }
    export const initSelObj=(tab:Client[],t0:Object)=>{
      tab.unshift(c0)
      return tab
      }
      export const getCm2 = (cm:Commande): Commande => {
    return {
      id: cm.id,
      date: cm.date,
      amount: cm.amount,
      season: cm.season,
      client: c0,
      idClient: cm.idClient,
      adrLiv: cm.adrLiv,
      };
  };
  
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