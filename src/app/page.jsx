import Description from "./description";
import Requestform from "./requestform";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-contain main">
      <h1 className="flex flex-col items-center heading">Contact Us</h1>
      <p className="flex flex-col items-center paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="flex flex-row items-center md:container md:mx-auto container">
        <div className="flex flex-col container-child">
          <Description />
        </div>
        <div className="flex flex-col container-child">
          <Requestform />
        </div>
      </div>
    </main>
  );
}
