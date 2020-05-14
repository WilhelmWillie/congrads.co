import react from "react";
import { default as NextHead } from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
}
const Head = ({ title, description } : HeadProps) => {
  return (
    <NextHead>
      <title>{ title || "Congrads - Send love to your favorite graduates"}</title>

      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500;700;900&display=swap" rel="stylesheet" />
    </NextHead>
  )
}

export default Head;