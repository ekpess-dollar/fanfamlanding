/**
 * Inline icon set (stroke style mirrors the Vuesax outline icons used in the
 * Fanation app). Decorative by default (aria-hidden); pass `title` for meaning.
 */
export type IconProps = {
  className?: string;
  title?: string;
};

/** A renderable icon component from this set. */
export type IconLike = (props: IconProps) => React.ReactElement;

function svg(path: React.ReactNode) {
  return function Icon({ className = "size-6", title }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden={title ? undefined : true}
        role={title ? "img" : undefined}
        focusable="false"
      >
        {title ? <title>{title}</title> : null}
        {path}
      </svg>
    );
  };
}

export const HeartIcon = svg(
  <path d="M12 20s-7-4.35-9.5-8.5C.9 8.5 2.2 5 5.5 5 7.5 5 9 6.2 12 9c3-2.8 4.5-4 6.5-4 3.3 0 4.6 3.5 3 6.5C19 15.65 12 20 12 20Z" />,
);
export const LiveIcon = svg(
  <>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="M21.5 8.5 16 12l5.5 3.5v-7Z" />
  </>,
);
export const CoinIcon = svg(
  <>
    <circle cx="9" cy="9" r="6.5" />
    <path d="M14.5 5.6A6.5 6.5 0 1 1 12 18.4" />
  </>,
);
export const GiftIcon = svg(
  <>
    <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
    <path d="M3.5 13h17M12 9v11M12 9S9.5 4 7.5 5.2 9.5 9 12 9Zm0 0s2.5-5 4.5-3.8S14.5 9 12 9Z" />
  </>,
);
export const MessageIcon = svg(
  <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 16.5H9l-4.5 4V16.5A1.5 1.5 0 0 1 3 15V7a1.5 1.5 0 0 1 1-1.5Z" />,
);
export const UsersIcon = svg(
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 6.1M17 14.4a5.5 5.5 0 0 1 3.5 4.6" />
  </>,
);
export const StarIcon = svg(
  <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />,
);
export const VerifyIcon = svg(
  <>
    <path d="m9 12 2 2 4-4" />
    <path d="M12 2.5c1.2 1.1 2.6 1.6 4.2 1.6 .3 1.6 .9 3 2 4.2-1.1 1.2-1.7 2.6-1.7 4.2 0 1.6-1.4 2.1-2.7 2.1-1.2 1.1-2.6 1.6-3.8 1.6s-2.6-.5-3.8-1.6c-1.3 0-2.7-.5-2.7-2.1 0-1.6-.6-3-1.7-4.2 1.1-1.2 1.7-2.6 1.7-4.2 1.6 0 3-.5 4.2-1.6Z" />
  </>,
);
export const PlayIcon = svg(<path d="M8 5.5v13l11-6.5L8 5.5Z" />);
export const ArrowRightIcon = svg(<path d="M5 12h14M13 6l6 6-6 6" />);
export const LockIcon = svg(
  <>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </>,
);
export const CalendarIcon = svg(
  <>
    <rect x="4" y="5.5" width="16" height="15" rx="2" />
    <path d="M4 10h16M8 3.5v4M16 3.5v4" />
  </>,
);
export const ShieldIcon = svg(
  <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
);
