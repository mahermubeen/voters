import React from "react";
import { closeModal } from "../../redux/reducers/members";
import { useDispatch } from "react-redux";
import TextBox from "../../components/generic/input/textbox";
import UploadImage from "./../../components/generic/input/uploadImage";
import ToggleBtn from "./../../components/generic/input/toggleBtn";

import useForm from "./validations/useForm";
import validate from "./validations/validate";

export default function AddMember(isOpen) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data");
  };

  // const {handleChange, values, handleSubmit, errors} = useForm(validate);

  return (
    <>
      <div className="member-modal">
        <div className="popup">
          <img
            alt="cross"
            className="cross-img"
            src="img/cross.png"
            onClick={() => dispatch(closeModal(isOpen))}
          />
          <form className="addMember-form" onSubmit={handleSubmit}>
            <div className="grid">
              <TextBox label="Username" type="text" />
              {/* {errors.username && <p>{errors.username}</p>} */}
              <TextBox label="Email" type="email" />
              {/* {errors.email && <p>{errors.email}</p>} */}
              <TextBox label="Election Center Name" type="text" />
              {/* {errors.electionName && <p>{errors.electionName}</p>} */}
              <TextBox label="Election Center Location" type="text" />
              {/* {errors.electionLocation && <p>{errors.electionLocation}</p>} */}
              <ToggleBtn label="Employment" />

              <UploadImage label="Upload Image" />
            </div>
            <div className="upload-btn-img grid">
              <TextBox label="Degree" type="text" />
              {/* {errors.Degree && <p>{errors.Degree}</p>} */}
              <TextBox label="Gender" type="text" />
              {/* {errors.Gender && <p>{errors.Gender}</p>} */}
              <TextBox label="Phone" type="text" />
              {/* {errors.Phone && <p>{errors.Phone}</p>} */}
              <TextBox label="Password" type="password" />
              {/* {errors.Password && <p>{errors.Password}</p>} */}
              <TextBox label="Date of Birth" name="dob" type="date" />
              {/* {errors.dob && <p>{errors.dob}</p>} */}

              <buton
                className="btn d-btn fw500 fs24 lh36 bg-red mt-4"
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </buton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
