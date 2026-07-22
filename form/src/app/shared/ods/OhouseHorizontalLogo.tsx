export function OhouseHorizontalLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="28"
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="오늘의집"
      role="img"
    >
      <path
        d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zm0 16.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
        fill="#35C5F0"
      />
      <path
        d="M14 9.5c-2.485 0-4.5 2.015-4.5 4.5S11.515 18.5 14 18.5s4.5-2.015 4.5-4.5S16.485 9.5 14 9.5z"
        fill="#35C5F0"
      />
      <text
        x="32"
        y="20"
        fill="#2F3438"
        fontFamily="Pretendard, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-0.3"
      >
        오늘의집
      </text>
    </svg>
  );
}
