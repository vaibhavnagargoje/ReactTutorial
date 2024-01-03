function DateTime(){
  let time= new Date();
  return  <div className="container fw-bolder lead">
        This is current timeis  {time.toLocaleTimeString()} and date is {time.toLocaleDateString()}.
      </div>
 
}
export default DateTime;