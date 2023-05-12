import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles";

interface SidebarLinkProps {
  sidebarLinks: {
    text: string;
    Icon: any;
    active: any;
  };
}

const SidebarLink = ({
  text,
  Icon,
  active,
}: SidebarLinkProps["sidebarLinks"]) => {
  return (
    <div
      className={`${
        styles.flexStart
      } px-[1rem] py-[0.4rem] hover-logo cursor-pointer text-lg ${
        active && "bg-modDarkBlue"
      } rounded-[10rem]`}
    >
      <div className={`mr-[1rem] mdsm:mr-0`}>
        <FontAwesomeIcon icon={Icon} />
      </div>
      <h5 className={`mdsm:hidden`}>{text}</h5>
    </div>
  );
};

export default SidebarLink;
