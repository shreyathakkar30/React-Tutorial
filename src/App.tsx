import Message from "./Message";
import ListGroup from "./components/listgroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Seattle",
    "Chicago",
    "London",
    "Paris",
  ];
  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
