import { Analytics } from "@vercel/analytics/react";
import React from "react";


export default function Poster1Analytics() {
    window.location.href = `/`;

    return (
      <div className="flex flex-col space-y-8 mx-4 justify-center items-center min-h-screen retro">
        <h1 className="text-5xl">Redirecting to...</h1>
        <div>
          <p className="text-center retro text-4xl text-whitepurp pb-6"><a href="https://counterspellmelbourne.com/">https://counterspellmelbourne.com/</a></p>
        </div>

        <Analytics/>
      </div>
    );
};
