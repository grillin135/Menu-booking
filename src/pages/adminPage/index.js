import React, { useEffect, useState, useRef } from "react";
import db from "../../firebase";
import "../../styles/admin.scss";
import { useReactToPrint } from "react-to-print";
import PrintProvider, { Print, NoPrint } from "react-easy-print";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "24rem",
    height: "33rem",
  },
};

export const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [orders2, setOrders2] = useState([]);
  const [orders3, setOrders3] = useState([]);
  const [orders4, setOrders4] = useState([]);
  const [orders5, setOrders5] = useState([]);
  const [orders6, setOrders6] = useState([]);
  const [orders7, setOrders7] = useState([]);
  const [orders8, setOrders8] = useState([]);
  const [orders9, setOrders9] = useState([]);
  // console.log(orders);
  const [newOrder, setNewOrder] = useState(0);
  const [newOrder2, setNewOrder2] = useState(0);
  const [newOrder3, setNewOrder3] = useState(0);
  const [newOrder4, setNewOrder4] = useState(0);
  const [newOrder5, setNewOrder5] = useState(0);
  const [newOrder6, setNewOrder6] = useState(0);
  const [newOrder7, setNewOrder7] = useState(0);
  const [newOrder8, setNewOrder8] = useState(0);
  const [newOrder9, setNewOrder9] = useState(0);

  const [show, setShow] = React.useState(false);

  const [newOnlineOrders, setNewOnlineOrders] = useState(0);

  const [onlineOrders, setOnlineOrders] = useState([]);

  const [storedata, setStoredData] = useState({});

  const componentRef = useRef({});

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const checkNewOrder = (orders) => {
    if (orders.length > 0) {
      let count = 0;
      for (let i = 0; orders.length > i; i++) {
        if (!orders[i][0].completed) {
          count++;
        }
      }
      return count;
    }
  };

  const handlePassInfoShow = (data) => {
    setShow(true);
    setIsOpen(true);
    setStoredData(data);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setNewOrder(checkNewOrder(orders));
    setNewOrder2(checkNewOrder(orders2));
    setNewOrder3(checkNewOrder(orders3));
    setNewOrder4(checkNewOrder(orders4));
    setNewOrder5(checkNewOrder(orders5));
    setNewOrder6(checkNewOrder(orders6));
    setNewOrder7(checkNewOrder(orders7));
    setNewOrder8(checkNewOrder(orders8));
    setNewOrder9(checkNewOrder(orders9));
    setNewOnlineOrders(checkNewOrder(onlineOrders));
  }, [
    orders,
    orders2,
    orders3,
    orders4,
    orders5,
    orders6,
    orders7,
    orders8,
    orders9,
    onlineOrders,
  ]);
  console.log(orders);
  useEffect(() => {
    db.collection("table1")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table2")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders2(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table3")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders3(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table4")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders4(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table5")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders5(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table6")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders6(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table7")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders7(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table8")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders8(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("table9")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders9(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);
  useEffect(() => {
    db.collection("home-delivery")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOnlineOrders(
          snapshot.docs.map((doc) => [
            {
              order: doc.data().order,
              id: doc.id,
              completed: doc.data().completed,
              username: doc.data().username,
              address: doc.data().address,
              contact: doc.data().contact,
              totalprice: doc.data().totalPrice,
            },
          ])
        );
      });
  }, []);

  const updateOrder = (id) => {
    db.collection("table1").doc(id).update({ completed: true });
  };
  const updateOrder2 = (id) => {
    db.collection("table2").doc(id).update({ completed: true });
  };
  const updateOrder3 = (id) => {
    db.collection("table3").doc(id).update({ completed: true });
  };
  const updateOrder4 = (id) => {
    db.collection("table4").doc(id).update({ completed: true });
  };
  const updateOrder5 = (id) => {
    db.collection("table5").doc(id).update({ completed: true });
  };
  const updateOrder6 = (id) => {
    db.collection("table6").doc(id).update({ completed: true });
  };
  const updateOrder7 = (id) => {
    db.collection("table7").doc(id).update({ completed: true });
  };
  const updateOrder8 = (id) => {
    db.collection("table8").doc(id).update({ completed: true });
  };
  const updateOrder9 = (id) => {
    db.collection("table9").doc(id).update({ completed: true });
  };
  const updateOnlineOrder = (id) => {
    db.collection("home-delivery").doc(id).update({ completed: true });
  };
  // const print = () => {
  //   window.print();
  // }


  return (
    <>
      <div className="admin">
        {show && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ref={componentRef}
            className="modal__price"
          >
            <div className="print__data" >
            <div  className="print__wrapper">
            <h1><span>User Name</span> :{storedata.username} </h1> 
            <h1> Date: <span> 30/07/2021</span> </h1>
            </div>

            <hr/>

              {storedata.order.map( orders => {
                console.log(orders);
                return (
                  <div>
                    <h1>{orders.totalprice}</h1>
               
                        <div>
                          <h1 className="items">
                            <span> {orders.name} </span>
                            <span> {orders.numberOfPlates} </span>
                            <span> {orders.numberOfPlates * orders.price}</span>
                          </h1>
                          <h1>
                
                          </h1>
                        </div>
                 
                  </div>
                );
              })}
              <hr/>
             <h1><span>Total Price</span> :{storedata.totalprice} </h1> 
              <button className="print__button" onClick={handlePrint}>Print this out!</button>
          </div>
          </Modal>
        )}

        <div className="admin__wrapper">
          <div>
            <h1 className="admin__table">
              Table 1{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder === 0 ? "span__green" : "span__red"}>
                {newOrder}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders.map((order) => {
              
                return (
                  <div
                    key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> -:{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                      className="print__button"
                      onClick={() => handlePassInfoShow(order[0])}
                    >
                      {" "}
                      <span>Click Here to Print</span>{" "}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 2{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder2 === 0 ? "span__green" : "span__red"}>
                {newOrder2}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders2.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder2(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 3{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder3 === 0 ? "span__green" : "span__red"}>
                {newOrder3}
              </span>{" "}
            </h1>

            <div className="admin__table1main">
              {orders3.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder3(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 4{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder4 === 0 ? "span__green" : "span__red"}>
                {newOrder4}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders4.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder4(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="admin__table">
              Table 5{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder5 === 0 ? "span__green" : "span__red"}>
                {newOrder5}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders5.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder5(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 6{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder6 === 0 ? "span__green" : "span__red"}>
                {newOrder6}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders6.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder6(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 7{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder7 === 0 ? "span__green" : "span__red"}>
                {newOrder7}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders7.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder7(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Table 8{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder8 === 0 ? "span__green" : "span__red"}>
                {newOrder8}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders8.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder8(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="admin__table">
              Table 9{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span className={newOrder9 === 0 ? "span__green" : "span__red"}>
                {newOrder9}
              </span>
            </h1>

            <div className="admin__table1main">
              {orders9.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOrder9(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="admin__table">
              Home Delivery{" "}
              <span className="span__orderIncompleted">
                {" "}
                Incompleted Orders
              </span>{" "}
              <span
                className={newOnlineOrders === 0 ? "span__green" : "span__red"}
              >
                {newOnlineOrders}
              </span>
            </h1>

            <div className="admin__table1main">
              {onlineOrders.map((order) => {
                return (
                  <div
                  key={order[0].id}
                    className={
                      order[0].completed ? "admin__green" : "admin__red"
                    }
                  >
                    <h1 className="h1">
                      {" "}
                      <span>User Name : </span> {order[0].username}
                      <span>Contact : </span> {order[0].contact}
                      <span>Address : </span> {order[0].address}
                    </h1>

                    {order[0].order.map((item) => {
                      return (
                        <div>
                          <h1 className="items">
                            <span>Product Name : {item.name} </span>
                            <span> :{item.numberOfPlates} </span>
                          </h1>
                          <h1>
                            {" "}
                            <span>Price :</span>{" "}
                            {item.numberOfPlates * item.price}
                          </h1>
                        </div>
                      );
                    })}
                    <h1>Total Price : {order[0].totalprice}</h1>
                    {!order[0].completed && (
                      <button
                        className="button__y"
                        onClick={() => updateOnlineOrder(order[0].id)}
                      >
                        <h1>Yes</h1>
                      </button>
                    )}
                    <button
                    className="print__button"
                    onClick={() => handlePassInfoShow(order[0])}
                  >
                    {" "}
                    <span>Click Here to Print</span>{" "}
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
