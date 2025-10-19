interface SkeletonProps {
  type: "product" | "detailProduct";
  number?: number;
}

export default function Skeleton({ type, number = 9 }: SkeletonProps) {
  if (type === "product") {
    return (
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
        {Array.from({ length: number }).map((_, index) => (
          <div
            className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-2 animate-pulse w-full h-64"
            key={`loading-${index}`}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={"w-full h-full p-10 flex flex-row gap-10 items-center"}>
        <div
          className={"w-64 h-full bg-gray-200 rounded-md animate-pulse"}
        ></div>
        <div
          className={"w-full h-full bg-gray-200 rounded-md animate-pulse"}
        ></div>
      </div>
    );
  }
}
