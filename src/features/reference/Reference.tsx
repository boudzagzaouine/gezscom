import React from 'react';
import { article0, bureauDouane0, declarant0, devise0, document0, i0, incoterm0, payementMode0, pays0, rawMaterial0, regimeDouanier0, transporteur0, type0, unitMeasure0 } from 'tools/types';
import List from 'widgets/List';

type ReferenceProps={
  type:string
}
const Reference = ({type}:ReferenceProps) => {
  switch(type){
    case "unitMeasure":
      return<List title="Unité de Mesure" mal={false} body={["Désignation#design#attr#.#required#w-full","Symbole#symbole#attr#.#required#w-1/2 float-left","Décimal#decimal#attr#.#required#w-1/2 float-left"]}  emptyObject={unitMeasure0} path="unitMeasures" />;  
    break;
    case "article":
     return<List title="Famille Article" mal={true} body={["Désignation#design#attr#.#required#w-full","Nomenclature#nomenclature#attr#.#required#w-1/2 float-left","Taux de perte#tauxPertes#attr#.#required#w-1/2 float-left"]}  emptyObject={article0} path="articles" />;  
    break;
    case "rawMaterial":
      return<List title="Famille Matière Première" mal={false} 
      body={["Désignation#design#attr#nojoin#required#w-full","Nomenclature#nomenclature#attr#nojoin#required#w-1/2 float-left","Famille Mère#family#select#rawMaterials#norequired#w-1/2 float-left","Unité de mesure#measureUnit#select#unitMeasures#required#w-1/2 float-left","Taux de perte#tauxPertes#attr#nojoin#required#w-1/2 float-left"]}   emptyObject={rawMaterial0} path="rawMaterials" />;  
    break; 
    case "bureauDouane":
      return<List title="Bureau Douanier" mal={true} body={["Numéro#code#attr#.#required#w-1/2 float-left","Désignation#design#attr#.#required#w-full"]}  emptyObject={bureauDouane0} path="bureauDouanes"/>;  
    break;
    case "regimeDouanier":
      return<List title="Régime Douanier" mal={true} body={["Numéro#code#attr.#required#w-1/2 float-left","Désignation#design#attr.#required#w-full"]}  emptyObject={regimeDouanier0} path="regimeDouaniers"/>;  
    break;
    case "payementMode":
      return<List title="mode de règlement" mal={true} body={["Code#code#attr#.#required#w-1/2 float-left","Désignation#design#attr#.#required#w-full"]}   emptyObject={payementMode0} path="payementModes" />;  
    break;
    case "incoterm":
      return<List title="incoterm" mal={true} body={["Code#code#attr#.#required#w-1/2 float-left","Désignation#design#attr#.#required#w-full"]}  emptyObject={incoterm0} path="incoterms" />;  
    break; 
    case "declarant":
      return<List title="Déclarant" mal={true} body={["Désignation#design#attr#.#required#w-full","Ville#ville#select#Ville#required#w-1/2 float-left"]}  emptyObject={declarant0} path="declarants" />;  
    break;
    case "Transporteur":
      return<List title="Transporteur" mal={true} body={["Désignation#design#attr#.#required#w-full"]}  emptyObject={transporteur0} path="transporteurs" />;  
    break;
    case "Document":
      return<List title="Document" mal={true} body={["Désignation#design#attr#.#required#w-full"]}  emptyObject={document0} path="documents"/>;  
    break;
    case "Devise":
      return<List title="Devise" mal={false} body={["Désignation#design#attr#.#required#w-full","Code ISO#code_iso#attr#.#required#w-1/2 float-left","Symbole#symbole#attr#.#required#w-1/2 float-left"]} emptyObject={devise0} path="devises"/>;  
    break;
    case "Pays":
      return<List title="Pays" mal={true} body={["Désignation#design#attr#.#required#w-full"]} emptyObject={pays0} path="pays"/>;  
    break;
    case "Ville":
      return<List title="Ville" mal={false} body={["Désignation#design#attr#.#required#w-full","Ville#pays#select#pays#required#w-1/2 float-left"]}emptyObject={i0} path="villes" />;  
    break;
    case "Type":
      return<List title="Type" mal={true} body={["Désignation#design#attr#.#required#w-full"]} emptyObject={type0} path="types"/>;  
    break; 
    default:
    return <></>  
    break;
  }
 
};

export default Reference;
