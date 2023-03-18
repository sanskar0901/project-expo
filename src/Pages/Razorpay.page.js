import React from "react";
// import logo from "../../Assets/Events/aaruush.png";
import logo from "../Assets/logo.svg";
import axios from "axios";
import { API_URI } from "../Constants/apiUrl";
function loadScript(src) {
  return new Promise((resolve) => {
    var script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Payment({ }) {
  //   const user = useSelector((state) => state.user.user);
  const [money, setMoney] = React.useState(0);
  const [fEmail, setFEmail] = React.useState("");
  async function handlePaymentAndRegister(response) {
    // const order_check = (
    //   await axios.post(API_URI + "/payment/verify", response)
    // ).data;
    // if (order_check.statusCode === 200) {
    alert("Payment Successful");
    // eslint-disable-next-line no-unused-vars
    //   const registerevent = (
    //     await API.post(`/events/${event.category}/${event.id}/register`, {
    //       ...userData,
    //       event,
    //       transaction_details: response,
    //     })
    //   ).data;
    // eslint-disable-next-line no-unused-vars
    //   const res = (
    //     await API.put(`/users`, {
    //       ...userData,
    //       events: [
    //         ...userData.events,
    //         { category: event.category, id: event.id },
    //       ],
    //     })
    //   ).data;
    //   setChange(true);
    //   window.location.reload();
    // }
  }

  async function displayRazorpay(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const order = (
      await axios.post(`${API_URI}/payment/createOrder`, {
        userId: fEmail,
        // event_id: event.id,
        // event_category: event.category,
        amount: money * 100,
      })
    ).data;
    // // console.log(order);

    const options = {
      key: "rzp_test_A7lnio38cidbZm",
      currency: order.currency,
      order_id: order.order_id,
      name: "CropGenie",
      description: "Test Transaction",
      amount: order.amount.toString(),
      image: logo,
      handler: handlePaymentAndRegister,
      prefill: {
        // name: user?.name,
        // contact: user?.phone,
        // email: user?.email,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <input
        type="number"
        placeholder="Enter the receipient email"
        value={fEmail ? fEmail : ""}
        onChange={(e) => {
          setFEmail(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter the amount"
        value={money ? money : ""}
        onChange={(e) => {
          setMoney(e.target.value);
        }}
      />
      <button
        className="px-5 py-2 bg-[#EF6522] text-white rounded mx-auto my-auto"
        onClick={displayRazorpay}
      >
        Complete Payment and Register
      </button>
    </>
  );
}
