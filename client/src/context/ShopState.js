import {React,useState} from 'react'
import ShopContext from "./shopcontext";

function ShopState(props) {

    const host = "http://localhost:3000";
    const emptyarray = [];
    const [items, setitems] = useState(emptyarray);
    const [cart, setcart] = useState(emptyarray);
    const [order, setorder] = useState(emptyarray);
    const [alldeliveryreq, setalldeliveryreq] = useState(emptyarray);
    const [available_deliveries, set_available_deliveries] = useState(emptyarray);
    const [approveddeliveries, set_approveddeliveries] = useState(emptyarray);
    const [username, setusername] = useState("");

    const getItems = async (req,res) => {
      
        // API Call
        const response = await fetch(`${host}/api/item/getitem`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        // console.log(json);
        setitems(json);
      };

    const getCart = async (req,res) => {
        // let success=false;
        // try{
        //   const response = await fetch(`${host}/api/cart/getcart`, {
        //     method: "GET",
        //     headers: {
        //           "Content-Type": "application/json",
        //           "auth-token":localStorage.getItem('token')
        //           }
        //   }).catch(async(err) => {
        //       console.log(err); //if there is any error we catch it
        //       res.json({
        //         success,
        //         error: "error occoured while fetching",
        //         message: err.message,
        //     })})
        //     // .then(()=>{
        //       const json = await response.json();
        //       await setcart(json);
        //       console.log(json);
        //     // }) //we send it
        // }
        // catch(error){
        //   console.error(error.message);
        // }
        // API Call
        // const response = await fetch(`${host}/api/cart/getcart`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "auth-token":localStorage.getItem('token')
        //     }
        // });
        // const json = await response.json();
        // console.log(json);
        // // setcart(json[0].items);


        try {
          const response = await fetch(`${host}/api/cart/getcart`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem('token')
              }
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const json = await response.json();
          // console.log(json);
          setcart(json[0].items);
      } catch (error) {
          console.error('Error:', error);
      }

      };

      const createemptycart= async ()=>{
        const response = await fetch(`${host}/api/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
              }
          });
      }
      
      const addtocart= async (newcart)=>{
        const response = await fetch(`${host}/api/cart/addtocart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify(newcart),
          });
      }

      const updatecart= async (newcart)=>{
        const response = await fetch(`${host}/api/cart/updatecart`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({items:newcart}),
          });
      }

      const buycart=async()=>{
        const response = await fetch(`${host}/api/cart/buycart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({items:cart}),
        });
      }

      const getmyorders=async()=>{
        const response = await fetch(`${host}/api/order/getorder`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
        });
        const json = await response.json();
        // console.log(json);
        setorder(json);
      }

      const get_available_delivery=async()=>{
        const response = await fetch(`${host}/api/delivery/getdelivery`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
        });
        const json = await response.json();
        // console.log(json);
        set_available_deliveries(json);
      }

      const deliveryreq=async(reqitem)=>{
        const response = await fetch(`${host}/api/delivery/deliveryreq`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify(reqitem),
        });
      }

      const getdeliveryreq=async()=>{
        const response = await fetch(`${host}/api/delivery/showdeliveryreq`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        setalldeliveryreq(json);
      }

      const approvedeliveryreq=async(item)=>{
        const response = await fetch(`${host}/api/delivery/approvedeliveryreq`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        });
      }

      const getmyapproveddelivery=async()=>{
        const response = await fetch(`${host}/api/delivery/myapprovedelivery`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            }
        });
        const json = await response.json();
        set_approveddeliveries(json);
      }

      const confirmdelivery=async(item)=>{
        const response = await fetch(`${host}/api/delivery/confirmdelivery`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify(item)
        });
      }
      const getuserinfo=async()=>{
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            }
        });
        const json=await response.json();
        console.log(json.name)
        setusername(json.name);
      }


  return (
    <ShopContext.Provider
        value={{ cart,items, getCart, getItems, setcart,
           createemptycart ,updatecart,buycart ,order,getmyorders,
           get_available_delivery,available_deliveries,deliveryreq,
           getdeliveryreq,alldeliveryreq,approvedeliveryreq,
           getmyapproveddelivery,approveddeliveries,confirmdelivery,
           getuserinfo,username}}
    >
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopState
