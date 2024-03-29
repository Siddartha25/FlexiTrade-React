import React from 'react'

function Upload() {

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); 
    //     const response = await fetch("http://localhost:3000/api/upload/", {
    //       method: "POST",
    //       headers: {
    //         "encType":"multipart/form-data"
    //       },
    //       file: JSON.stringify({
    //         file:document.getElementsByName("ItemImage")
    //       }),
    //     });
        
    //   };

  return (
    <>
        <form action="http://localhost:3000/api/upload/" method="POST" encType="multipart/form-data">
            <input type="file" name="ItemImage" />
            <button type='submit' > Upload Item</button>
        </form>
    </>
  )
}

export default Upload
