import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");

  // setVarient uses a call back function with parameter as currentVarient which is the current varient i.e. login
  const toggleVarient = useCallback(() => {
    setVarient((curretVarient) =>
      curretVarient === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[url('../public/images/hero.jpg')] bg-no-reapeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "register" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  type="text"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />

              <button className="bg-red-600 rounded-md py-3 text-white w-full mt-10 hover:bg-red-700 transition">
                {varient === "login" ? "login" : "Sign up"}
              </button>
              <p className="text-neutral-500 mt-12">
                {varient === "login"
                  ? "First time using Netflix?"
                  : "Already have an account?"}
                <span
                  onClick={toggleVarient}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {varient === "login" ? "Create an account" : "login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
