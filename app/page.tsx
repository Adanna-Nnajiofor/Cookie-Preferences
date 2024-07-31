import Link from "next/link";
import CookiePreferences from "./cookie/page";

export default function Home() {
  return (
    <main className="w-full">
      <div>
        <CookiePreferences />
      </div>
    </main>
  );
}
