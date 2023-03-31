function Toggler(props) {
  const { isNavOpen, handleIsNavOpen } = props;
  return (
    <div
      className={`${isNavOpen ? "toggler open" : "toggler"}`}
      onClick={handleIsNavOpen}
    >
      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
    </div>
  );
}

export default Toggler;
