import React from "react";
import Select from "react-select"

function Dropdown2() {
    var list = [
        {
            value: 1,
            label: "Yes"
        },
        {
            value: 2,
            label: "Probably not"
        }
    ];
    return (
        <div>
            <Select options={list} />
        </div>
    );
}

export default Dropdown2;