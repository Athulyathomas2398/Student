import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditStudentDetails() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const { sid } = useParams(); // sid from the URL

  // Fetch existing details when the component loads
  useEffect(() => {
    viewDetails();
  }, []);

  const viewDetails = async () => {
    try {
      if (sid) {
        const response = await axios.get(`http://localhost:3000/allDatas/${sid}`);
        const studentData = response.data;

        // Populate state with the fetched data
        setId(studentData.id);
        setName(studentData.username);
        setPlace(studentData.place);
        setPhone(studentData.phone);
      }
    } catch (err) {
      console.error("Error fetching student details:", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (id && name && place && phone) {
      const updatedDetails = {
        id,
        username: name,
        place,
        phone,
      };

      try {
        await axios.put(`http://localhost:3000/allDatas/${sid}`, updatedDetails);
        alert("Student details updated successfully!");
        navigate("/Add");
      } catch (err) {
        console.error("Error updating student details:", err);
        alert("Failed to update student details.");
      }
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className="addform border border-1 border-light shadow"
          style={{ width: "700px", height: "520px" }}
        >
          <h3 className="text-center text-dark mt-5 pt-3">Edit Student Details</h3>
          <div className="container w-50 text-dark mt-5 pt-2">
            <Form>
              <Form.Group className="mb-4 " controlId="userid">
                <Form.Control className="text-dark"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  type="text"
                  placeholder="Student Id"
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="username">
                <Form.Control className="text-dark"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  placeholder="Student Name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="place">
                <Form.Control className="text-dark"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                  type="text"
                  placeholder="Enter Place"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="phone">
                <Form.Control className="text-dark"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="d-flex justify-content-center align-items-between mt-5">
            <button onClick={handleUpdate} className="btn btn-success me-3">
              Save Changes
            </button>
            <Link to={"/Add"} className="btn btn-danger">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStudentDetails;
