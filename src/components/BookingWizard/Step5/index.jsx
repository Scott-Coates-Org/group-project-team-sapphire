import React, { useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../../redux/bookingsSlice";
import { BookingWizardContext } from "../context";
import { updateForm, setProgressBarStep } from "../context/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step5Schema } from "../context/schema";
import Waiver from "./Waiver";
import FormNavButtons from "../common/FormNavButtons";

const Step5 = () => {
  const navigate = useNavigate();
  const appDispatch = useDispatch();
  const [wizardState, wizardDispatch] = useContext(BookingWizardContext);
  const { fullName, email, address, signatureImageData, waiverAgreed } =
    wizardState.formData;
  const { bookingInProgress } = useSelector((appState) => appState.bookings);

  const bookingData = useMemo(
    () => ({
      customer: {
        fullName,
        email,
        address,
      },
    }),
    [fullName, email, address]
  );

  const initialValues = {
    waiverAgreed,
    signatureImageData,
  };
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(step5Schema),
  });

  const onSubmit = (formData) => {
    wizardDispatch(updateForm(formData));
    wizardDispatch(setProgressBarStep(6));
    navigate("/booking/checkout");
    appDispatch(
      updateBooking({ bookingId: bookingInProgress?.id, ...bookingData })
    );
  };

  const goBack = () => {
    navigate("/booking/step-4");
    wizardDispatch(setProgressBarStep(4));
  };

  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="container text-start">
        <h3 className="mb-3">Sign the Waiver</h3>
        <Waiver
          register={register}
          setValue={setValue}
          errors={errors}
          clearErrors={clearErrors}
        />
        <FormNavButtons goBack={goBack} submitButtonText={"Next"} />
      </form>
    </div>
  );
};

export default Step5;
