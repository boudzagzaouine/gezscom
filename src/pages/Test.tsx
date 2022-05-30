import { openOneClient } from "components/manager/client/openOneClient";
import TestAdressLiv from "features/tests/client/TestAdressLiv";
import TestArticleCommande from "features/tests/client/TestArticleCommande";
import TestClient from "features/tests/client/TestClient";
import TestCommande from "features/tests/client/TestCommande";
import React, { useState } from "react";
import { Client, ClientJson } from "tools/types";
import DatePicker from "react-datepicker";
import { OpenClientProp, openClients } from "config/rtk/RtkClient";
import "react-datepicker/dist/react-datepicker.css";
import TestOpenClient from "features/tests/opens/TestOpenClient";
import TestSelect from "features/tests/opens/TestSelect";
import TestOpenUser from "features/tests/user/TestOpenUser";
import TestArticleCommande2 from "features/tests/opens/TestArticleCommande2";
import TestArticleCommande3 from "features/tests/opens/TestArticleCommande3";
import TestFournisseur from "features/tests/opens/TestFournisseur";
import TestArticleClient from "features/tests/opens/TestArticleClient";
import Calendar from "widgets/Calendar";

const Test = () => {
  const [startDate, setStartDate] = useState(new Date());

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
      {<TestArticleCommande3 />}
      {/* <TestFournisseur /> */}
      {/* <TestArticleClient/> */}
    </>
  );
};

export default Test;
