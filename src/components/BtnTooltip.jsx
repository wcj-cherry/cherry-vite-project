import React, { useState } from "react";
import { Tooltip } from "reactstrap";

export default function BtnTooltip() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip
      isOpen={tooltipOpen}
      target="BtnTooltip"
      toggle={toggle}
      placement="bottom"
    >
      Are you clicking? &#128561;
    </Tooltip>
  );
}
