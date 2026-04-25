import { Col, Typography } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";

const { Title, Text } = Typography;

const getCounterParts = (rawValue) => {
  const valueAsString = String(rawValue ?? "");
  const numberMatch = valueAsString.match(/[\d,]+/);

  if (!numberMatch) {
    return null;
  }

  const start = numberMatch.index ?? 0;
  const matchedNumber = numberMatch[0];
  const end = start + matchedNumber.length;
  const target = Number(matchedNumber.replace(/,/g, ""));

  if (!Number.isFinite(target)) {
    return null;
  }

  return {
    target,
    prefix: valueAsString.slice(0, start),
    suffix: valueAsString.slice(end),
  };
};

const formatWithCommas = (numberValue) => numberValue.toLocaleString("en-US");

const StatItem = ({ value, label, index = 0 }) => {
  const statRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  const counterParts = useMemo(() => getCounterParts(value), [value]);

  useEffect(() => {
    const node = statRef.current;

    if (!node || !counterParts || hasAnimated) {
      return undefined;
    }

    let frameId;
    let isMounted = true;

    const startCounter = () => {
      const duration = 1500 + index * 120;
      const startTime = performance.now();

      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.round(counterParts.target * easedProgress);

        if (isMounted) {
          setDisplayValue(
            `${counterParts.prefix}${formatWithCommas(currentValue)}${counterParts.suffix}`
          );
        }

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else if (isMounted) {
          setHasAnimated(true);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        startCounter();
        intersectionObserver.unobserve(node);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      isMounted = false;
      observer.disconnect();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [counterParts, hasAnimated, index]);

  return (
    <Col
      xs={24}
      sm={12}
      md={6}
      className="stat-item reveal-on-scroll reveal-up"
      style={{ "--stagger-index": index }}
      ref={statRef}
    >
      <Title level={2} className="stat-value">
        {counterParts ? displayValue : value}
      </Title>
      <Text className="stat-label">{label}</Text>
    </Col>
  );
};

export default StatItem;