function DateTime(){
  let time= new Date();
  return  <div className="container fw-bolder">
        This is current timeis  {time.toLocaleTimeString()} and date is {time.toLocaleDateString()}.
      </div>
 
}
export default DateTime;