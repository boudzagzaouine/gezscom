import { Head, Image, Link, Text, View } from "widgets";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "hooks/translate";

const WallPage: NextPage = () => {
  const { t } = useTranslation(["wall", "common"]);
  return (
    <View>
      <Head title="Wall" />
      <View as="footer" >
        <Text>{t("wall-intro")}</Text>
        <Image src="/images/logo.jpg" height={144} width={144} alt="username" />
        <Link href="/">{t("back", { ns: "common" })}</Link>
      </View>
    </View>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      layout: 'empty',
      ...(await serverSideTranslations(locale, ["common", "wall"])),
      // Will be passed to the page component as props
    },
  };
}

export default WallPage;
