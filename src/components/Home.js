import React from "react";
import Logo from "../images/Logo.png";
import Icon from "../images/Icon.png";
import Asa from "../images/Asa.png";
import Bandana from "../images/Bandana.png";
import Ayra from "../images/Ayra.png";
import Asake from "../images/Asake.png";
import Justin from "../images/Justin.png";
import Tattoo from "../images/Tattoo.png";
import Zino from "../images/Zino.png";
import Rush from "../images/Rush.png";
import { HomeSvg, BlufSvg, PodcastSvg } from "./svgs";

const Home = () => {
  return (
    <div className="container w-auto grid grid-cols-12  justify-center gap-5">
      <div className="  text-lg text-grey-300 pt-8 col-span-2 ">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" />
        </div>
        <div className=" flex justify-center text-[#F3E7E7]">
          <div className="flex flex-col  gap-5">
            <div className="mt-10 uppercase">Menu</div>
            <ul>
              <li className="pb-3 ">
                <div className="flex flex-row gap-3  hover:bg-[#5B585833] hover:w-full hover: h-10">
                  <div className=" w-7 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      ></path>
                    </svg>
                  </div>
                  <a className="" href="#">
                    Home
                  </a>
                </div>
              </li>

              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.22357 5.2008C5.33227 5.09531 5.47841 5.03732 5.62986 5.03957C5.7813 5.04182 5.92566 5.10413 6.03117 5.2128C6.14653 5.33311 6.20984 5.49404 6.20737 5.66071C6.2049 5.82737 6.13685 5.98635 6.01797 6.1032C4.46621 7.67323 3.59719 9.79251 3.59997 12C3.59997 14.388 4.59597 16.5432 6.19677 18.072C6.25858 18.1291 6.3084 18.198 6.3433 18.2745C6.37821 18.3511 6.39751 18.4339 6.40008 18.518C6.40265 18.6021 6.38844 18.6859 6.35827 18.7645C6.3281 18.843 6.28258 18.9148 6.22437 18.9756C6.12114 19.0822 5.98039 19.1444 5.83204 19.1489C5.68369 19.1534 5.53945 19.0998 5.42997 18.9996C4.47222 18.1028 3.70904 17.0187 3.18781 15.8146C2.66657 14.6105 2.39841 13.3121 2.39997 12C2.39997 9.3432 3.47997 6.9384 5.22357 5.2008ZM17.982 6.1032C17.8633 5.98619 17.7954 5.82713 17.7932 5.66046C17.7909 5.49379 17.8545 5.33295 17.97 5.2128C18.0754 5.10449 18.2195 5.04242 18.3707 5.04017C18.5218 5.03792 18.6677 5.09568 18.7764 5.2008C19.6726 6.09158 20.3835 7.15103 20.8682 8.31801C21.3528 9.48499 21.6015 10.7364 21.6 12C21.6 14.76 20.436 17.2488 18.57 18.9996C18.4605 19.0998 18.3162 19.1534 18.1679 19.1489C18.0195 19.1444 17.8788 19.0822 17.7756 18.9756C17.7175 18.9148 17.6722 18.8431 17.6421 18.7647C17.6121 18.6862 17.5979 18.6026 17.6005 18.5186C17.603 18.4346 17.6223 18.352 17.6571 18.2755C17.6919 18.1991 17.7415 18.1303 17.8032 18.0732C18.6251 17.2898 19.2791 16.3474 19.7255 15.3034C20.1719 14.2593 20.4014 13.1355 20.4 12C20.4028 9.79215 19.5338 7.67248 17.982 6.102V6.1032ZM7.35837 7.308C7.46531 7.20615 7.60832 7.15096 7.75595 7.15456C7.90358 7.15816 8.04373 7.22026 8.14557 7.3272C8.39517 7.5768 8.36997 7.9872 8.12397 8.2392C7.14474 9.24594 6.59782 10.5956 6.59997 12C6.59997 13.548 7.25157 14.9448 8.29677 15.93C8.56077 16.1784 8.59677 16.6032 8.33877 16.8612C8.23987 16.964 8.10522 17.0249 7.96269 17.0311C7.82016 17.0374 7.68069 16.9886 7.57317 16.8948C6.88816 16.2767 6.34071 15.5216 5.96633 14.6784C5.59194 13.8351 5.39899 12.9226 5.39997 12C5.39865 11.1271 5.57114 10.2626 5.90737 9.45707C6.24361 8.65151 6.73686 7.92095 7.35837 7.308ZM15.876 8.2392C15.63 7.9872 15.6048 7.5768 15.8544 7.3272C15.9562 7.22026 16.0964 7.15816 16.244 7.15456C16.3916 7.15096 16.5346 7.20615 16.6416 7.308C17.2629 7.92107 17.7561 8.65165 18.0923 9.45719C18.4285 10.2627 18.6011 11.1271 18.6 12C18.6013 12.9227 18.4086 13.8354 18.0344 14.6789C17.6602 15.5223 17.1129 16.2777 16.428 16.896C16.32 16.9902 16.1798 17.039 16.0367 17.0323C15.8936 17.0256 15.7586 16.9639 15.66 16.86C15.4032 16.6032 15.4392 16.1784 15.7032 15.93C16.2397 15.4257 16.6671 14.8168 16.9589 14.1409C17.2508 13.4649 17.4009 12.7363 17.4 12C17.4021 10.5956 16.8552 9.24594 15.876 8.2392ZM12 10.5C11.6021 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2206 13.342 11.6021 13.5 12 13.5C12.3978 13.5 12.7793 13.342 13.0606 13.0607C13.3419 12.7794 13.5 12.3978 13.5 12C13.5 11.6022 13.3419 11.2206 13.0606 10.9393C12.7793 10.658 12.3978 10.5 12 10.5Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Explore</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.01 14C13.1146 14 14.01 13.1046 14.01 12C14.01 10.8954 13.1146 10 12.01 10C10.9054 10 10.01 10.8954 10.01 12C10.01 13.1046 10.9054 14 12.01 14Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M11.01 22H13.01L13.51 15H10.51L11.01 22Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M12 2C9.57199 2.01429 7.23208 2.91149 5.41694 4.52421C3.6018 6.13692 2.43542 8.35496 2.13546 10.7644C1.8355 13.1739 2.42245 15.6102 3.78677 17.6188C5.1511 19.6273 7.1996 21.0708 9.55003 21.68L9.40003 19.56C7.61041 18.9437 6.09728 17.7128 5.12959 16.086C4.1619 14.4593 3.80233 12.5422 4.11478 10.6754C4.42724 8.80858 5.39148 7.11302 6.83613 5.89007C8.28078 4.66712 10.1122 3.99601 12.005 3.99601C13.8978 3.99601 15.7293 4.66712 17.1739 5.89007C18.6186 7.11302 19.5828 8.80858 19.8953 10.6754C20.2077 12.5422 19.8482 14.4593 18.8805 16.086C17.9128 17.7128 16.3996 18.9437 14.61 19.56L14.46 21.68C16.8112 21.0706 18.8603 19.6262 20.2245 17.6167C21.5888 15.6071 22.175 13.1697 21.8738 10.7595C21.5725 8.34938 20.4043 6.13126 18.5874 4.51935C16.7704 2.90743 14.4289 2.01191 12 2Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M15.32 9.61001C15.4685 9.82203 15.5927 10.0501 15.69 10.29C15.7921 10.5315 15.8692 10.7828 15.92 11.04C15.9801 11.3024 16.0103 11.5708 16.01 11.84C16.0103 12.1125 15.9801 12.3842 15.92 12.65C15.8692 12.9072 15.7921 13.1585 15.69 13.4C15.5927 13.6399 15.4685 13.868 15.32 14.08C15.2119 14.2301 15.095 14.3737 14.97 14.51L14.78 17.13C14.9795 17.0387 15.1732 16.9352 15.36 16.82C16.0085 16.3939 16.566 15.8433 17 15.2C17.2171 14.8864 17.4014 14.5513 17.55 14.2C17.7043 13.836 17.8216 13.4575 17.9 13.07C17.9751 12.6645 18.0086 12.2523 18 11.84C17.9963 11.4334 17.9528 11.0281 17.87 10.63C17.7192 9.8677 17.4239 9.1413 17 8.49001C16.7844 8.17165 16.54 7.87374 16.27 7.60001C15.9989 7.32711 15.7007 7.08252 15.38 6.87001C15.0644 6.65334 14.7297 6.4659 14.38 6.31001C14.0011 6.16858 13.6092 6.06474 13.21 6.00001C12.4146 5.84 11.5954 5.84 10.8 6.00001C10.4115 6.079 10.0326 6.1997 9.67001 6.36001C9.31872 6.50862 8.98363 6.69292 8.67001 6.91001C8.34935 7.12252 8.05114 7.36711 7.78001 7.64001C7.49452 7.89885 7.23342 8.18338 7.00001 8.49001C6.56556 9.13903 6.26001 9.86556 6.10001 10.63C6.02723 11.0291 5.99374 11.4344 6.00001 11.84C5.99934 12.2463 6.03954 12.6517 6.12001 13.05C6.19846 13.4375 6.31572 13.816 6.47001 14.18C6.61862 14.5313 6.80292 14.8664 7.02001 15.18C7.4554 15.8154 8.00466 16.3646 8.64001 16.8C8.82678 16.9152 9.02048 17.0187 9.22001 17.11L9.00001 14.51C8.87498 14.3737 8.75811 14.2301 8.65001 14.08C8.50148 13.868 8.37736 13.6399 8.28001 13.4C8.17787 13.1585 8.1008 12.9072 8.05001 12.65C8.00329 12.3827 7.98651 12.111 8.00001 11.84C7.99638 11.5712 8.02322 11.3028 8.08001 11.04C8.1308 10.7828 8.20787 10.5315 8.31001 10.29C8.40736 10.0501 8.53148 9.82203 8.68001 9.61001C8.82617 9.3907 8.99365 9.18637 9.18001 9.00001C9.36044 8.82102 9.55806 8.66025 9.77001 8.52001C9.98203 8.37148 10.2101 8.24736 10.45 8.15001C10.6912 8.04465 10.9425 7.96423 11.2 7.91001C11.732 7.81006 12.278 7.81006 12.81 7.91001C13.0675 7.96423 13.3188 8.04465 13.56 8.15001C14.0396 8.33863 14.4728 8.62857 14.83 9.00001C15.0157 9.18433 15.1801 9.38895 15.32 9.61001Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Podcast</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Playlist</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                  </div>
                  <a href="#">Favourites</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.086 3.3588C21.9516 2.8308 21.2988 2.4 20.634 2.4H3.36599C2.69999 2.4 2.04719 2.8308 1.91399 3.3588L1.67279 4.8H22.326L22.086 3.3588ZM23.2944 6H0.704387C0.607461 6.00006 0.511617 6.02037 0.422994 6.05963C0.334371 6.09888 0.254924 6.15621 0.189742 6.22794C0.124559 6.29968 0.0750782 6.38423 0.0444685 6.4762C0.0138588 6.56817 0.00279527 6.66551 0.0119866 6.762L1.11959 20.7648C1.14165 20.9933 1.24801 21.2055 1.41794 21.3599C1.58787 21.5143 1.80919 21.5999 2.03879 21.6H21.96C22.1896 21.5999 22.4109 21.5143 22.5808 21.3599C22.7508 21.2055 22.8571 20.9933 22.8792 20.7648L23.9868 6.762C23.996 6.66551 23.9849 6.56817 23.9543 6.4762C23.9237 6.38423 23.8742 6.29968 23.809 6.22794C23.7438 6.15621 23.6644 6.09888 23.5758 6.05963C23.4872 6.02037 23.3913 6.00006 23.2944 6ZM14.3304 15.0252C14.1768 15.3432 14.0208 15.36 14.088 15.0252C14.2632 14.16 14.1444 12.3024 12.8364 12.096V16.0488C12.8364 16.8576 12.4632 17.5632 11.4732 17.8824C10.5108 18.1896 9.43439 17.8692 9.18359 17.1792C8.93159 16.488 9.49679 15.648 10.446 15.3024C10.9764 15.1092 11.5908 15.0588 12.0048 15.2184V9.6H12.8376C12.8364 11.5596 16.2192 11.13 14.3304 15.0252Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Library</a>
                </div>
              </li>
            </ul>

            <div> PLAYLIST</div>
            <ul>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Traffic Vibez</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Work</a>
                </div>
              </li>
              <li className="pb-3">
                <div className="flex flex-row gap-3 hover:bg-[#5B585833] hover:w-full">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
                        fill="#F3E7E7"
                      />
                      <path
                        d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Soft Gbedu</a>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-3">
                  <div className=" w-7">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10H3V12H14V10ZM14 6H3V8H14V6ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM3 16H10V14H3V16Z"
                        fill="#F3E7E7"
                      />
                    </svg>
                  </div>
                  <a href="#">Add Playlist</a>
                </div>
              </li>
            </ul>

            <div className="flex flex-row gap-3">
              <div className=" w-7">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 9H7.5M15 12L18 9L15 6M10 4V3C10 2.46957 9.78929 1.96086 9.41421 1.58579C9.03914 1.21071 8.53043 1 8 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H8C8.53043 17 9.03914 16.7893 9.41421 16.4142C9.78929 16.0391 10 15.5304 10 15V14"
                    stroke="#F3E7E7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-7 text-[#F3E7E7] pt-8 flex flex-row justify-between">
        <div>
          <input
            className="text-[#F3E7E7] bg-[#5B5858] w-96 px-10 py-3 rounded-lg"
            type=""
            placeholder="Search artists, songs, podcasts..."
          />
        </div>

        <div className="flex flex-row gap-3">
          <div className="w-8 cursor-pointer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_466)">
                <path
                  d="M17.9999 34.28C18.6299 34.2655 19.2344 34.0287 19.7065 33.6114C20.1787 33.1942 20.4881 32.6234 20.5799 32H15.3199C15.4144 32.6403 15.7383 33.2245 16.2312 33.6439C16.7242 34.0633 17.3528 34.2894 17.9999 34.28Z"
                  fill="#F3E7E7"
                />
                <path
                  d="M32.85 28.13L32.51 27.83C31.5455 26.9706 30.7012 25.985 30 24.9C29.2343 23.4025 28.7753 21.7672 28.65 20.09V15.15C28.646 14.5499 28.5925 13.9513 28.49 13.36C26.7962 13.0118 25.2746 12.089 24.1831 10.7478C23.0915 9.40654 22.4969 7.72929 22.5 5.99999V5.36999C21.456 4.85618 20.3342 4.5183 19.18 4.36999V3.10999C19.18 2.75593 19.0394 2.41637 18.789 2.16601C18.5387 1.91565 18.1991 1.77499 17.845 1.77499C17.491 1.77499 17.1514 1.91565 16.9011 2.16601C16.6507 2.41637 16.51 2.75593 16.51 3.10999V4.41999C13.9258 4.78455 11.5606 6.07174 9.85127 8.04393C8.14192 10.0161 7.20378 12.5401 7.21005 15.15V20.09C7.0848 21.7672 6.62583 23.4025 5.86005 24.9C5.17093 25.9823 4.34024 26.9677 3.39005 27.83L3.05005 28.13V30.95H32.85V28.13Z"
                  fill="#F3E7E7"
                />
                <path
                  d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"
                  fill="#A22E20"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_466">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="pt-1">WakaWaka Boy</div>
          <div>
            <img src={Icon} alt="Profile Picture" />
          </div>
          <div className="mt-3 cursor-pointer">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0L8 7.5L15.5 0H0.5Z" fill="#F3E7E7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-[#F3E7E7] flex flex-col bg-[#17161A] px-5 h-screen rounded-3xl">
        <div>
          <div>Hotlist</div>
          <div>
            <div>Trending Songs</div>

            <ul>
              <li className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <img className="w-10 " src={Rush} alt="Rush" />
                    <div>
                      <div>Rush</div>
                      <div>Ayra Star</div>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="w-5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                          fill="#F3E7E7"
                        />
                      </svg>
                    </div>

                    <div className="w-5">
                      <svg
                        width="4"
                        height="18"
                        viewBox="0 0 4 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                          stroke="#F3E7E7"
                          stroke-width="2"
                        />
                        <path
                          d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                          stroke="#F3E7E7"
                          stroke-width="2"
                        />
                        <path
                          d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                          stroke="#F3E7E7"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
