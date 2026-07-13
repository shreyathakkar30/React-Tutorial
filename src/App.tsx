//import Message from "./Message";
//import ListGroup from "./components/listgroup";

import Alert from "./components/Alert";

function App() {
  // let items = [
  //   "New York",
  //   "San Francisco",
  //   "Los Angeles",
  //   "Seattle",
  //   "Chicago",
  //   "London",
  //   "Paris",
  // ];

  //const handleSelectitem = (item: string) => console.log(item);
  return (
    <div>
      {/* <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectitem}
      /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
