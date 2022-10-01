import type { NextPage } from "next";

import { Input } from "../components/shared/Form";

const Auth: NextPage = () => {
  return (
    <main>
      <div>
        <h1>Sign in to your account</h1>
        <p>Something here to explain another thing</p>

        <form>
          <Input />
        </form>
      </div>
    </main>
  );
};

export default Auth;
