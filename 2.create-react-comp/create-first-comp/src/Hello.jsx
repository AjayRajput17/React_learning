function Hello() {
  let myName = "Ajay";
  let number = 456;
  let fullName = () => {
    return "Ajay Ingle";
  };

  return (
    <h3>
      MessageNo:{number} I am your master {fullName()}
    </h3>
  );
}

export default Hello;
