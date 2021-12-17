import React, { useState, useEffect } from "react";

export const DynamicSvg = ({ name }) => {
  let [icon, setIcon] = useState("");

  useEffect(async () => {
    let importedIcon = await import(`../assets/countries/squard/${name}.svg`);
    setIcon(importedIcon.default);
  }, []);

  return <img alt="" src={icon} />;
};
