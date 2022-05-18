import nextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";


export default nextAuth ({
        
  providers : [
          KeycloakProvider({
                  clientId:"client",
                  clientSecret:"L0ejjfLkKWDBgp5buzco4KZQeMGrt6Mc",
                  issuer: "http://localhost:4001/realms/gescom"
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
          

})
// export default NextAuth({
  
  // https://next-auth.js.org/configuration/providers/oauth
  // providers: [
  //   KeycloakProvider({
  //     // clientId: process.env.KEYCLOAK_ID ?? "client",
  //     // clientSecret: process.env.KEYCLOAK_SECRET ?? "vJHaEwb4ZBeGpe1FenBfbwlMZG7SMVGZ",
  //     // issuer: process.env.KEYCLOAK_ISSUER,http://localhost:8080/auth/realms/Gescom
  //     clientId: "client",
  //     clientSecret: "r9p2O8LH5rdMK8jJ0HHbRZLI7Tnf7zF3",
  //     issuer:"http://localhost:8080/realms/gescom"


      
  //   }),
  // ],
  // pages: {
  //   signIn: '/auth/signin',
  // },
  // theme: {
  //   colorScheme: "light",
  // },
  // callbacks: {
  //   jwt({ token, account }) {
  //     // console.log("token ? ", token)
  //     // console.log("account ? ", account)
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     token.userRole = "admin";
  //     return token;
  //   },

  //   session({ session, token }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
// });
