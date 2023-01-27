import clsx from "clsx";

export function Message({ user, children, author, time }) {
  return (
    <div
      className={clsx("self-start flex flex-col text-[#E1E1E6] max-w-[70%]", {
        "self-end": user,
      })}
    >
      <div className={clsx("text-xs mb-2", { "self-end": user })}>
        {author} - {time}
      </div>
      <div
        className={clsx("p-3 bg-[#633BBC]  rounded-lg", {
          "bg-[#07847E] rounded-tr-none": user,
          "rounded-tl-none": !user,
        })}
      >
        {children}
      </div>
    </div>
  );
}
