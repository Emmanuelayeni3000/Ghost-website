/**
 * Ghost's mark, shared with the desktop application's icon.
 *
 * Inline SVG so it takes `currentColor` and stays crisp at the 12–14px it is
 * usually rendered at. `plate` draws the rounded background the app icon uses;
 * without it the mark is a bare silhouette, which is what the header wants.
 */
export function Mark({
  size = 14,
  plate = false,
  className,
}: {
  size?: number;
  plate?: boolean;
  className?: string;
}) {
  // Features are knocked out in the plate colour when there is a plate, and in
  // the page background otherwise.
  const knockout = plate ? "#101017" : "var(--color-void)";

  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Ghost"
    >
      {plate && <rect width="1024" height="1024" rx="228" fill="#101017" />}
      <path
        fill={plate ? "#F2F4F8" : "currentColor"}
        d="M512 148C690 148 814 276 814 452c0 110-46 176-86 212-19 17-28 42-28 68v64c0 34-28 62-62 62H386c-34 0-62-28-62-62v-64c0-26-9-51-28-68-40-36-86-102-86-212 0-176 124-304 302-304Z"
      />
      <ellipse cx="399" cy="470" rx="99" ry="109" fill={knockout} transform="rotate(-9 399 470)" />
      <ellipse cx="625" cy="470" rx="99" ry="109" fill={knockout} transform="rotate(9 625 470)" />
      <path
        fill={knockout}
        d="M512 588c12 0 21 8 25 19l24 61c5 13-4 26-18 26h-62c-14 0-23-13-18-26l24-61c4-11 13-19 25-19Z"
      />
      {/* Jaw detail only survives above ~24px; the plated icon is the only
          place this component renders that large. */}
      {plate && (
        <>
          <rect x="372" y="726" width="280" height="20" rx="10" fill={knockout} />
          <rect x="456" y="746" width="18" height="112" rx="9" fill={knockout} />
          <rect x="550" y="746" width="18" height="112" rx="9" fill={knockout} />
        </>
      )}
    </svg>
  );
}
