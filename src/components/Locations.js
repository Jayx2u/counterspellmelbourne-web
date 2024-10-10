import { useState } from "react";
import Map from "./Map";

const flare1 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/flares/flare1.png";
const flare2 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/flares/flare2.png";
const flare3 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/flares/flare3.png";


export default function Locations() {
  const [submitBtn, setSubmitBtn] = useState("Continue");

  return (
    <div className="neuebit py-24 px-6 bg-darker text-center retro relative">
      <p className="text-3xl uppercase">
        {}
        Can't make it to Melbourne?
      </p>
      <p className="text-xl">
        There are 200+ other Counterspell locations worldwide!
      </p>
      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map/>
        </div>
      </div>

      <div className="flex justify-center text-center text-2xl space-y-2 my-20" id="interest">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl">
          <p>
            Counterspell Melbourne is organised by teenagers, for teenagers.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col space-y-3 uppercase">
        <p className="text-center text-xl">
          Get notified when registrations open
        </p>
        <small className="text-center text-large">
          Note: you'll be redirected{" "}
          <a href="https://counterspellmelb.fillout.com/t/7YCjumurXYus">
            here
          </a>{" "}
          to finish the form.
        </small>
        <form
          method="post"
          action="https://app.loops.so/api/newsletter-form/clo3frr4v02f3jv0qqu6hgfqs"
          className="retro text-2xl sm:text-3xl flex flex-col lg:flex-row space-y-4 lg:space-y-0"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            className="outline-none border-4 lg:border-r-0 border-pink bg-transparent border-dashed px-4 h-16 sm:h-20 lg:w-[500px] w-full"
            placeholder="fiona@hackclub.com"
            required
          />
          <input type="hidden" name="userGroup" value="Hack Clubber"/>
          <input
            type="hidden"
            name="mailingLists"
            value="cm1fqxdc900qn0ll9fd5m3wdv"
          />
          <button
            type="submit"
            className="uppercase bg-pink h-16 sm:h-20 px-4 border-4 border-pink"
            id="formSubmit"
          >
            {submitBtn}
          </button>
        </form>
      </div>

      <img
        src={flare1}
        alt=""
        className="w-48 absolute top-0 right-0 -z-10"
      ></img>
      <div class="absolute left-0 top-0 bottom-0">
        <div class="flex items-center h-full">
          <img src={flare2} alt="" className="w-48 -z-10 opacity-80"></img>
        </div>
      </div>
      <img
        src={flare3}
        alt=""
        className="w-48 absolute bottom-8 right-0 -z-10"
      ></img>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Hack Club Mailing List
    fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitBtn("Success");
        } else {
          setSubmitBtn("Error");
        }
      })
      .catch((error) => {
        setSubmitBtn("Error");
      });

    // Counterspell Melb Mailing List
    const formData = new FormData(form);
    const email = formData.get("email");
    window.location.href = `https://counterspellmelb.fillout.com/t/7YCjumurXYus?ref=${encodeURIComponent(
      "website")}&email=${encodeURIComponent(email)}`;
  }
}
