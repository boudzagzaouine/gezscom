import "react-datepicker/dist/react-datepicker.css";

import { openIdsObject, openIdsObjects } from "config/rtk/rtkGen";
import React, { useState } from "react";
import Bcyan from "widgets/Bcyan";
import Section from "widgets/Section";

const Test = () => {
  const x = openIdsObjects("pays");
  const y = x.data;
  console.log("avant : isSuccess = "+x.isSuccess+" , isFetching = "+x.isFetching+" , isError = "+x.isError+" , isLoading = "+x.isLoading+" , isUninitialized = "+x.isUninitialized+" , status = "+x.status+" , currentData = "+JSON.stringify(x.currentData)+" , endpointName = "+x.endpointName+" , error = "+x.error+" , fulfilledTimeStamp = "+x.fulfilledTimeStamp+" , originalArgs = "+x.originalArgs+" , requestId = "+x.requestId+" , startedTimeStamp = "+x.startedTimeStamp)
 /*  setTimeout(() => {
    console.log("après : isSuccess = "+x.isSuccess+" , isFetching = "+x.isFetching+" , isError = "+x.isError+" , isLoading = "+x.isLoading+" , isUninitialized = "+x.isUninitialized+" , status = "+x.status+" , currentData = "+x.currentData+" , endpointName = "+x.endpointName+" , error = "+x.error+" , fulfilledTimeStamp = "+x.fulfilledTimeStamp+" , originalArgs = "+x.originalArgs+" , requestId = "+x.requestId+" , startedTimeStamp = "+x.startedTimeStamp)
  }, 600);
   */return (
    <Section>
    <Bcyan onClick={()=>{
      console.clear()
 console.log(
  "gener : data=" +
    JSON.stringify(x.isSuccess?x.tab:[]) );

    }} >
test
    </Bcyan>
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
    </Section>
  );
};

export default Test;
