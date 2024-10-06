import React, { useEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS as dndCSS } from "@dnd-kit/utilities";
import { confetti } from "@tsparticles/confetti";

const faq1 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq1.png";
const faq2 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq2.png";
const faq3 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq3.png";
const faq4 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq4.png";
const faq5 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq5.png";
const faq6 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq6.png";
const faq7 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq7.png";
const faq8 = "https://raw.githubusercontent.com/Jayx2u/counterspellmelbourne-web/refs/heads/main/src/assets/images/faq/faq8.png";

const faqBkgrs = [faq1, faq2, faq3, faq4, faq5, faq6, faq7, faq8];

const faqData = [
  {
    question: "Am I eligible to sign up?",
    answer: `If you're 18 or under, yes, of course! If you're over 18 but
        still in high school, shoot us an email
        <a href="mailto:contact@counterspellmelbourne.com">here</a>,
        and we'll make sure to figure it out.`,
  },
  {
    question: "Does participating cost anything?",
    answer: `Attendance is <u>completely free</u>! All the funds are from our generous sponsors. We'll have meals and snacks onsite, as well as swag, prizes, and fun mini-events.`,
  },
  {
    question: "I'm not good at coding, can I join?",
    answer: `This hackathon is for hackers of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out <a href="https://workshops.hackclub.com/">Hack Club Workshops</a>.`,
  },
  {
    question: "What can I make at Counterspell?",
    answer: `At Counterspell, we'll be building video games of all kinds! The theme will be revealed at the start of the event.`,
  },
  {
    question: "What do I need to bring to Counterspell?",
    answer: `Your laptop, charger, and an open mind! You'll also need to bring toiletries, and a sleeping bag.`,
  },
  {
    question: "What has Hack Club done before?",
    answer: `We have run multiple events around the world. The summer of 2021, we 
        <a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">chartered a train across America</a>
        and ran the world's longest hackathon on land. Last year, we ran an outdoors do-it-yourself <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">camping 
        adventure</a> in Cabot, Vermont.`,
  },
  {
    question: "My parents are worried!",
    answer: `We're here to help! Ask them to reach out to us
          <a href="mailto:contact@counterspellmelbourne.com">here</a>
          and we'll make sure to answer all their questions! We'll also be hosting two parent info sessions a few weeks before the event.`,
  },
  {
    question: "I have more questions, where can I ask?",
    answer: `Contact us! Email us <a href="mailto:contact@counterspellmelbourne.com">here</a> or reach us in <a href="https://hackclub.com/slack/">#counterspell-melbourne</a> on the Hack Club Slack!
          We're always ready to answer all your questions!`,
  },
];

function FaqCard(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const faqBkgr = props.bkgrs ? faqBkgrs[props.bkgrs[props.id - 1] - 1] : null;

  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
    backgroundImage: faqBkgr ? `url(${faqBkgr})` : undefined,
  };

  const faqItem = faqData[props.id - 1];

  return (
    <div
      className="bg-pink max-w-lg lg:w-[445px] lg:h-[280px] bg-cover bg-center"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="p-5 h-full">
        <div className="h-full bg-black/40 p-3 flex flex-col justify-center">
          <p className="mb-2 text-lg uppercase retro">{faqItem.question}</p>
          <p
            className="neuebit text-xl text-justify leading-6"
            dangerouslySetInnerHTML={{ __html: faqItem.answer }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const numFaq = faqData.length;
  const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
  const [faqItems, setFaqItems] = useState(faqIds);
  const [randomFaqBkgrs, setRandomFaqBkgrs] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [prevSolved, setPrevSolved] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const randArray = Array.from({ length: numFaq }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setRandomFaqBkgrs(randArray);
    const correct = faqIds.toSorted(
      (a, b) => randArray[a - 1] - randArray[b - 1]
    );
    setCorrectOrder(correct);
  }, []);

  useEffect(() => {
    if (
      !prevSolved &&
      JSON.stringify(faqItems) === JSON.stringify(correctOrder)
    ) {
      confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 1 },
        startVelocity: 75,
        colors: ["#65FF96", "#43DDFF", "#2A2AFF", "#FF4387"],
      });
      setPrevSolved(true);
    }
  }, [faqItems, correctOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="p-5 gap-8 inter grid lg:grid-cols-2">
      {screenWidth > 1024 ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={faqItems}>
            {faqItems.map((id) => (
              <FaqCard id={id} key={id} bkgrs={randomFaqBkgrs} />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        faqItems.map((id) => <FaqCard id={id} key={id} />)
      )}
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFaqItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
