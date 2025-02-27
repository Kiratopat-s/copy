"use client";
import Image from "next/image";

export default function Home() {
  async function copyToClipboard() {
    alert("btn cliked");
    const loginLink = `https://hinghoihome.com/hello/212224236`;
    const bookingInfo = `${loginLink}`;
    console.log(bookingInfo.trim());
    await navigator.clipboard.writeText(bookingInfo.trim()).then(
      function () {
        alert("Link copied successfully!");
      },
      function (err) {
        console.error("Unable to copy the data.", err);
      }
    );
  }
  return (
    <main className="w-screen h-screen flex-col justify-center">
      <div className="flex justify-center">
        <button
          onClick={() => {
            copyToClipboard();
            return false;
          }}
          className="bg-primary-500 px-4 py-2 text-4xl"
        >
          Copy Link ! V.3
        </button>
      </div>
    </main>
  );
}
