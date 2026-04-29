"use client";

interface OmbuLogoProps {
  className?: string;
  size?: number;
  logo?: string;
}

export function OmbuLogo({
  className = "",
  size = 24,
  logo = "/Full_Transparent.png",
}: OmbuLogoProps) {
  return (
    <img
      src={logo}
      alt="Ombu Logo"
      className={`h-${size} w-${size} ${className}`}
    />
  );
}
