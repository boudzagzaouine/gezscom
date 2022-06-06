import { Article, article0, c0, Client, f0, Fournisseur, IdsObject, tabProp } from "./types";
//@ts-ignore
import dateFormat from "dateformat";
export const getClient = (id: string, obj: Client[]): Client => {
  const apr = obj?.find((o: Client) => {
    return o.id === id;
  });
  return apr || c0;
};
export const getFamilleArticle = (id: string, obj: Article[]): Article => {
  const apr = obj?.find((o: Article) => {
    return o.id === id;
  });
  return apr || article0;
};
export const getFournisseur = (id: string, obj: Fournisseur[]): Fournisseur => {
  const apr = obj?.find((o: Fournisseur) => {
    return o.id === id;
  });
  return apr || f0;
};

export const DateFormat = (date: Date) => {
  return dateFormat(date, "dd-mm-yyyy");
};
export const getList = <E extends IdsObject>(path: string, obj: tabProp<E>[]): E[] | undefined => {
  const apr = obj?.find((o: tabProp<E>) => {
    return o.path === path;
  });
  return apr?.tab;
};
export const getLine = <E extends IdsObject>(id: string, obj: E[]): E | undefined=> {
  const apr = obj?.find((o: E) => {
    return o.id === id;
  });
  return apr;
};
