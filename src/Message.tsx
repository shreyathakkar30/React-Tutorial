//PascalCasing
function Message() {
  //JSX: JavaScript XML
  const name = "John Doe";
  if (name) return <h1>Hello, {name}!</h1>;
  return <h1>Hello, Stranger!</h1>;
}

export default Message;
