import React from 'react'
import office1 from "../assets/images/office1.jpeg";
import office2 from "../assets/images/office2.jpg";
import office3 from "../assets/images/office3.jpg";
import office4 from "../assets/images/office4.jpeg";
import office5 from "../assets/images/office5.jpg";

const officesList = [
    {
        element: "Office Space",
        jsxatt: <img src={office1} width={"25%"} height={"25%"} alt="Office Space 1" />,
        itemName: {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        }
    },
    {
        element: "Office Space",
        jsxatt: <img src={office2} width={"25%"} height={"25%"} alt="Office Space 2" />,
        itemName: {
            Name: "Regus",
            Rent: 60000,
            Address: "Bangalore"
        }
    },
    {
        element: "Office Space",
        jsxatt: <img src={office3} width={"25%"} height={"25%"} alt="Office Space 3" />,
        itemName: {
            Name: "WeWork",
            Rent: 70000,
            Address: "Hyderabad"
        }
    },
    {
        element: "Office Space",
        jsxatt: <img src={office4} width={"25%"} height={"25%"} alt="Office Space 4" />,
        itemName: {
            Name: "Smartworks",
            Rent: 55000,
            Address: "Pune"
        }
    },
    {
        element: "Office Space",
        jsxatt: <img src={office5} width={"25%"} height={"25%"} alt="Office Space 5" />,
        itemName: {
            Name: "Awfis",
            Rent: 65000,
            Address: "Mumbai"
        }
    }
];

const Offices = () => {
return (
    <div>
        {officesList.map((office, idx) => (
            <div key={idx}>
                <h2>{office.element}, at Affordable range</h2>
                {office.jsxatt}
                <h1>Name: {office.itemName.Name}</h1>
                <h3 style={{ color: office.itemName.Rent <= 60000 ? "red" : "green" }}>Rent: {office.itemName.Rent}</h3>
                <h3>Address: {office.itemName.Address}</h3>
                <hr />
            </div>
        ))}
    </div>
)
}

export default Offices
