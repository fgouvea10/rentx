type AvatarProps = {
  alt: string;
  size?: "sm" | "md" | "xl";
};

export function Avatar({ alt = "UU", size = "md" }: AvatarProps) {
  function getUserInitials(username: string) {
    const fullName = username.split(" ");
    const initials =
      fullName[0].charAt(0) + fullName[fullName.length - 1].charAt(0);
    return initials.toUpperCase();
  }

  return (
    <div
      className={`flex items-center rounded-full justify-center relative ${
        size === "md" ? "w-14" : size === "sm" ? "w-6" : "w-24"
      } ${
        size === "md" ? "h-14" : size === "sm" ? "h-6" : "h-24"
      } bg-gray-200 select-none`}
    >
      <span
        className={`text-slate-700 ${
          size === "md" ? "text-xl" : size === "sm" ? "text-base" : "text-4xl"
        }`}
      >
        {getUserInitials(alt)}
      </span>
    </div>
  );
}
