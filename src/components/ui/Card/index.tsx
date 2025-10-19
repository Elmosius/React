import * as React from "react";

interface CardProps {
  showCard?: any | null;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card(props: CardProps) {
  const { showCard = false, children, onClick } = props;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-black/50 ${showCard ? "flex items-center " : "hidden"}`}
    >
      <div className="relative w-1/2 mx-auto bg-white rounded-md p-4">
        {children}

        <button
          onClick={onClick}
          className="absolute top-4 right-5  rounded-full font-bold cursor-pointer"
        >
          x
        </button>
      </div>
    </div>
  );
}
