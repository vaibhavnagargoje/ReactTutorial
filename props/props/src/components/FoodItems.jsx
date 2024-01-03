
import Item from "./Item";

const FoodItems = ({foods}) => {
  

  return (
    <>
      <ul className="list-group">
        {foods.map((item) => (
          <Item key={item}foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
