import React from "react";
import { Heading } from "../Text/Text";

function PageHeader({ title }) {
  return (
    <div className="py-2 md:py-3">
      <Heading size="md" as="h3">
        {title}
      </Heading>
    </div>
  );
}

export default PageHeader;
