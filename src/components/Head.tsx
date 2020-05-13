import react from "react";
import { default as NextHead } from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
}
const Head = ({ title, description } : HeadProps) => {
  return (
    <NextHead>
      <title>{ title || "congrads.co - highlight and congratulate your favorite graduate"}</title>
    </NextHead>
  )
}

export default Head;