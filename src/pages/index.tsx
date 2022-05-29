import { Col, Form, Head, Link, Text, View } from "widgets";
import Counter from "features/counter/Counter";
import { useTranslation } from "hooks/translate";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { getSession, signIn } from "next-auth/react";

const IndexPage: NextPage = () => {
  /*useEffect(()=>{
        
    const securePage = async () =>{
        const session = await getSession()
        if(!session){
            signIn("keycloak")
        }else{
          console.log(session)
        }

        
    }
   securePage() 
})*/
  const { t } = useTranslation("common");
  return (
    <Col>
      <Head title={t("GESCOM")} />
      <View as="main">
        <h1 className="center">La Page d'accueil en cours d'instruction</h1>
      </View>
   </Col>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default IndexPage;
