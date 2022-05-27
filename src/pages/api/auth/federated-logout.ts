// /api/auth/federated-logout
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function federatedLogout(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await getToken({ req, secret: process.env.SECRET })
    //console.log('federated logout - token ? ', token);
    if (!token) {
      console.warn("No JWT token found when calling /federated-logout endpoint")
      return res.redirect(process.env.NEXTAUTH_URL ?? '')
    }
    if (!token.id_token)
      console.warn("Without an id_token the user won't be redirected back from the IdP after logout.")

    const endsessionURL = `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/logout`
    const endsessionParams = new URLSearchParams({
      id_token_hint: <string>token.id_token ?? '',
      post_logout_redirect_uri: process.env.NEXTAUTH_URL ?? ''
    })
    return res.redirect(`${endsessionURL}?${endsessionParams}`);
  } catch (error) {
    console.error(error)
    res.redirect(process.env.NEXTAUTH_URL ?? '');
  }
}