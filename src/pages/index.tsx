import { Col, Form, Head, Link, Text, View } from "components";
import Counter from "features/counter/Counter";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "hooks/translate";


const IndexPage: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <Col>
      <Head title={t("title")} />
      <View as="header">
        <Text as="h1">
          <Link href="wall">{t("wall-link")}</Link>
        </Text>
      </View>
      <View as="main">
        <Counter />
      </View>
      <Form.Control as="input" href="wefwe" />
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
