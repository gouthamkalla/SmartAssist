import Select from "react-select";
import Card from "../UI/Card";
import {
  PROFESSIONS,
  GENDERS,
  STATES,
  TELENGANA,
  KARNATAKA,
  TAMILNADU,
  MAHARASTRA,
  ANDHRAPRADESH,
} from "../Data/Data";
import { useState } from "react";

const professionOptions = PROFESSIONS.map((profession) => {
  const obj = { label: profession, value: profession };
  return obj;
});
const genderOptions = GENDERS.map((gender) => {
  const obj = { label: gender, value: gender };
  return obj;
});
const StateOptions = STATES.map((state) => {
  const obj = { value: state, label: state };
  return obj;
});
var districtOptions = [];

const NewProfessional = () => {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const ChangeHandler = (event) => {
    switch (event.value) {
      case "TELENGANA":
        districtOptions = TELENGANA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "KARNATAKA":
        districtOptions = KARNATAKA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "TAMILNADU":
        districtOptions = TAMILNADU.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "MAHARASTRA":
        districtOptions = MAHARASTRA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "ANDHRAPRADESH":
        districtOptions = ANDHRAPRADESH.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      default:
        districtOptions = [];
    }
    setSelectedState(event.value);
  };
  const newProfessionalSubmitHandler=(event)=>{
    event.preventDefault();
  }

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50vw" }}>
          <h1>Join our Network</h1>
        </div>
        <div>
          <form>
            <table>
              <tr>
                <td>
                  <label>First Name:</label>
                </td>
                <td>
                  <input type="text" required></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>LastName:</label>
                </td>
                <td>
                  <input type="text" required></input>
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <Select
                    options={genderOptions}
                    defaultValue={selectedGender}
                    onChange={setSelectedGender}
                  ></Select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Type of Profession:</label>
                </td>
                <td>
                  <Select
                    options={professionOptions}
                    defaultValue={selectedProfession}
                    onChange={setSelectedProfession}
                  ></Select>
                </td>
              </tr>
              <tr>
                <td>Location Preference:</td>
                <td>(select state and country)*</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <Select
                      defaultValue={selectedState}
                      onChange={ChangeHandler}
                      options={StateOptions}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <Select
                      defaultValue={selectedDistrict}
                      onChange={setSelectedDistrict}
                      options={districtOptions}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Current Address:</td>
                <td>
                    <textarea  required></textarea>
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td><input type="tel" required></input></td>
              </tr>
              <tr>
                <td>Email Address:</td>
                <td><input type="email" required></input></td>
              </tr>
              <tr>
                <td>
                    <button type="submit" className="btn btn-primary" onSubmit={newProfessionalSubmitHandler}>Submit Registration Form</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </Card>
  );
};
export default NewProfessional;
