import React from 'react'
import glanceone from '../assets/Images/glanceone.png'
import glancetwo from '../assets/Images/glancetwo.png'

const Glance = () => {
  return (
    <div className="px-[35px] md:px-[58px]">
      <div className="flex my-20 gap-5 ">
        <p className="font-lato text-[12px] text-[#C8C8C8] font-normal leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
          Home
        </p>
        <p className="font-lato text-[12px] text-[#C8C8C8] font-normal leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
          Cities
        </p>
        <p className="font-lato text-[12px] text-primblack font-normal leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
          Rome
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-10 xl:justify-between ">
        <div className="text-left flex flex-row flex-wrap lg:flex-col gap-10 ">
          <p className="font-lato  text-oraonge gap-2 text-[20px] font-bold leading-[24px] tracking-[0.04em] flex items-baseline  underline-offset-auto decoration-skip-ink-none">
            <span className=" border-2 border-oraonge rounded-full h-[11px] w-[11px] p-[5px]"></span>{" "}
            At a Glance
          </p>
          <p className="font-lato text-[12px]  flex gap-3 items-center text-[#898989] font-normal leading-[14.4px] tracking-[0.04em]  underline-offset-auto decoration-skip-ink-none">
            <span className="h-[6px] w-[6px] bg-[#C8C8C8] rounded-full"></span>
            Transportation in Rome
          </p>
          <p className="font-lato text-[12px]  flex gap-3 items-center text-[#898989] font-normal leading-[14.4px] tracking-[0.04em]  underline-offset-auto decoration-skip-ink-none">
            <span className="h-[6px] w-[6px] bg-[#C8C8C8] rounded-full"></span>
            Airport Transfers in Rome
          </p>
          <p className="font-lato text-[12px]  flex gap-3 items-center text-[#898989] font-normal leading-[14.4px] tracking-[0.04em]  underline-offset-auto decoration-skip-ink-none">
            <span className="h-[6px] w-[6px] bg-[#C8C8C8] rounded-full"></span>{" "}
            Sightseeing Transportation
          </p>
        </div>
        <div className="lg:w-[925px]">
          <p className="text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
            Nestled in the heart of Italian Peninsula, Rome is the capital of
            the country and one of the most populated cities in Italy. From its
            rich architecture to rare artefacts, this city is known to possess a
            history like none other. The picturesque atmosphere, the cold wind
            blowing and the serene atmosphere is what makes Rome a must visit
            place for all the travel fanatics out there.
          </p>

          <div className="flex flex-wrap items-start">
            {/* Text Section */}
            <p className="flex-1 text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none pr-4">
              <br /> A perfect blend of gothic ruins, jaw dropping art and
              lively nights, Rome sets an exemplary example for a place about
              how it should entertain its travellers. The city wholeheartedly
              welcomes travellers from a wide array of interests, from awe
              inspiring monuments to living life at its best, Rome will never
              fail to surprise you with a new place to explore.
              <br />
              <br />{" "}
              <span className="hidden lg:block">
                A perfect blend of gothic ruins, jaw dropping art and lively
                nights, Rome sets an exemplary example for a place about how it
                should entertain its travellers. The city wholeheartedly
                welcomes travellers from a wide array of interests, from awe
              </span>
            </p>

            {/* Image Section */}
            <div className="sm:w-[375px] w-[300px] px-1 sm:px-0 flex-shrink-0">
              <img
                src={glanceone}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#737373] font-lato text-[12px] font-normal leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
                  Rome Civitavecchia
                </p>
                <p className="text-[8px] text-[#737373] font-normal leading-[14.4px] tracking-[0.04em]">
                  |
                </p>
                <p className="text-[#898989] font-lato text-[10px] font-normal italic leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
                  Image by{" "}
                  <span className="text-[#2A6E95]">Alejandro Picasso</span>
                </p>
              </div>
            </div>
          </div>
          <p className="flex-1 lg:hidden block text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none pr-4">
            <br /> A perfect blend of gothic ruins, jaw dropping art and lively
            nights, Rome sets an exemplary example for a place about how it
            should entertain its travellers. The city wholeheartedly welcomes
            travellers from a wide array of interests, from awe inspiring
            monuments to living life at its best, Rome will never fail to
            surprise you with a new place to explore.
            <br />
            <br />{" "}
          </p>
          <p className="text-primblack font-lato hidden lg:block text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
            inspiring monuments to living life at its best, Rome will never fail
            to surprise you with a new place to explore.
            <br />
            <br />
          </p>
          <p className="text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
            The Roman Empire has been an icon when it comes to historical
            importance. The Roman Empire had cut the ribbons when Augustus
            Caesar announced to be the first emperor of Rome in 31BC and ended
            with the fall of Constantinople in 1453CE. Known to be the centre of
            the Roman Empire, Rome attracts the majority of the crowd due to its
            rich history and politics.
          </p>
          <br />
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="sm:w-[375px] px-1 sm:px-0 flex-shrink-0">
              <img
                src={glancetwo}
                alt=""
                className=" w-full h-[250px] object-cover "
              />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#898989] font-lato text-[10px] font-normal italic leading-[14.4px] tracking-[0.04em] text-center underline-offset-auto decoration-skip-ink-none">
                  Image by{" "}
                  <span className="text-[#2A6E95]">VIA DEI MONTI PARIOLI</span>
                </p>
              </div>
            </div>

            <p className="text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
              Referred to as ‘An Eternal City’ in the beginning of the history,
              Rome is seen to be a dream for music lovers due to the Parco Della
              Musica which is known to be one of the largest music venues in the
              world. Not only music, Rome has also set itself in the most wanted
              places to visit in the world and is the third most visited places
              in the entire Europe. This place has experienced arts from
              different periods and became a home for some of the most renowned
              artists such as Borromini, Bernini, Carracci and Cortona.
            </p>
          </div>

          <br />
          <p className="text-primblack font-lato text-[16px] font-normal leading-[25.52px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
            Embracing the ancient art, Rome has now decided to use its
            innovation to give birth to contemporary art to keep enhancing their
            love for art and architecture, National Museum of the 21st Century
            Arts is a live example of that. The Italian cuisine has somehow
            managed to be a king of all cuisines, from the Carciofi alla romana
            to the Spaghetti alla carbonara- Delicious spaghetti topped with
            bacon, smokey eggs and pecorino is what makes it mouth watering.
            <br />
            <br />
            Rome has a series of reasons to attract you and slip you into its
            warm arms to rejuvenate your soul with its authentic art,
            awe-inspiring architecture and mouth-watering food.
            <br />
            <br />
          </p>
          <div className="w-[95px] bg-[#B9B9B9] h-[2px] mb-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Glance
