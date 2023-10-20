import ReactDOM from "react-dom/client";

import { UserCard } from "./components/UserCard";

import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <p>Author: Ryan Huellen</p>
    <p>ISU Netid: rhuellen@iastate.edu</p>
    <p>Date: Oct. 20, 2023</p>
    <UserCard
      picture="https://freepngimg.com/thumb/vin_diesel/21487-3-vin-diesel.png"
      name="Vin Diesel"
      amount={3000}
      married={true}
      address={{ street: "123 Bellmont Rd.", city: "Ames", state: "Iowa" }}
    />
    <UserCard
      picture="https://freepngimg.com/thumb/emma_watson/21242-9-emma-watson-picture.png"
      name="Emma Watson"
      amount={3500}
      married={false}
      address={{ street: "5010 Av Some", city: "Tempe", state: "AZ" }}
    />
  </div>
);
