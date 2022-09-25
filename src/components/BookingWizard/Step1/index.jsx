import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingWizardContext } from "../context";
import { step1Schema } from "../context/schema";
import { updateForm, setProgressBarStep } from "../context/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CalendarDatePicker from "./CalendarDatePicker";
import FormNavButtons from "../common/FormNavButtons";

const Step1 = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(BookingWizardContext);

  const initialValues = {
    ...state.formData,
  };
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    initialValues,
    resolver: yupResolver(step1Schema),
  });

  const onSubmit = (formData) => {
    dispatch(updateForm(formData));
    dispatch(setProgressBarStep(2));
    navigate("/booking/step-2");
  };

  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="container text-start">
        {/* DATE */}
        <div className="row mb-3">
          <div className="col-12 p-0">
            <label htmlFor="date" className="form-label p-0 d-flex gap-1">
              <h3>Select Date</h3> <span className="text-danger">*</span>
            </label>
            <CalendarDatePicker setFormValue={setValue} />
            {errors.date && (
              <p className="text-danger">{errors.date.message}</p>
            )}
          </div>
        </div>

        <FormNavButtons backHref={"/"} submitButtonText={"Next"} />
      </form>
    </div>
  );
};

export default Step1;