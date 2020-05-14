import react from "react";
import { default as NextHead } from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
}
const Head = ({ title, description } : HeadProps) => {
  return (
    <NextHead>
      <title>{ title || "congrads.co - send love to your favorite graduates"}</title>

      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </NextHead>
  )
}

export default Head;