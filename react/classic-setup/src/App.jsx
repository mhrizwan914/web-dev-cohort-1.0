import { useEffect, useState } from "react";

export default function App() {
  const [quote, set_quote] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
      .then((response) => response.json())
      .then((data) => set_quote(data?.data?.content))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>Hello, I'm from Classic React</div>
      <p>Today quote is "{quote}"</p>
    </div>
  );
}
