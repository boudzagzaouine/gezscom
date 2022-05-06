import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID ?? "",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    jwt({ token, account }) {
      // console.log("token ? ", token)
      // console.log("account ? ", account)
      if (account) {
        token.accessToken = account.access_token;
      }
      token.userRole = "admin";
      return token;
    },
    session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
