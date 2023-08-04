import { useState, useEffect } from "react";

export const ShowStudent = () => {
    let [student, setStudent] = useState([]);

    useEffect(() => {
        const readData = () => {
            fetch(`${process.env.REACT_APP_API_URL}/api/student`, {
                method: 'GET',
                credentials: 'include'
            }).then((response) => response.json())
                .then((data) => setStudent(data));
        }

        readData();
    }, [])
    return (
        <div>
            {
                student.map((s) => (
                    <li key={s._id}>{s.name}</li>
                ))
            }
        </div>
    )
}
