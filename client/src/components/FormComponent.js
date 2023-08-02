import React from "react";

const FormComponent = () => {
    // const [formState, setFormState] = useState(null);

    const sendFormData = (data) => {
        data.preventDefault();
        const formData = new FormData(data.target),
            formDataObj = Object.fromEntries(formData.entries())

        fetch(`${process.env.REACT_APP_API_URL}/api/student`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj),
            credentials: 'include'
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                // setFormState(data);
            });
    }
    return (
        <>
            <form onSubmit={sendFormData}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" id="name" />
                <label htmlFor="age">Age</label>
                <input name="age" type="number" id="age" />
                <label htmlFor="dob">DOB</label>
                <input name="dob" type="date" id="dob" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComponent;