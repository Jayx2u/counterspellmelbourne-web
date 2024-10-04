import { Tilt } from "react-next-tilt";

import hacker_card from "../assets/images/cards/hacker.png";
import musician_card from "../assets/images/cards/musician.png";
import artist_card from "../assets/images/cards/artist.png";

export default function Cards() {
  return (
    <div className="flex flex-col justify-center items-center text-center py-24 retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>Artist, Musician or Coder?</p>
        <p>
          Join one of three <span className="text-pink">guilds</span> when you
          sign up!
        </p>
      </div>

      <div className="flex flex-wrap justify-center xl:justify-between max-w-6xl gap-8 py-10 w-full">
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src={artist_card}
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src={musician_card}
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src={hacker_card}
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </Tilt>
      </div>

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="mt-6 border-4 border-dashed border-pink max-w-6xl py-6 px-6">
          <p class="neuebit text-3xl">
            {}
            You can join one of the three guilds for exclusive swag and
            badges! You'll also get to compete against other guilds in friendly
            activities and challenges throughout Counterspell Melbourne!
          </p>
        </div>
      </div>
    </div>
  );
}
