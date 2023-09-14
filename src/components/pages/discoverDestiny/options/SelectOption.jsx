"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [
  { name: "Default" },
  { name: "Upright Meaning" },
  { name: "Reversed Meaning" },
  { name: "Advice Position" },
];

export default function SelectOption() {
  const [selected, setSelected] = useState();
  const [cardSide, setCardSide] = useState("front");
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-2 mb-2 ">
          <input
            onClick={() => setCardSide("front")}
            checked={cardSide === "front"}
            type="radio"
            name="card-front-side"
            className="w-4 h-4 rounded-full border-[#866345] cursor-pointer "
          />
          <p className="text-[#DBCBF4] text-sm">Card front side</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ">
          <input
            onClick={() => setCardSide("back")}
            checked={cardSide === "back"}
            type="radio"
            name="card-back-side"
            className="w-4 h-4 rounded-full border-[#866345] cursor-pointer"
          />
          <p className="text-[#DBCBF4] text-sm">Card back side</p>
        </div>
      </div>
      <div className="w-[150px] md:w-48">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#674B53] py-1 sm:py-1.5 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs sm:text-sm text-[#E5BD9D]">
              <span className="block truncate">
                {selected?.name || "Select Option"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#674B53] py-1 text-base shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default text-xs sm:text-sm select-none py-2 pl-8 sm:pl-10 pr-4 ${
                        active
                          ? "bg-[#20192A] text-[#E5BD9D]"
                          : "text-[#E5BD9D]"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#E5BD9D]">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
