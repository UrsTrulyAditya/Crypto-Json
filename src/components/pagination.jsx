import React from "react";
const Paginate=()=> {
    let pageNumbers=[1,2,3,4,5,6,7,8,9,10]
  return (
     <>  
            {pageNumbers.map(each=>{
                <button className="bg-primary btn  text-dark">{each}</button>
            })}
         
     </>
  );
}

export default Paginate;