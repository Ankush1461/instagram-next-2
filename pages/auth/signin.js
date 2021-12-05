import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "./../../components/Header";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 text-center">
        <img
          className="w-80 "
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
          alt=""
        />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-transparent hover:bg-blue-500 rounded-lg text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
