import axios from "axios";
import { useState } from "react";

function App() {
  return (
    <div>
      <CreatePurchaseOrderV4 />
    </div>
  );
}

function CreatePurchaseOrderV4() {
  const [productName, setProductName] = useState();
  let handleChangeProductName = (e) => {
    setProductName(e.target.value);
  };

  const [productId, setProductId] = useState();
  let handleChangeProductId = (e) => {
    setProductId(e.target.value);
  };

  const [quantity, setQuantity] = useState();
  let handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const [unit, setUnit] = useState();
  let handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  const [unitPrice, setUnitPrice] = useState();
  let handleChangeUnitPrice = (e) => {
    setUnitPrice(e.target.value);
  };

  let makePurchaseApiCall = async () => {
    let url = "http://localhost:8080/purchase/create-v3";
    let data = {
      uid: crypto.randomUUID(),
      productName: productName,
      productId: productId,
      quantity: quantity,
      unit: unit,
      unitPrice: unitPrice,
    };

    console.log(data);
    await axios.post(url, { ...data });

    // clear the form
    setProductName("");
    setProductId("");
    setQuantity("");
    setUnit("");
    setUnitPrice("");
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-4">Purchase Order</h1>

      <input
        className="form-control"
        type="text"
        name=""
        placeholder="Enter product name"
        value={productName}
        onChange={handleChangeProductName}
      />
      <input
        className="form-control my-1"
        type="text"
        name=""
        placeholder="Enter product Id"
        value={productId}
        onChange={handleChangeProductId}
      />
      <input
        className="form-control my-1"
        type="text"
        name=""
        placeholder="Enter QTY"
        value={quantity}
        onChange={handleQuantity}
      />
      <input
        className="form-control my-1"
        type="text"
        name=""
        placeholder="Enter UNIT"
        value={unit}
        onChange={handleChangeUnit}
      />
      <input
        className="form-control my-1"
        type="text"
        name=""
        placeholder="Enter UNIT PRICE"
        value={unitPrice}
        onChange={handleChangeUnitPrice}
      />

      <input className="btn btn-primary w-100" type="button" value="Create Purchase" onClick={makePurchaseApiCall} />
    </div>
  );
}

function CreatePurchaseOrderV3() {
  let makePuchaseApiCall = async () => {
    let url = "http://localhost:8080/purchase/create-v3";
    let data = {
      uid: crypto.randomUUID(),
      productName: "ABCDA..",
      productId: "ABCD",
      quantity: 1,
      unit: "PACKET",
      unitPrice: 100.0,
    };
    await axios.post(url, data);
  };

  return (
    <div>
      <h1>Purchase Order V1</h1>
      <input type="button" value="Create purchase Order V3" onClick={makePuchaseApiCall} />
    </div>
  );
}

function CreatePurchaseOrderV2() {
  let makePuchaseApiCall = async () => {
    let url = "http://localhost:8080/purchase/create-v2";
    await axios.post(url);
  };

  return (
    <div>
      <h1>Purchase Order V1</h1>
      <input type="button" value="Create purchase Order" onClick={makePuchaseApiCall} />
    </div>
  );
}

export default App;
