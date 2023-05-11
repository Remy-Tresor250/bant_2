import React from "react";
import styles from "../styles";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className={`${styles.flexStart} sm:hidden mdsm:items-start xl:w-[340px] p-2 fixed h-[100%]`}
    >
      <div
        className={`${styles.flexCenter} hover-logo w-auto h-auto transition dutation-200 ease-out mdsm:px-0 w-[72px] h-[72px] cursor-pointer`}
      >
        <Image src="../logo2.svg" width={100} height={100} alt="logo" />
      </div>

      <div className={``}></div>
    </div>
  );
};

export default Sidebar;
