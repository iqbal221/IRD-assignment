const Hero = () => {
  return (
    <div className="md:w-[1279px] md:h-[581px] w-[375px] flex lg:flex-row flex-col md:mt-14 mt-2 md:mx-auto mx-6 ">
      {/* Hero left part */}
      <div className="md:basis-1/2 basis-full">
        <h1 className=" md:text-7xl md:w-[568px] md:h-[146px] w-[327px] h-[78px] text-3xl tracking-wide font-serif md:mt-24 mt-10 font-bold">
          Health in Side <span className="text-pink mr-4">fresh</span>out Side
        </h1>
        <p className="md:w-[492px] md:h-[84px] w-[288px] h-[66px] text-gray md:text-base text-sm lg:mt-6 my-4 leading-6">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        <div className="flex items-center md:mt-0 mt-10">
          <button className="bg-blue md:w-52 w-36 md:h-14 h-10 rounded-md text-white md:mr-7 mr-2">
            <div className="flex justify-between md:px-5 px-2">
              <span>Get Started</span>
              <span className="text-blue text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 rounded-full bg-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </button>
          <button className="md:w-40 w-32 md:h-14 h-10 bg-white rounded-md shadow-md  shadow-blue">
            <div className="flex justify-between md:px-4 px-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 bg-blue text-white text-md rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Learn More</span>
            </div>
          </button>
        </div>
        <h3 className="md:mt-20 mt-6">Brands:</h3>
        <div className=" flex items-center ">
          <img
            className="md:w-[58px] w-[45px] md:h-[27px] h-[21px] text-gray-500 md:mr-12 mr-3 opacity-25"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAACNCAMAAACzDCDRAAAAflBMVEX///8AAAD7+/vx8fGenp7CwsKXl5enp6fR0dGrq6vV1dX39/d8fHzg4OD09PSRkZHo6OhmZma7u7tVVVUtLS3Ly8vb29sQEBBCQkLHx8dzc3OCgoJGRkbj4+M6OjqKioooKChubm40NDQhISGysrI8PDxdXV1RUVEUFBQaGhrVpohXAAAGIElEQVR4nO3diWKiMBAA0AUV8USt2noVrVf7/z+4hapFmxNmkgnmfUASZ3EMk2n23z/P8zzP8zzP8zzPUxHGtlfwFN5sL4CwxmE2hBnpqwMzTv3E6boZAo21DYAGqpdR5xQcW2DDTYM22Fh1Ebb6QRAsB3AjvgX+Yb7Xjb5jEgRRD3DM7xGbgMO5btQZZyEOtgfQYc+Bf5ivwtbqNY9x8AK8wT19j5nCDumoS6bI9EfAY++yURvAg7rnmilyYBu4mzQbdgw9qlt+M0XmYwI/QzsfuQs/sDMKmSJ/4jBisfj590MY2Ql3mSKTQqfk3OBncNiNiyO+M8XnfYyxXtGGl+FxRqesG60fQhy8wb1TP9heNi9Y49P0J1NkdnO0+U6XKfBmIOd+T/GbkhE3tMlljj3eFLR0oyMjxAFuCbh1neYpyhlZRZNpvcCd9zYRyh6Gkl5e0WSCLHMy3VLUEXkiy2J2pshFQCdPfC+3uWqcMzZtTqbIAJc5maLf6Tb4s9kwnHAzRQa6zMkU/873aWA64+LkQxTjoG/k2eoVZlyZmNCkgShT5ODLnGzFkhTufsaw4WQpCTFKmZMtKU4LeaZo1yyZymIcnMy1VsXFeWtSAx20X3iRLVgZfEUI72c2NzGWhjxT5Mx2otz/sxvLVEhmqTxTZI6GP2j7fnqXd82DpkqmyIxNFyFHDwswPD0Y1UyRwSxzcuzvV+DmL+As3SrH+NNGp+vqYRE7C2uoRm1PcYVc5uSIH5eR2FhFaQpvH3fQy5wcfxbiUO94rLinuMEvc3L8fRbQTnNhbbQyRWZvryniT8oIAgf+rKenmSky55nFBTPWQ72rS1bRZDJT5uR53GVkKL+dbHinpGKgDfb65qw1UW3RCFt9Vj+F1NR68YD5O00yNz/0aKozWObkaTMXRq6oz+y8UmOyzMnTYy/N+nesiNN5pcbUyZPYjrM42+u6YfRoqnsn8rgwf/8CKs2go0PpTJFBabAvhbf7tN9yxOjm1mOhzMkz4S7S7rpK7ymuXkn9DTR/nfa+bxX2FFd4DfalNPkrjawsqOzbxx3EBvtSQsFap+aXEyf8Hk11CZ2UfJGKlmv2kShZp3i0J1gnHwpXvDS3DnGPpjqrZU4uVmWuwMwZQ5y8w8TYcpmTS/wwm3ichd3cmiyXOfmEmTmDei4JlikyJhrsSxJtM37gbTZKnX1wEShz8gn2zFcod5YA7SluwO8RgaXyEaCrzj3ITJGjUebk41cziiDTM2ymyJhrsC9NcRsF9I3U67xSQ6fMycerM/9R/bPo9GiqW5F7p2ZRz5HVXl91ejTV0SpzCmh8pnHZX5l584wQYnJlToGD1ucq8UszOuxQQkyvzCmi+Zi9a9VkwsXqCyfEFMucAg3tj6d6iW4YVzmIlnDtKml2C4xEKvu2NlopVLWN5UyuRUem7ClFf8LZRzdmzV310yURWw32FejnjIJz2lnMG5fdR2MzO0TLiqfQCsiWOUX09hnWES5zClU+oDfJyD0iKGxHTgPxMqfIwHbslFEvcwo5kpodKHMKQZfWUZA+eVIC0duDjEKDfVW2YyjlSplTqNLLCT53ypxiXduBFDF+jwialvzD2kKowb6yju1gcrhW5pSI5J/YAjv3iCCiGGYHy5wykn5bC6zdI4JJ2glqlsV7RFCRSho0G+whKLSCmkK0wR4EmQJd5HKZU2phO7w5+/eIIKNQ1Xe/zCkl/2sIbHUoc8rhNlRIOX3ypGFnMcZU7hExoFRrF4j6lDkV2PoNrFOZU4WNGL/Wq8ypwnxVY12Tkyctpo+pXGqwh7SXhwZOUscypxJz51QU7xExx1CQ61vmVGNk67yscZlTEX6QnWywh4bcrOF6NycYzI799ZOn5CK0ID9V4UJK+Q4CPc9WuJBSu7hEy7SmzQCVQO/qdg7cI2IDZJy37Sc5FCkBrJdg5X/2REB+B0/PWOXUE1a9FG598MlCRZUNx8vhaYuc+hJ5PFl2E/8caxlqB/o98pu3MjrqNx5+rFq++FbaJlL4vzpPzZnPFFU1JivuZUXHZXvmyxVwNotOsjydp7m387iftFtzH2DP8zzP8zzP8zzPe/AfxRVZgw6jHBkAAAAASUVORK5CYII="
            alt=""
          />
          <img
            className="md:w-[53.87px] w-[41px] md:h-[54.63px] h-[41px] text-gray-500 md:mr-12 mr-3 opacity-25"
            src="data:image/png;base64,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"
            alt=""
          />

          <img
            className="md:w-[80px] w-[61px] md:h-[41px] h-[31px]  text-gray-500 md:mr-12 mr-3 opacity-25"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="md:w-[119px] w-[92px] md:h-[100px] h-[50px]  text-gray-500 opacity-25"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
      {/* Hero right part */}
      <div className="md:basis-1/2 basis-full md:mt-0 mt-10 md:pl-44 pl-14   ">
        <div className="border border-1 absolute md:top-[240px]  md:left-[740px] hidden rounded-lg px-4 z-10 md:flex justify-center items-center bg-white">
          <div className="bg-white">
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <rect
                  x="14"
                  y="10"
                  width="60"
                  height="60"
                  rx="30"
                  fill="url(#paint0_linear_0_1)"
                />
              </g>
              <path
                d="M56.92 35.1572C53.1965 37.1357 49.4906 39.1789 45.87 41.3514C44.5826 40.0746 43.5155 39.0584 43.2405 37.8501C43.2556 37.7779 43.1928 37.0322 43.1966 36.9267C43.211 36.5476 43.2299 36.1685 43.2701 35.7906C43.3862 34.7266 43.5783 33.6696 43.7515 32.6125C44.0327 30.8895 43.2996 29.1752 41.4861 28.6894C40.8415 28.5168 40.1077 28.5821 39.448 28.8363C39.2069 28.7045 38.9301 28.6128 38.6144 28.5777C35.9485 28.282 33.3317 27.6951 30.8215 26.746C28.3151 25.7988 27.243 29.808 29.7192 30.7445C32.1673 31.6703 34.7013 32.2102 37.2805 32.5592C37.2717 32.6081 37.2636 32.6571 37.2542 32.7061C34.2418 33.2842 31.2879 34.1008 28.3797 35.1026C25.867 35.9676 26.9467 39.9748 29.482 39.1011C31.8735 38.2769 34.2946 37.5783 36.7539 37.0341C36.7514 37.9392 36.843 38.8312 37.0859 39.6886C37.6634 41.7211 38.9257 43.3581 40.3437 44.8634C39.4787 45.4509 38.6087 46.0278 37.6948 46.5255C36.0716 47.41 34.265 48.5869 33.6405 50.4349C32.4811 53.8659 36.0596 55.2255 37.8768 57.3201C39.6313 59.3438 42.552 56.398 40.8088 54.3875C39.937 53.3825 38.7519 52.7643 37.8279 51.8246C37.3835 51.3708 37.4418 51.7806 37.9277 51.3394C38.6332 50.6972 39.4517 50.3206 40.2696 49.8436C42.8376 48.3471 45.2473 46.5626 47.8083 45.0404C51.4923 42.8535 55.2278 40.7494 59.0115 38.737C61.3742 37.4816 59.2802 33.9025 56.92 35.1572Z"
                fill="white"
              />
              <path
                d="M45.6536 29.5068C47.4504 29.5068 48.9069 28.0502 48.9069 26.2534C48.9069 24.4566 47.4504 23 45.6536 23C43.8568 23 42.4002 24.4566 42.4002 26.2534C42.4002 28.0502 43.8568 29.5068 45.6536 29.5068Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0"
                  y="0"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="27"
                  y1="66.5"
                  x2="74"
                  y2="19.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F8A422" />
                  <stop offset="1" stop-color="#FEDEAC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-xs">
            <p className="font-bold mb-2">150+</p>
            <p>members</p>
          </div>
        </div>
        <div className="absolute md:top-[240px] md:right-[60px] z-10 md:flex hidden">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <rect
                x="14"
                y="10"
                width="60"
                height="60"
                rx="30"
                fill="url(#paint0_linear_0_1)"
              />
            </g>
            <path
              d="M45.1253 28.7502C46.7132 28.7502 48.0004 27.463 48.0004 25.8751C48.0004 24.2872 46.7132 23 45.1253 23C43.5374 23 42.2502 24.2872 42.2502 25.8751C42.2502 27.463 43.5374 28.7502 45.1253 28.7502Z"
              fill="white"
            />
            <path
              d="M49.1028 31.5046C49.1958 30.9769 48.9903 30.4363 48.323 30.1501C45.7878 29.0612 42.8867 29.2961 40.1247 30.0682C40.1253 30.1801 40.12 30.2926 40.1023 30.4063C39.9586 31.332 39.9286 32.13 39.9469 33.0835L45.1258 32.8991C45.1258 32.8991 45.8514 33.09 45.3107 33.3479C44.5493 33.3815 39.524 33.6235 39.524 33.6235C39.4622 32.3456 39.4581 31.0653 39.6524 29.8114C39.9504 27.8863 37.0099 27.0594 36.709 28.9999C36.3191 31.5122 36.5076 34.0034 36.6548 36.5275C36.7184 37.6341 37.9174 38.4927 38.951 37.8455C39.696 37.3785 40.4139 36.8543 41.0982 36.2895L41.0958 37.276L41.0746 47.9148V56.354C41.0746 57.2627 41.7389 58 42.6736 58C43.607 58 44.3655 57.2627 44.3655 56.354V44.2918H45.859C45.859 47.118 45.859 53.5684 45.859 56.3952C45.859 58.3634 48.912 58.3634 48.912 56.3952C48.912 53.5684 48.912 50.7422 48.912 47.9172C49.5344 35.1718 49.5368 35.2101 49.1028 31.5046Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="88"
                height="88"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="24"
                y1="61"
                x2="74"
                y2="19.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4BACE1" />
                <stop offset="1" stop-color="#D8F1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="border border-1 absolute md:bottom-[-80px] md:right-[80px] md:block hidden pb-2 text-center rounded-lg px-4 z-10  bg-white">
          <div className="flex justify-center">
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2_1819)">
                <rect
                  x="14"
                  y="10"
                  width="60"
                  height="60"
                  rx="30"
                  fill="url(#paint0_linear_2_1819)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_1819"
                  x="0"
                  y="0"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_1819"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_1819"
                  x1="27"
                  y1="66.5"
                  x2="74"
                  y2="19.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F8A422" />
                  <stop offset="1" stop-color="#FEDEAC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-xs">
            <p className="font-bold">Zaqky Simorang</p>
            <p>Trainer</p>
          </div>
        </div>
        <img
          className="md:w-[380px] md:h-[580px] w-[200px] h-[350px]  relative rounded "
          src="https://www.mensjournal.com/wp-content/uploads/mf/_main2_trainer2.jpg?quality=86&strip=all"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
