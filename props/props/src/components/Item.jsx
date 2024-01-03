const Item =(props)=>{
  let {foodItem}=props;
  return (
<li  class="list-group-item">
            <span className="my-itmes">
              {props.foodItem}
              </span>
          </li>
  );
};
export default Item;