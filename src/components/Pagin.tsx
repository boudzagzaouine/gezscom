import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { PAGE_SIZE } from "tools/consts";
type PaginProps = {
  load: (page: number) => void;
};
const Pagin = ({ load }: PaginProps) => {
  const [init, setInit] = useState(0);
  const [page, setPage] = useState(init);
  let size: number = PAGE_SIZE;
  let max: number = 300;
  const run = (p: number) => {
    try {
      setPage(p);
      load(page);
    } catch (error) {
      console.log("error pagination \n" + error);
    }
  };

  const next = () => {
    let m = Math.trunc(max / size) + (max % size) - 2;
    setInit(init + 1);
    if (init > m) setInit(m);
  };
  const prev = () => {
    setInit(init - 1);
    if (init < 1) setInit(1);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className={"inline-flex -space-x-px float-right my-8"}>
        <li>
          <button
            onClick={() => prev()}
            className={
              "py-2 px-3 ml-0 leading-tight rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          >
            <ArrowLeftIcon
              className="h-5 w-5 text-cyan-700 group-hover:text-gray-500 float-left"
              aria-hidden="true"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => run(init)}
            className={
              "py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
              (page == init
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 bg-white")
            }
          >
            {init + 1}
          </button>
        </li>
        <li>
          <button
            onClick={() => run(init + 1)}
            className={
              "py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
              (page == init + 1
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 bg-white")
            }
          >
            {init + 2}
          </button>
        </li>
        <li>
          <button
            onClick={() => run(init + 2)}
            aria-current="page"
            className={
              "py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
              (page == init + 2
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 bg-white")
            }
          >
            {init + 3}
          </button>
        </li>
        <li>
          <button
            onClick={() => run(init + 3)}
            className={
              "py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
              (page == init + 3
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 bg-white")
            }
          >
            {init + 4}
          </button>
        </li>
        <li>
          <button
            onClick={() => run(init + 4)}
            className={
              "py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
              (page == init + 4
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 bg-white")
            }
          >
            {init + 5}
          </button>
        </li>
        <li>
          <button
            onClick={() => next()}
            className={
              "py-2 px-3 leading-tight rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          >
            <ArrowRightIcon
              className="h-5 w-5 text-cyan-700 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagin;
