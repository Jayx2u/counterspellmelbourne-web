import about1 from "../assets/images/photos/about1.png";
import about2 from "../assets/images/photos/about2.png";


export default function About() {
  return (
    <div class="flex justify-center neuebit text-3xl py-24">
      <div className="max-w-8xl space-y-12">
        <h2 className="text-center retro uppercase text-4xl text-whitepurp pb-6">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 border-4 border-pink border-dashed p-8 md:p-12 space-y-12">
            <p>
              {}
              Counterspell Melbourne is a beginner friendly hackathon/game jam for high
              schoolers happening this November where{" "}
              <span className="text-pink">
                artists, musicians, and coders
              </span>{" "}
              will get together to build apps and games.
            </p>
            <p className="retro text-2xl uppercase">Build whatever you want!</p>
            <p>
              {}
              Any game counts! The theme for Counterspell Melbourne will be
              decided through peer voting before the event starts.{" "}
            </p>
            <p>
              {/*TODO: Confirm event duration and update accordingly */}
              Whether you’re a beginner or experienced in programming- we’ll
              have workshops, resources and mentors throughout the 24 hours to
              help you with your project.
            </p>
            <p className="retro text-2xl uppercase">Bring your friends!</p>
            <p>
              Counterspell is{" "}
              <span className="text-pink">
                  more fun with friends!
              </span>{" "}
              Team up with people you know, or meet new people at the event to
              collaborate on your game or app. Whether you're working in a group
              or solo, you'll have plenty of opportunities to share ideas,
              get creative, and learn together.
            </p>
          </div>
          <div className="border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding h-64 xl:h-auto"
            style={{ backgroundImage: `url(${about1})` }}
          ></div>
          <div
            className="hidden xl:block border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding"
            style={{ backgroundImage: `url(${about2})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
