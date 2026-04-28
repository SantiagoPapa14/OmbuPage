"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useEffect, useState } from "react";

const placeholderData = [
  {
    name: "MERVAL",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  {
    name: "YPFD",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  {
    name: "PAMP",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  {
    name: "GGAL",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  { name: "BMA", price: 0, open: 0, change: "0%", trend: "down" },
  {
    name: "TECO2",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  {
    name: "EDN",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
  {
    name: "CEPU",
    price: 0,
    open: 0,
    change: "0%",
    trend: "neutral",
  },
];

export function MarketOverview() {
  const [marketData, setMarketData] = useState(placeholderData);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://wacho-production.up.railway.app/prices");
      const data = await res.json();
      console.log(data);
      setMarketData(data);
    }

    load();
  }, []);
  return (
    <section id="mercados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-semibold text-[#C9973F] tracking-[0.2em] uppercase">
            Ahora mismo
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F0F0F] mt-3">
            Resumen de Mercados
          </h2>
          <p className="font-sans text-[#555555] mt-5 max-w-2xl mx-auto leading-relaxed">
            Mantente actualizado con el mercado argentino en tiempo real.
          </p>
        </div>

        {/* Market Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#E5E2DB]">
          {Object.entries(marketData).map(([ticker, item]) => {
            const trend =
              item.price > item.open
                ? "up"
                : item.price < item.open
                  ? "down"
                  : "neutral";

            const change = (
              ((item.price - item.open) / item.open) *
              100
            ).toFixed(2);

            return (
              <div
                key={ticker}
                className="bg-[#FAF8F3] p-6 hover:bg-white transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs font-semibold text-[#555555] tracking-widest uppercase">
                    {item.name}
                  </span>

                  {trend === "up" && (
                    <TrendingUp className="text-[#14332A]" size={18} />
                  )}
                  {trend === "down" && (
                    <TrendingDown className="text-[#8B2635]" size={18} />
                  )}
                  {trend === "neutral" && (
                    <Minus className="text-[#555555]" size={18} />
                  )}
                </div>

                <div className="font-serif text-2xl font-semibold text-[#0F0F0F]">
                  {item.price}
                </div>

                <div
                  className={`font-sans text-sm font-semibold mt-2 ${
                    trend === "up"
                      ? "text-[#14332A]"
                      : trend === "down"
                        ? "text-[#8B2635]"
                        : "text-[#555555]"
                  }`}
                >
                  {change}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
