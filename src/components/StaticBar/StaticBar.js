const StaticBar = () => {
  return (
    <div className="md:w-[1236px] md:h-[274px] w-[300px] flex md:flex-row flex-col rounded-2xl md:items-center md:mx-auto mx-6  md:mt-24 mt-14   md:pl-0 pl-6 md:py-0 py-8 bg-gradient-to-r from-cyan to-violet">
      <div className="md:basis-1/3 basis-full flex flex-row md:justify-center  items-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_b_0_1)">
            <rect width="100" height="100" rx="20" fill="white" />
          </g>
          <path
            d="M50.2836 33.417C52.6079 33.417 54.4921 31.5328 54.4921 29.2085C54.4921 26.8842 52.6079 25 50.2836 25C47.9593 25 46.0751 26.8842 46.0751 29.2085C46.0751 31.5328 47.9593 33.417 50.2836 33.417Z"
            fill="white"
          />
          <path
            d="M67.1176 35.0379C62.5041 35.0379 57.887 35.0379 53.2744 35.0379C51.4995 33.8818 48.9862 33.8781 47.2294 35.0379C42.4474 35.0379 37.6636 35.0379 32.8816 35.0379C30.1689 35.0379 30.1689 39.2436 32.8816 39.2436C36.9786 39.2436 41.0757 39.2436 45.1728 39.2436C45.1728 43.2619 45.1728 47.2801 45.1728 51.2992C45.1728 51.4007 45.1827 51.4976 45.1872 51.5982C45.1854 51.6462 45.1737 51.687 45.1737 51.7359C45.1737 58.7178 45.161 65.6996 44.8729 72.6769C44.7451 75.781 49.5552 75.7683 49.683 72.6769C49.9095 67.2082 49.9647 61.7367 49.9783 56.2643C50.2066 56.2788 50.435 56.2806 50.6624 56.2661C50.6769 61.7376 50.7321 67.2091 50.9577 72.6769C51.0855 75.7683 55.8947 75.781 55.7678 72.6769C55.4797 65.6996 55.467 58.7178 55.467 51.7359C55.467 51.5221 55.4408 51.3237 55.3964 51.1389C55.3964 47.1741 55.3964 43.2093 55.3964 39.2436C59.3041 39.2436 63.2145 39.2436 67.1194 39.2436C69.8303 39.2436 69.8303 35.0379 67.1176 35.0379Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_0_1"
              x="-64"
              y="-64"
              width="228"
              height="228"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="ml-4 ">
          <h4 className="text-white mb-4">
            Get that 11 line<br></br> in 30 days
          </h4>
          <div className="flex flex-row items-center justify-between text-sm text-gray-300">
            <p>Learn more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:basis-1/3 basis-full flex flex-row md:justify-center  items-center my-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_b_0_1)">
            <rect width="100" height="100" rx="20" fill="white" />
          </g>
          <path
            d="M70.9689 45.2834C69.8666 40.6199 67.94 35.3006 64.3763 31.9451C64.2717 31.8458 64.1638 31.7576 64.054 31.6756C66.067 29.6885 62.8739 26.5792 60.6882 28.5136C56.4454 32.2717 51.5054 35.0319 46.3365 37.3032C46.1413 37.3637 45.9512 37.438 45.7663 37.5235C41.3499 37.3386 35.9409 36.3961 32.8609 33.2298C30.7806 31.0907 27.5158 34.3615 29.5944 36.4972C32.8877 39.8846 37.997 41.3818 42.8489 41.9235C42.8437 42.3684 42.9024 42.8168 43.0441 43.2583C44.9387 49.1633 49.0113 54.9386 55.0562 57.0242C55.4527 57.1624 55.8562 57.2246 56.2562 57.235C56.2562 62.1335 56.2562 67.0302 56.2562 71.927C56.2562 76.0237 62.6104 76.0237 62.6104 71.927C62.6104 65.7456 62.6104 59.5624 62.6104 53.3827C66.7089 51.8 71.8648 49.0639 70.9689 45.2834ZM58.7046 48.0402C58.3746 47.8466 58.0247 47.6799 57.6523 47.552C58.01 47.7481 57.9219 47.7041 57.3836 47.4199C57.1037 47.2747 56.9888 47.2281 56.9448 47.2186C56.9145 47.1788 56.8195 47.0838 56.5655 46.8687C55.9901 46.384 55.2998 45.6678 54.9249 45.1693C53.7871 43.6574 52.9534 42.0307 52.5309 40.7166C52.4126 40.3529 52.2579 40.0099 52.0774 39.6868C54.5413 38.4471 56.9188 37.0613 59.1832 35.4985C59.3422 35.8224 59.5694 36.1386 59.8856 36.4358C62.1966 38.6129 63.4977 41.9434 64.3633 45.0855C62.6933 46.4488 60.7651 47.3317 58.7046 48.0402Z"
            fill="white"
          />
          <path
            d="M44.3737 35.8717C47.3758 35.8717 49.8095 33.438 49.8095 30.4359C49.8095 27.4337 47.3758 25 44.3737 25C41.3715 25 38.9378 27.4337 38.9378 30.4359C38.9378 33.438 41.3715 35.8717 44.3737 35.8717Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_0_1"
              x="-64"
              y="-64"
              width="228"
              height="228"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="ml-4">
          <h4 className="mb-4 text-white">
            14 Days<br></br> sherd challenge
          </h4>
          <div className="flex flex-row items-center justify-between text-sm text-gray-300">
            <p>Learn more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:basis-1/3 basis-full flex flex-row md:justify-center items-center ">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2" filter="url(#filter0_b_0_1)">
            <rect width="100" height="100" rx="20" fill="white" />
          </g>
          <path
            d="M69.1713 42.3676C63.852 45.194 58.5578 48.1128 53.3855 51.2164C51.5464 49.3925 50.0219 47.9407 49.6292 46.2145C49.6507 46.1114 49.561 45.0461 49.5664 44.8954C49.587 44.3538 49.6139 43.8122 49.6713 43.2724C49.8372 41.7524 50.1116 40.2424 50.3591 38.7323C50.7608 36.2708 49.7135 33.8219 47.1229 33.1278C46.2019 32.8812 45.1537 32.9745 44.2112 33.3376C43.8669 33.1493 43.4714 33.0184 43.0204 32.9682C39.212 32.5458 35.4736 31.7074 31.8877 30.3516C28.3071 28.9984 26.7755 34.7258 30.313 36.0637C33.8102 37.3863 37.4303 38.1575 41.1149 38.6561C41.1023 38.726 41.0907 38.796 41.0772 38.8659C36.7739 39.6918 32.5539 40.8584 28.3994 42.2896C24.8099 43.5252 26.3522 49.2499 29.9741 48.0016C33.3906 46.8243 36.8492 45.8262 40.3625 45.0488C40.3589 46.3418 40.4899 47.6161 40.8369 48.841C41.6619 51.7445 43.4652 54.0832 45.4908 56.2335C44.2552 57.0728 43.0123 57.8969 41.7067 58.608C39.3878 59.8715 36.807 61.5528 35.9148 64.1928C34.2586 69.0942 39.3708 71.0365 41.9667 74.0288C44.4731 76.9198 48.6455 72.7116 46.1553 69.8394C44.9098 68.4037 43.2168 67.5205 41.8968 66.1781C41.2619 65.5298 41.3453 66.1153 42.0394 65.4849C43.0473 64.5676 44.2166 64.0295 45.385 63.348C49.0535 61.2103 52.496 58.6609 56.1546 56.4864C61.4174 53.3622 66.7538 50.3564 72.1592 47.4815C75.5344 45.6881 72.543 40.575 69.1713 42.3676Z"
            fill="white"
          />
          <path
            d="M53.0762 34.2954C55.643 34.2954 57.7239 32.2145 57.7239 29.6477C57.7239 27.0808 55.643 25 53.0762 25C50.5093 25 48.4285 27.0808 48.4285 29.6477C48.4285 32.2145 50.5093 34.2954 53.0762 34.2954Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_0_1"
              x="-64"
              y="-64"
              width="228"
              height="228"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="ml-4">
          <h4 className="mb-4 text-white">
            {" "}
            Get flat belly<br></br> in 30 days
          </h4>
          <div className="flex flex-row items-center justify-between text-sm text-gray-300">
            <p>Learn more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBar;
