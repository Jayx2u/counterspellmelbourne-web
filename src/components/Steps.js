import Schedule from "./Schedule";

const apo1 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/photos/apo1.png";
const apo2 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/photos/apo2.png";
const apo3 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/photos/apo3.png";
const apo4 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/photos/apo4.png";
const apo5 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/photos/apo5.png";


export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="text-3xl uppercase py-10 retro mx-6">
            How does a <span className="text-pink">game jam</span> work?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="border-4 border-pink border-dashed flex flex-wrap items-center justify-center inter p-8 gap-6">
              <StepCard
                img={apo1}
                text="Sign up for Counterspell Melbourne"
              />
              <StepCard
                img={apo2}
                text="Find a team of other teenagers at Counterspell"
              />
              <StepCard
                img={apo3}
                text="Start building your game (no experience needed)"
              />
              <StepCard
                img={apo5}
                text="Attend workshops, or talk to one of our mentors for help"
              />
              <StepCard
                img={apo4}
                text="Ship what you made and share it with the rest of the world!"
              />
            </div>
          </div>
          <div className="py-10 text-xl uppercase retro space-y-4 mx-6">
            <p className="">
              {}
              Counterspell Melbourne will go on for{" "}
              {/* TODO: Confirm event duration and update accordingly */}
              <span className="text-pink">24 hours</span>
            </p>
            <p className="">
              Here's a rough schedule so you know what to expect!
            </p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="bg-pink p-4 neuebit text-xl leading-6 tracking-wide">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="justify-center items-center flex flex-col overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
