import BookItems from "./booksItems";


const Books =()=>{
  const getItem  = JSON.parse(localStorage.getItem('show'))  
  if (!getItem) {
    return <p> Books is Empty</p>
  }  
  

const BookItem = getItem.map(cart => (
  <BookItems
    key={cart.id}
    Name={cart.Name}
    Price={cart.Date}
    Image={cart.thumbnail}
    Ticket={cart.tickets}
    Total={cart.Total}
    delete={cart.delete}
    />))
    
    if (getItem.length === 0 || !getItem)  {
      return (
        <div>  
           { <p>Empty cart</p>} 
          
      </div>
      )

      }
  return (
      <div>  
     {getItem.length === 0 &&!getItem && <p>No Books items</p>}
        {!BookItem && <p>LoadCartItems</p>} 
        {BookItem}
   </div>

    )
};

export default Books;