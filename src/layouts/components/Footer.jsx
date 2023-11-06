import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F5FF] h-fit">
      <div className="px-3 sm:container sm:mx-auto py-3 space-y-5 sm:space-y-0">
        <div className="grid grid-cols-1 sm:hidden">
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img
                className="w-6"
                src="/src/assets/icons/LogosFacebook.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="w-6"
                src="/src/assets/icons/LogosMessenger.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="w-6"
                src="/src/assets/icons/SkillIconsInstagram.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 ">
          <section className="space-y-2">
            <img className="w-12" src="/src/assets/icons/LogosWix.svg" alt="" />
            <p>Chuyên quần áo theo bộ, đồng phục</p>
          </section>
          <section>
            <div className="space-y-3">
              <p className="font-bold">Sản phẩm</p>
              <a href="#">Sản phẩm mới nhất</a>
            </div>
          </section>
          <section>
            <div className="space-y-3">
              <p className="font-bold">Liên hệ</p>
              <a className="flex items-center" href="#">
                <img
                  className="w-5"
                  src="/src/assets/icons/MaterialSymbolsAlternateEmailRounded.svg"
                  alt=""
                />
                wix@gmail.com
              </a>
              <a className="flex items-start" href="#">
                <img
                  className="w-5"
                  src="/src/assets/icons/MaterialSymbolsHomePinOutlineRounded.svg"
                  alt=""
                />
                0/0C1 tổ 9 ấp 3,xã Xuân Thới Thới, huyện Hóc Môn
              </a>
              <a className="flex items-center" href="#">
                <img
                  className="w-5"
                  src="/src/assets/icons/IcTwotoneCall.svg"
                  alt=""
                />
                +84 977182341
              </a>
            </div>
          </section>
          <section className="hidden sm:block">
            <div className="space-y-3 flex flex-col justify-end">
              <p className="font-bold">Mạng xã hội</p>
              <a className="flex space-x-1" href="#">
                <img
                  className="w-6"
                  src="/src/assets/icons/LogosFacebook.svg"
                  alt=""
                />
                <span>Facebook</span>
              </a>
              <a className="flex space-x-1" href="#">
                <img
                  className="w-6"
                  src="/src/assets/icons/LogosMessenger.svg"
                  alt=""
                />
                <span>Messenger</span>
              </a>
              <a className="flex space-x-1" href="#">
                <img
                  className="w-6"
                  src="/src/assets/icons/SkillIconsInstagram.svg"
                  alt=""
                />
                <span>Instagram</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
