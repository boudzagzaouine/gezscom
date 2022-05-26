import React, { useRef } from "react";
import { bureauDouane0 } from "tools/types";
import FormBureauDouane from "features/reference/BureauDouane/FormBureauDouane";

export default function NewArticle() {
  const form = useRef(null);
  return (
    <div>
      <FormBureauDouane bureauDouane={bureauDouane0} ref={form} />
    </div>
  );
}
