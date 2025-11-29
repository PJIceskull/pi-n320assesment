import "../globals.css";

function Banner() {}

function Content() {}

export default function DestinationsLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
