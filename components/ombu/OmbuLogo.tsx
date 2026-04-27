"use client";

interface OmbuLogoProps {
  className?: string;
  size?: number;
}

export function OmbuLogo({ className = "", size = 24 }: OmbuLogoProps) {
  return (
    <img
      src="/OmbuLogo.jpeg"
      alt="Ombu Logo"
      className={`h-${size} w-${size} ${className}`}
    />
  );
}
