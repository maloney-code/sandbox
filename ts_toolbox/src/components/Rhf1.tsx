import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
export type FormProps = {
  example: string;
  exampleRequired: string;
  dateExample: string;
  gender: string;
  age:string;
  iceCreamType: {label: string; value: string };
};

export const Rhf1: React.FC<FormProps> = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    let previewEl = document.querySelector("#uxFormState");
    previewEl.innerHTML = JSON.stringify(data, " ", 2);
  };

  return (
    <div className="d-flex">
      <div className="card w-50 m-3">
        <div className="card-header ">Simple Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              {/* register your input into the hook by invoking the "register" function */}
              <label className="form-label">
                <strong>field 1</strong>
              </label>
              <input
                type="text"
                defaultValue=""
                className="form-control"
                {...register("example")}
              />
            </div>
            <div className="mb-3">          
              <label className="form-label">
                <strong>select example</strong>
              </label>
              <select className="form-control" {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>
           
            <div className="mb-3">          
              <label className="form-label">
                <strong>react select example</strong>
              </label>
              <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
            </div>
           


            <div className="mb-3">
              {/* register your input into the hook by invoking the "register" function */}
              <label className="form-label">
                <strong>Age</strong>
              </label>
              <input className="form-control" type="number" {...register("age", { min: 18, max: 99 })} />
            </div>

            <div className="mb-3">
              {/* register your input into the hook by invoking the "register" function */}
              <label className="form-label">
                <strong>A Date</strong>
              </label>
              <input
                type="date"
                defaultValue=""
                className="form-control"
                {...register("dateExample")}
              />
            </div>

            

            <div className="mb-3">
              <label className="form-label">
                <strong>Required Field</strong>
              </label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="text"
                className="form-control"
                {...register("exampleRequired", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <input type="submit" className="form-control btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-3 flex-fill m-3">
        <div className="card-header ">Form State</div>
        <div className="card-body">
          <textarea
            className="form-control w-100"
            id="uxFormState"
            style={{ minHeight: "50%" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
