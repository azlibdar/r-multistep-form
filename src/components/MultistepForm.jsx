/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import InputField from "./InputField";
import Button from "./Button";

const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
};

function MultistepForm() {
  const formRef = useRef();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const title = currentStep === 1 ? "Personal Details" : currentStep === 2 ? "Address" : "Confirm your details:";

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNextStep = () => {
    if (formRef.current.checkValidity()) {
      setCurrentStep((prev) => prev + 1);
    } else {
      formRef.current.reportValidity();
    }
  };

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    alert("Form Submitted! View console for details");
    console.table(formData);

    setCurrentStep(1);
    setFormData(initialFormData);
  };

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6 lg:gap-8">
      <h1 className="text-secondary-50 font-display text-xl lg:text-2xl font-medium tracking-tight">{title}</h1>
      <div className="w-full flex flex-col gap-2">
        <p className="font-display text-base text-secondary-50 font-normal">Step {currentStep} of 3</p>
        <progress className="progress-custom" max={3} min={1} value={currentStep}></progress>
      </div>
      <form className="w-full" ref={formRef} onSubmit={handleSubmission}>
        {currentStep === 1 && (
          <div className="w-full flex flex-col gap-6">
            <div className="form-control">
              <label className="form-control-label" htmlFor="name">
                Name
              </label>
              <InputField
                required
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleFormData}
              />
            </div>
            <div className="form-control">
              <label className="form-control-label" htmlFor="email">
                Email
              </label>
              <InputField
                required
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleFormData}
              />
            </div>
            <div className="form-actions">
              <Button onClick={handleNextStep} type="button" className="btn btn-secondary">
                Next
              </Button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full flex flex-col gap-6">
            <div className="form-control">
              <label className="form-control-label" htmlFor="address">
                Address
              </label>
              <InputField
                required
                id="address"
                name="address"
                type="text"
                placeholder="Enter your street address"
                value={formData.address}
                onChange={handleFormData}
              />
            </div>
            <div className="form-control">
              <label className="form-control-label" htmlFor="city">
                City
              </label>
              <InputField
                required
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleFormData}
              />
            </div>
            <div className="form-control">
              <label className="form-control-label" htmlFor="zipcode">
                Zipcode
              </label>
              <InputField
                required
                id="zipcode"
                name="zipcode"
                type="number"
                placeholder="e.g. 190014"
                value={formData.zipcode}
                onChange={handleFormData}
              />
            </div>
            <div className="form-actions">
              <Button onClick={handleNextStep} type="button" className="btn btn-secondary">
                Next
              </Button>
              <Button onClick={handlePrevStep} type="button" className="btn btn-link">
                Previous
              </Button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full flex flex-col gap-6">
            <Table data={formData} />
            <div className="form-actions">
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
              <Button onClick={handlePrevStep} type="button" className="btn btn-link">
                Edit your information
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function Table({ data }) {
  return (
    <table className="w-full mt-3">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr className="text-base" key={key}>
            <th className="py-3 px-6 border border-primary-700 text-left font-normal text-secondary-50 capitalize">
              {key}
            </th>
            <td className="py-3 px-6 border border-primary-700 text-left font-normal text-secondary-100">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MultistepForm;
