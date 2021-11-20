import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ThemeForm() {
  return (
    <div className="lg:flex lg:space-x-10">
      <div className="lg:w-1/2 space-y-7">
        <div className="user_story grid md:grid-cols-4 grid-cols-3 gap-2 relative">
          <a href="#create-post" uk-toggle="target: body ; cls: story-active">
            <div className="single_story">
              <img src="/images/avatars/avatar-lg-1.jpg" alt="" />
              <div className="story-avatar">
                {" "}
                <img src="/images/avatars/avatar-1.jpg" alt="" />
              </div>
              <div className="story-content">
                {" "}
                <h4> Jonathan</h4>{" "}
              </div>
            </div>
          </a>
          <a href="#" uk-toggle="target: body ; cls: story-active">
            <div className="single_story">
              <img src="/images/avatars/avatar-lg-2.jpg" alt="" />
              <div className="story-avatar">
                {" "}
                <img src="/images/avatars/avatar-2.jpg" alt="" />
              </div>
              <div className="story-content">
                {" "}
                <h4> Jonathan</h4>{" "}
              </div>
            </div>
          </a>
          <a href="#" uk-toggle="target: body ; cls: story-active">
            <div className="single_story">
              <img src="/images/avatars/avatar-lg-3.jpg" alt="" />
              <div className="story-avatar">
                {" "}
                <img src="/images/avatars/avatar-3.jpg" alt="" />
              </div>
              <div className="story-content">
                {" "}
                <h4> Jonathan</h4>{" "}
              </div>
            </div>
          </a>
          <a href="#" uk-toggle="target: body ; cls: story-active">
            <div className="single_story">
              <img src="/images/avatars/avatar-lg-4.jpg" alt="" />
              <div className="story-avatar">
                {" "}
                <img src="/images/avatars/avatar-4.jpg" alt="" />
              </div>
              <div className="story-content">
                {" "}
                <h4> Jonathan</h4>{" "}
              </div>
            </div>
          </a>
          <span
            className="absolute bg-white lg:flex items-center justify-center p-2 rounded-full 
                                  shadow-md text-xl w-9 z-10 uk-position-center-right -mr-4 hidden"
            uk-toggle="target: body ; cls: story-active"
          >
            <i className="icon-feather-chevron-right" />
          </span>
        </div>
        <div
          className="card lg:mx-0 p-4"
          uk-toggle="target: #create-post-modal"
        >
          <div className="flex space-x-3">
            <img
              src="/images/avatars/avatar-2.jpg"
              className="w-10 h-10 rounded-full"
            />
            <input
              placeholder="What's Your Mind ? Hamse!"
              className="bg-gray-100 hover:bg-gray-200 flex-1 h-10 px-6 rounded-full"
            />
          </div>
          <div className="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
            <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
              <svg
                className="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block"
                data-tippy-placement="top"
                title="Tooltip"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Photo/Video
            </div>
            <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
              <svg
                className="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block"
                uk-tooltip="title: Messages ; pos: bottom ;offset:7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                title
                aria-expanded="false"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Tag Friend
            </div>
            <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
              <svg
                className="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Fealing /Activity
            </div>
          </div>
        </div>
        <div className="card lg:mx-0 uk-animation-slide-bottom-small">
          {/* post header*/}
          <div className="flex justify-between items-center lg:p-4 p-2.5">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#">
                <img
                  src="/images/avatars/avatar-2.jpg"
                  className="bg-gray-200 border border-white rounded-full w-10 h-10"
                />
              </a>
              <div className="flex-1 font-semibold capitalize">
                <a href="#" className="text-black dark:text-gray-100">
                  {" "}
                  Johnson smith{" "}
                </a>
                <div className="text-gray-700 flex items-center space-x-2">
                  {" "}
                  5 <span> hrs </span> <ion-icon name="people" />
                </div>
              </div>
            </div>
            <div>
              <a href="#">
                {" "}
                <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" />{" "}
              </a>
              <div
                className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
              >
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-share-alt mr-1" /> Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-edit-alt mr-1" /> Edit Post
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-comment-slash mr-1" /> Disable comments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-favorite mr-1" /> Add favorites
                    </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2 dark:border-gray-800" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                    >
                      <i className="uil-trash-alt mr-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div uk-lightbox>
            <div className="grid grid-cols-2 gap-2 px-5">
              <a href="/images/post/img-4.jpg" className="col-span-2">
                <img
                  src="/images/post/img-4.jpg"
                  alt=""
                  className="rounded-md w-full lg:h-76 object-cover"
                />
              </a>
              <a href="/images/post/img-4.jpg">
                <img
                  src="/images/post/img-2.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </a>
              <a href="/images/post/img-4.jpg" className="relative">
                <img
                  src="/images/post/img-3.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
                <div className="absolute bg-gray-900 bg-opacity-30 flex justify-center items-center text-white rounded-md inset-0 text-2xl">
                  {" "}
                  + 15 more{" "}
                </div>
              </a>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex space-x-4 lg:font-bold">
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div> Like</div>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div> Comment</div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 flex-1 justify-end"
              >
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div> Share</div>
              </a>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center">
                <img
                  src="/images/avatars/avatar-1.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                />
                <img
                  src="/images/avatars/avatar-4.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
                <img
                  src="/images/avatars/avatar-2.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
              </div>
              <div className="dark:text-gray-100">
                Liked <strong> Johnson</strong> and{" "}
                <strong> 209 Others </strong>
              </div>
            </div>
            <div className="border-t py-4 space-y-4 dark:border-gray-600">
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      In ut odio libero vulputate{" "}
                      <urna className="i uil-heart" />{" "}
                      <i className="uil-grin-tongue-wink"> </i>{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      {" "}
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. David !
                      <i className="uil-grin-tongue-wink-alt" />{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-blue-600 hover:underline">
              {" "}
              Veiw 8 more Comments{" "}
            </a>
            <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
              <input
                placeholder="Add your Comment.."
                className="bg-transparent max-h-10 shadow-none px-5"
              />
              <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                <a href="#">
                  <ion-icon
                    name="happy-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="image-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="link-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:mx-0 uk-animation-slide-bottom-small">
          {/* post header*/}
          <div className="flex justify-between items-center lg:p-4 p-2.5">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#">
                <img
                  src="/images/avatars/avatar-2.jpg"
                  className="bg-gray-200 border border-white rounded-full w-10 h-10"
                />
              </a>
              <div className="flex-1 font-semibold capitalize">
                <a href="#" className="text-black dark:text-gray-100">
                  {" "}
                  Johnson smith{" "}
                </a>
                <div className="text-gray-700 flex items-center space-x-2">
                  {" "}
                  5 <span> hrs </span> <ion-icon name="people" />
                </div>
              </div>
            </div>
            <div>
              <a href="#">
                {" "}
                <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" />{" "}
              </a>
              <div
                className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
              >
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-share-alt mr-1" /> Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-edit-alt mr-1" /> Edit Post
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-comment-slash mr-1" /> Disable comments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-favorite mr-1" /> Add favorites
                    </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2 dark:border-gray-800" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                    >
                      <i className="uil-trash-alt mr-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/pQN-pnXPaVg"
              frameBorder={0}
              uk-video="automute: true"
              allowFullScreen
              uk-responsive
              className="w-full lg:h-64 h-40"
            />
          </div>
          <div className="p-4 space-y-3">
            <div className="flex space-x-4 lg:font-bold">
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div> Like</div>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div> Comment</div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 flex-1 justify-end"
              >
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div> Share</div>
              </a>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center">
                <img
                  src="/images/avatars/avatar-1.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                />
                <img
                  src="/images/avatars/avatar-4.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
                <img
                  src="/images/avatars/avatar-2.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
              </div>
              <div className="dark:text-gray-100">
                Liked <strong> Johnson</strong> and{" "}
                <strong> 209 Others </strong>
              </div>
            </div>
            <a href="#" className="hover:text-blue-600 hover:underline">
              {" "}
              Veiw 2 more Comments{" "}
            </a>
            <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
              <input
                placeholder="Add your Comment.."
                className="bg-transparent max-h-10 shadow-none px-5"
              />
              <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                <a href="#">
                  <ion-icon
                    name="happy-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="image-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="link-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 space-y-7 lg:mt-0 mt-7">
        <div className="card lg:mx-0 uk-animation-slide-bottom-small">
          {/* post header*/}
          <div className="flex justify-between items-center lg:p-4 p-2.5">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#">
                <img
                  src="/images/avatars/avatar-2.jpg"
                  className="bg-gray-200 border border-white rounded-full w-10 h-10"
                />
              </a>
              <div className="flex-1 font-semibold capitalize">
                <a href="#" className="text-black dark:text-gray-100">
                  {" "}
                  Johnson smith{" "}
                </a>
                <div className="text-gray-700 flex items-center space-x-2">
                  {" "}
                  5 <span> hrs </span> <ion-icon name="people" />
                </div>
              </div>
            </div>
            <div>
              <a href="#">
                {" "}
                <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" />{" "}
              </a>
              <div
                className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
              >
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-share-alt mr-1" /> Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-edit-alt mr-1" /> Edit Post
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-comment-slash mr-1" /> Disable comments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-favorite mr-1" /> Add favorites
                    </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2 dark:border-gray-800" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                    >
                      <i className="uil-trash-alt mr-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div uk-lightbox>
            <a href="/images/avatars/avatar-lg-3.jpg">
              <img
                src="/images/avatars/avatar-lg-4.jpg"
                alt=""
                className="max-h-96 w-full object-cover"
              />
            </a>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex space-x-4 lg:font-bold">
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div> Like</div>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div> Comment</div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 flex-1 justify-end"
              >
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div> Share</div>
              </a>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center">
                <img
                  src="/images/avatars/avatar-1.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                />
                <img
                  src="/images/avatars/avatar-4.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
                <img
                  src="/images/avatars/avatar-2.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
              </div>
              <div className="dark:text-gray-100">
                Liked <strong> Johnson</strong> and{" "}
                <strong> 209 Others </strong>
              </div>
            </div>
            <div className="border-t py-4 space-y-4 dark:border-gray-600">
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      In ut odio libero vulputate{" "}
                      <urna className="i uil-heart" />{" "}
                      <i className="uil-grin-tongue-wink"> </i>{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      {" "}
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. David !
                      <i className="uil-grin-tongue-wink-alt" />{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-blue-600 hover:underline">
              {" "}
              Veiw 8 more Comments{" "}
            </a>
            <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
              <input
                placeholder="Add your Comment.."
                className="bg-transparent max-h-10 shadow-none px-5"
              />
              <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                <a href="#">
                  <ion-icon
                    name="happy-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="image-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="link-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:mx-0 uk-animation-slide-bottom-small">
          {/* post header*/}
          <div className="flex justify-between items-center lg:p-4 p-2.5">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#">
                <img
                  src="/images/avatars/avatar-2.jpg"
                  className="bg-gray-200 border border-white rounded-full w-10 h-10"
                />
              </a>
              <div className="flex-1 font-semibold capitalize">
                <a href="#" className="text-black dark:text-gray-100">
                  {" "}
                  Johnson smith{" "}
                </a>
                <div className="text-gray-700 flex items-center space-x-2">
                  {" "}
                  5 <span> hrs </span> <ion-icon name="people" />
                </div>
              </div>
            </div>
            <div>
              <a href="#">
                {" "}
                <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" />{" "}
              </a>
              <div
                className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
              >
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-share-alt mr-1" /> Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-edit-alt mr-1" /> Edit Post
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-comment-slash mr-1" /> Disable comments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                    >
                      <i className="uil-favorite mr-1" /> Add favorites
                    </a>
                  </li>
                  <li>
                    <hr className="-mx-2 my-2 dark:border-gray-800" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                    >
                      <i className="uil-trash-alt mr-1" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-5 pt-0 border-b dark:border-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim laoreet dolore magna aliquam erat
            volutpat
          </div>
          <div className="p-4 space-y-3">
            <div className="flex space-x-4 lg:font-bold">
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div> Like</div>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div> Comment</div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 flex-1 justify-end"
              >
                <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={22}
                    height={22}
                    className="dark:text-gray-100"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div> Share</div>
              </a>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center">
                <img
                  src="/images/avatars/avatar-1.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                />
                <img
                  src="/images/avatars/avatar-4.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
                <img
                  src="/images/avatars/avatar-2.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
                />
              </div>
              <div className="dark:text-gray-100">
                Liked <strong> Johnson</strong> and{" "}
                <strong> 209 Others </strong>
              </div>
            </div>
            <div className="border-t py-4 space-y-4 dark:border-gray-600">
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      In ut odio libero vulputate{" "}
                      <urna className="i uil-heart" />{" "}
                      <i className="uil-grin-tongue-wink"> </i>{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                  <img
                    src="/images/avatars/avatar-1.jpg"
                    alt=""
                    className="absolute h-full rounded-full w-full"
                  />
                </div>
                <div>
                  <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                    <p className="leading-6">
                      {" "}
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. David !
                      <i className="uil-grin-tongue-wink-alt" />{" "}
                    </p>
                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                  </div>
                  <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
                    <a href="#" className="text-red-600">
                      {" "}
                      <i className="uil-heart" /> Love{" "}
                    </a>
                    <a href="#"> Replay </a>
                    <span> 3d </span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-blue-600 hover:underline">
              {" "}
              Veiw 8 more Comments{" "}
            </a>
            <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
              <input
                placeholder="Add your Comment.."
                className="bg-transparent max-h-10 shadow-none px-5"
              />
              <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                <a href="#">
                  <ion-icon
                    name="happy-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="image-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
                <a href="#">
                  <ion-icon
                    name="link-outline"
                    className="hover:bg-gray-200 p-1.5 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white"
          >
            Load more ..
          </a>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
      // Will be passed to the page component as props
    },
  };
}
