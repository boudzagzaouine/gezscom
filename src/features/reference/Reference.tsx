import { OpenArticleProp, openArticles } from 'config/rtk/rtkArticle';
import { OpenBureauDouaneProp, openBureauDouanes } from 'config/rtk/rtkBureauDouane';
import { OpenDeclarantProp, openDeclarants } from 'config/rtk/rtkDeclarant';
import { OpenDeviseProp, openDevises } from 'config/rtk/rtkDevise';
import { OpenDocumentProp, openDocuments } from 'config/rtk/rtkDocument';
import { OpenIncotermProp, openIncoterms } from 'config/rtk/rtkIncoterm';
import { OpenPayementModeProp, openPayementModes } from 'config/rtk/rtkPayementMode';
import { openPays, OpenPaysProp } from 'config/rtk/rtkPays';
import { OpenRawMaterialProp, openRawMaterials } from 'config/rtk/rtkRawMaterial';
import { OpenRegimeDouanierProp, openRegimeDouaniers } from 'config/rtk/rtkRegimeDouanier';
import { OpenTransporteurProp, openTransporteurs } from 'config/rtk/rtkTransporteur';
import { OpenTypeProp, openTypes } from 'config/rtk/rtkType';
import { OpenUnitMeasureProp, openUnitMeasures } from 'config/rtk/rtkUnitMeasure';
import { OpenVilleProp, openVilles } from 'config/rtk/rtkVille';
import React from 'react';
import { article0, bureauDouane0, declarant0, devise0, document0, i0, incoterm0, payementMode0, pays0, rawMaterial0, regimeDouanier0, transporteur0, type0, unitMeasure0 } from 'tools/types';
import List from 'widgets/List';

type ReferenceProps={
  type:string
}
const Reference = ({type}:ReferenceProps) => {
  switch(type){
    case "unitMeasure":
      const UnitmesureToOpen: OpenUnitMeasureProp = openUnitMeasures();
      return<List title="Unité de Mesure" mal={false} body={["Désignation#design#attr","Symbole#symbole#attr","Décimal#decimal#attr"]}  list={UnitmesureToOpen.data.content} emptyObject={unitMeasure0} save={UnitmesureToOpen.save} edit={UnitmesureToOpen.edit} refetch={UnitmesureToOpen.refetch} />;  
    break;
   /*  case "article":
      const articleToOpen: OpenArticleProp = openArticles();
     return<List title="Famille Article" mal={true} body={["Désignation#design#attr","Nomenclature#nomenclature#attr","Taux de perte#tauxPertes#attr"]}  list={articleToOpen.data.content} emptyObject={article0} save={articleToOpen.save} edit={articleToOpen.edit} refetch={articleToOpen.refetch} />;  
    break;
    case "rawMaterial":
      const rawMaterialToOpen: OpenRawMaterialProp = openRawMaterials();
      return<List title="Famille Matière Première" mal={false} body={["Désignation#design#attr","Nomenclature#nomenclature#attr","Taux de perte#tauxPertes#attr","Famille Mère#family#select#FamilleRawMaterial","Unité de mesure#measureUnit#select#UnitMeasure"]}  list={rawMaterialToOpen.data.content} emptyObject={rawMaterial0} save={rawMaterialToOpen.save} edit={rawMaterialToOpen.edit} refetch={rawMaterialToOpen.refetch} />;  
    break;
    case "bureauDouane":
      const bureauDouaneToOpen: OpenBureauDouaneProp = openBureauDouanes();
      return<List title="Bureau Douanier" mal={true} body={["Numéro#code#attr","Désignation#design#attr"]}  list={bureauDouaneToOpen.data.content} emptyObject={bureauDouane0} save={bureauDouaneToOpen.save} edit={bureauDouaneToOpen.edit} refetch={bureauDouaneToOpen.refetch} />;  
    break;
    case "regimeDouanier":
      const regimeDouanierToOpen: OpenRegimeDouanierProp = openRegimeDouaniers();
      return<List title="Régime Douanier" mal={true} body={["Numéro#code#attr","Désignation#design#attr"]}  list={regimeDouanierToOpen.data.content} emptyObject={regimeDouanier0} save={regimeDouanierToOpen.save} edit={regimeDouanierToOpen.edit} refetch={regimeDouanierToOpen.refetch} />;  
    break;
    case "payementMode":
      const payementModesToOpen: OpenPayementModeProp = openPayementModes();
      return<List title="mode de règlement" mal={true} body={["Désignation#design#attr","Code#code#attr"]}  list={payementModesToOpen.data.content} emptyObject={payementMode0} save={payementModesToOpen.save} edit={payementModesToOpen.edit} refetch={payementModesToOpen.refetch} />;  
    break;
    case "incoterm":
      const incotermsToOpen: OpenIncotermProp = openIncoterms();
      return<List title="incoterm" mal={true} body={["Désignation#design#attr","Code#code#attr"]}  list={incotermsToOpen.data.content} emptyObject={payementMode0} save={incotermsToOpen.save} edit={incotermsToOpen.edit} refetch={incotermsToOpen.refetch} />;  
    break;
    case "declarant":
      const declarantToOpen: OpenDeclarantProp = openDeclarants();
      return<List title="Déclarant" mal={true} body={["Désignation#design#attr","Ville#ville#select#Ville"]}  list={declarantToOpen.data.content} emptyObject={declarant0} save={declarantToOpen.save} edit={declarantToOpen.edit} refetch={declarantToOpen.refetch} />;  
    break;
    case "Transporteur":
      const TransporteurToOpen: OpenTransporteurProp = openTransporteurs(0);
      return<List title="Transporteur" mal={true} body={["Désignation#design#attr"]}  list={TransporteurToOpen.data.content} emptyObject={transporteur0} save={TransporteurToOpen.save} edit={TransporteurToOpen.edit} refetch={TransporteurToOpen.refetch} />;  
    break;
    case "Document":
      const DocumentToOpen: OpenDocumentProp = openDocuments(0);
      return<List title="Document" mal={true} body={["Désignation#design#attr"]}  list={DocumentToOpen.data.content} emptyObject={document0} save={DocumentToOpen.save} edit={DocumentToOpen.edit} refetch={DocumentToOpen.refetch} />;  
    break;
    case "Devise":
      const DeviseToOpen: OpenDeviseProp = openDevises(0);
      return<List title="Devise" mal={false} body={["Désignation#design#attr","Code ISO#code_iso#attr","Symbole#symbole#attr"]}  list={DeviseToOpen.data.content} emptyObject={devise0} save={DeviseToOpen.save} edit={DeviseToOpen.edit} refetch={DeviseToOpen.refetch} />;  
    break;
    case "Pays":
      const PaysToOpen: OpenPaysProp = openPays(0);
      return<List title="Pays" mal={true} body={["Désignation#design#attr"]}  list={PaysToOpen.data.content} emptyObject={pays0} save={PaysToOpen.save} edit={PaysToOpen.edit} refetch={PaysToOpen.refetch} />;  
    break;
    case "Ville":
      const VilleToOpen: OpenVilleProp = openVilles(0);
      return<List title="Ville" mal={false} body={["Désignation#design#attr","Ville#pays#select#Pays"]}  list={VilleToOpen.data.content} emptyObject={i0} save={VilleToOpen.save} edit={VilleToOpen.edit} refetch={VilleToOpen.refetch} />;  
    break;
    case "Type":
      const TypeToOpen: OpenTypeProp = openTypes(0);
      return<List title="Type" mal={true} body={["Désignation#design#attr"]}  list={TypeToOpen.data.content} emptyObject={type0} save={TypeToOpen.save} edit={TypeToOpen.edit} refetch={TypeToOpen.refetch} />;  
    break; */
    default:
    return <></>  
    break;
  }
 
};

export default Reference;
