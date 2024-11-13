const ErrorMessage = (props) => {
  let { items } = props;

  // if (foodItems.length === 0) {
  //   return <h3>I am still Hungry</h3>;
  // }
  //let emptyMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null

  return (
    <>{/* {emptyMessage} */ items.length === 0 && <h5>I am still Hungry</h5>}</>
  );
};

export default ErrorMessage;
