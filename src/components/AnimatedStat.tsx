import { useRef } from "react";
import { parseStatValue, useCountUp } from "@/hooks/useCountUp";

interface AnimatedStatProps {
  value: string;
  label: string;
  className?: string;
}

const AnimatedStat = ({ value, label, className = "" }: AnimatedStatProps) => {
  const parsed = parseStatValue(value);

  if (parsed.raw) {
    return (
      <div className={className}>
        <div className="font-display text-3xl font-bold gradient-text">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    );
  }

  return <AnimatedStatInner num={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} label={label} className={className} />;
};

const AnimatedStatInner = ({ num, prefix, suffix, label, className }: { num: number; prefix: string; suffix: string; label: string; className: string }) => {
  const { ref, displayValue } = useCountUp({
    end: num,
    suffix,
    prefix,
    duration: 2000,
    decimals: 0,
  });

  return (
    <div className={className} ref={ref}>
      <div className="font-display text-3xl font-bold gradient-text">{displayValue}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default AnimatedStat;
