import React from "react";
import SocialIcons from "./socialIcons";
import AppLogo from "../../../assets/AppLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-col gap-2">
              <a href="" className="flex items-center flex-wrap flex-col">
                <img src={AppLogo} className="h-16 me-3" alt="App Logo" />
              </a>
              <SocialIcons />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Cities
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Bangalore
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Delhi
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Mumbai
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Chennai
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Hyderabad
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://twitter.com" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              Copyright © @ 2022 Access labz
            </span>
            <span className="text-sm text-gray-500 sm:text-center flex gap-1">
              All Rights Reserved |
              <a
                href="https://flowbite.com/"
                className="hover:underline text-blue-400"
              >
                Terms and Conditions
              </a>
              |
              <a
                href="https://flowbite.com/"
                className="hover:underline text-blue-400"
              >
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
