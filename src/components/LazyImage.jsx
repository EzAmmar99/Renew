const LazyImage = ({
  src,
  alt,
  className,
  priority = false,
  ...props
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={priority ? "high" : "auto"}
    {...props}
  />
);

export default LazyImage;
