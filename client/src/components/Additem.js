import {React,useState} from 'react'

function Additem() {

    const [iteminfo, setiteminfo] = useState({
        name: "",
        desc: "",
        cost: 0,
        image: "",
      });

      const onChange = (e) => {
        setiteminfo({ ...iteminfo, [e.target.name]: e.target.value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault(); 

        const response = await fetch("http://localhost:3000/api/item/additem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({
                name: iteminfo.name,
                desc: iteminfo.desc,
                cost: iteminfo.cost,
                image: iteminfo.image,
          }),
        });
        const json = await response.json();
        if (json.success) {
            alert("the item has been added to inventory")
            window.location.reload();
         console.log("added succesfully")
        } else {
          alert("not added to inventory");
        }
      };

  return (
    <>
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={iteminfo.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
          <label className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={iteminfo.desc}
            onChange={onChange}
            id="desc"
            name="desc"
            aria-describedby="emailHelp"
          />
        </div>
          <label className="form-label">
            Cost
          </label>
          <input
            type="number"
            className="form-control"
            value={iteminfo.cost}
            onChange={onChange}
            id="cost"
            name="cost"
          />
        <div className="my-3">
        <label className="form-label">
            Image Link
          </label>
          <input
            type="text"
            className="form-control"
            value={iteminfo.image}
            onChange={onChange}
            id="image"
            name="image"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
    </>
  )
}

export default Additem
