import React, {useState, useEffect} from 'react'

// Literal type , Union type data 
type statusProps = {
    message: 'loading' | 'success' | 'error'
}

const Status = (props: statusProps) => { 
    let message;
    const [show, setShow] = useState<boolean>(true)
    
  if(props.message === 'loading') {
    message = 'Loading...'
  }else if(props.message === 'success'){
    message = 'Data Fetched Successfully'
  }else{
    message = 'Error While Fetching data'
  }  
 
  useEffect(() => {
    const timeId = setTimeout(() => { 
      setShow(false)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, []); 
   
    return (
        <>
        {
        show ? 
        <div className="container">
            <div className={`alert ${props.message === 'success' ? 'alert-success' : 'alert-warning' } alert-dismissible fade show`} role="alert">
                <strong>{message}</strong> 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> 
        </div> : ""
        }
        </>
    )
}

export default Status;