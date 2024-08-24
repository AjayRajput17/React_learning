let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the curent {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
