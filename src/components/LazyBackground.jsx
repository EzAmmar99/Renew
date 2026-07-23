import { useEffect, useRef, useState } from "react";

const LazyBackground = ({
  src,
  className,
  style = {},
  priority = false,
  overlay,
  children,
}) => {
  const ref = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(() => {
    if (!priority) {
      return undefined;
    }

    return overlay ? `${overlay}, url(${src})` : `url(${src})`;
  });

  useEffect(() => {
    if (priority || backgroundImage) {
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setBackgroundImage(
          overlay ? `${overlay}, url(${src})` : `url(${src})`,
        );
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [backgroundImage, overlay, priority, src]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(backgroundImage ? { backgroundImage } : undefined),
      }}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
