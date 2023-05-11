const themeStyles: Function = (mode: string) => {
  if (mode === "light") {
    return {
      font: "text-black",
      background: "bg-lightGray",
    };
  } else {
    return {
      font: "text-white",
      background: "bg-black",
    };
  }
};

export default themeStyles