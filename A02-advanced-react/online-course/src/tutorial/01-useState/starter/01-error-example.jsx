const ErrorExample = () => {
  let count = 6;

  const handleClick = () => {
    count++;

    console.log("count: ", count);
  };

  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={handleClick}>increase</button>
    </>
  );
};

export default ErrorExample;
