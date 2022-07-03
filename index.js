import SampleData from "../data/sample-data.js"; 

class Index {

    // bound to the DOM to show the selected value
    selectedValue = "";

    // bound to the WireBootstrap select component in the DOM
    configSelect = {
        data: SampleData,
        datamap: {value: "Product", label: "Product"}
    }    

    // change event triggered from the component
    onChange = () => {

        // updates the UI
        this.selectedValue = this.configSelect.$component.val();

    }

}

tinybind.bind(document, new Index());


