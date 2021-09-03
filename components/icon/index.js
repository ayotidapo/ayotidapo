const Icon = (props) => (
  <svg width={props.width || 25} height={props.height || 25} {...props}>
    <use xlinkHref={`/icons.svg#${props.id}`} />
  </svg>
);
export default Icon;
