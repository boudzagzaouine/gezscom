import 'react-datepicker/dist/react-datepicker.css';

import { openIdsObject } from 'config/rtk/rtkGen';
import React, { useState } from 'react';

const Test = () => {
 const x=openIdsObject("unitMeasures","a53c4a64-e3a2-405e-858c-bd784fceb528")
 const y=x.data
 console.log("gener : data="+JSON.stringify(x.data)+" tab = "+x.tab+" path = "+x.pathh)
  return (
    <>
      {/* <h1>{ff}</h1> */}
      {/* <TestClient /> */}
      {/* <TestCommande /> */}
      {/* <TestArticleCommande /> */}
      {/* <TestAdressLiv /> */}
      {/* <DatePicker selected={startDate} onChange={(date:Date) =>   setStartDate(date)} /> */}
      {/* <TestOpenClient /> */}
      {/* <TestSelect /> */}
      {/* <TestOpenUser /> */}
      {/* <TestArticleCommande3 /> */}
      {/* <TestFournisseur /> */}
      {/* <TestArticleClient/> */}
       {/* <TestOpengeneral />  */}
    </>
  );
};

export default Test;
