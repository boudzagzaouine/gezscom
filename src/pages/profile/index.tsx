import { Button, View } from "components";
import { signIn, signOut, useSession } from "next-auth/react";

function logout() {
  signOut();
}
function login() {
  signIn();
}

export default function MePage() {
  const { data: session, status } = useSession();
  // const loading = status === "loading";

  return (
    <View>
      status : {status}
      <Button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        onClick={logout}
      >
        Sign out
      </Button>
      <Button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        onClick={login}
      >
        Sign in
      </Button>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </View>
  );
}
