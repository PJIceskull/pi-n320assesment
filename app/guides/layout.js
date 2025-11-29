import "../globals.css";

function SideBar() {}

function MainContent() {}

export default function GuidesLayout({ children }) {
  return (
    <main>
      <SideBar />
      <div>{children}</div>
    </main>
  );
}
