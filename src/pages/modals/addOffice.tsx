import React from "react";
import { closeOfficeModal } from "../../redux/reducers/members";
import { useDispatch } from "react-redux";
import TextBox from "../../components/generic/input/textbox";
import UploadImage from "./../../components/generic/input/uploadImage";
import ToggleBtn from "./../../components/generic/input/toggleBtn";

import useForm from "./validations/useForm";
import validate from "./validations/validate";

export default function AddOffice(isOpenOffice) {
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
            onClick={() => dispatch(closeOfficeModal(isOpenOffice))}
          />
          <form className="addMember-form" onSubmit={handleSubmit}>
            <div className="grid">
              <TextBox label="Name" type="text" />
              {/* {errors.Name && <p>{errors.Name}</p>} */}
            </div>
            <div className="upload-btn-img grid">
              <TextBox label="Election Location" type="text" />
              {/* {errors.Degree && <p>{errors.Degree}</p>} */}
              <TextBox label="Address" type="text" />
              {/* {errors.Degree && <p>{errors.Degree}</p>} */}

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
