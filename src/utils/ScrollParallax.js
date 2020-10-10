export default function ScrollParallax(props) {
  const { parallax, destination } = props;
  parallax.current.scrollTo(destination);
  return null;
}
