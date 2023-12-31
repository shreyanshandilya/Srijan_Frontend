import React from "react";

function PurchaseList() {
  let [listItem, setListItem] = React.useState([]);
  let [isUpdate, setIsUpdate] = React.useState(1);
  let [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    async function getListIems() {
      let response;
      try {
        response = await fetch("https://srijan2024.onrender.com/api/allOrders");
        if (!response.ok) {
          throw new Error("error occured in fetching");
        }

        let responseData = await response.json();
        setListItem(responseData);
      } catch (error) {
      }
    }
    getListIems();
  }, [isUpdate]);

  async function changeApprovalStatus(orderId) {
    let response;
    try {
      response = await fetch(
        `https://srijan2024.onrender.com/api/changeApproved/${orderId}`,
        {
          method: "PUT",
        }
      );
      if (!response.ok) {
        throw new Error("error occured");
      }
      setIsUpdate((prevalue) => prevalue + 1);
      alert("order approved");
    } catch (error) {
      alert("error");
    }
  }


  function handleChange(e){
    setPhoneNumber(e.target.value);
  };

  async function  handleSubmit(e){
    e.preventDefault();
    let response;
    try {
      response = await fetch(
        `https://srijan2024.onrender.com/api/getOrder/${phoneNumber}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Error occured try again later");
      }
      let responseData = await response.json();
      setListItem(responseData);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-6 bg-white border rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-md font-medium text-gray-600"
            >
              Search By Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {listItem &&
          listItem.map((item) => (
            <div key={item._id} className="rounded-md border">
              <img
                src={item.imageURL}
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {item.name}
                </h1>

                <div className="mt-3 ">
                  <div className=" text-md py-1 font-semibold">
                    Admission number : {item.admissionNumber}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Hostel : {item.hostel}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Mobile Number : {item.mobileNumber}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Hostel : {item.hostel}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Room No :{item.roomNumber}{" "}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Tshirt size :{item.tshirtSize}{" "}
                  </div>
                  <div className=" text-md py-1 font-semibold">
                    Qunantity : {item.quantity}
                  </div>
                </div>

                <div className="mt-3 flex items-center space-x-2"></div>

                {item.approved ? (
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Approved
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => changeApprovalStatus(item._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Approve This
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default PurchaseList;
