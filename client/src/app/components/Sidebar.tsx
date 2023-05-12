import React from "react";
import styles from "../styles";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {
  faHome,
  faBell,
  faHashtag,
  faInbox,
  faBookmark,
  faClipboard,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      className={`${styles.flexColStart} sm:hidden items-start w-[340px] mdsm:w-[90px] p-2 fixed h-[100%]`}
    >
      <div
        className={`${styles.flexCenter} hover-logo w-auto h-auto transition dutation-200 ease-out mdsm:px-0 w-[72px] h-[72px] cursor-pointer`}
      >
        <Image src="../logo1.svg" width={60} height={60} alt="logo" />
      </div>

      <div className={`gap-[1rem] flex flex-col mt-4 mb-2.5`}>
        <SidebarLink text="Home" Icon={faHome} active={true} />
        <SidebarLink text="Explore" Icon={faHashtag} active={false} />
        <SidebarLink text="Notifications" Icon={faBell} active={false} />
        <SidebarLink text="Messages" Icon={faInbox} active={false} />
        <SidebarLink text="Bookmarks" Icon={faBookmark} active={false} />
        <SidebarLink text="Lists" Icon={faClipboard} active={false} />
        <SidebarLink text="Profile" Icon={faUser} active={false} />
        <SidebarLink text="More" Icon={faEllipsis} active={false} />
      </div>

      <button
        className={`${styles.flexCenter} bg-moderateBlue rounded-[10rem] px-[15%] py-[1rem] font-bold text-[1.1em]`}
      >
        Post
      </button>
    </div>
  );
};

export default Sidebar;
