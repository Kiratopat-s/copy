"use client";
import Image from "next/image";

export default function Home() {
  function copyToClipboard() {
    alert("btn cliked");
    const loginLink = document
      .querySelector(".home-btn")
      ?.getAttribute("data-login-link");
    const bookingInfo = `${loginLink}`;
    navigator.clipboard.writeText(bookingInfo.trim()).then(
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
          onClick={copyToClipboard}
          className="bg-primary-500 px-4 py-2 text-4xl"
        >
          Copy Link !
        </button>
      </div>
    </main>
  );
}
