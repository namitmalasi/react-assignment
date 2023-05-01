import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Personal Details:</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          {...register("name")}
        />

        <label htmlFor="dob">Date of Birth or Age</label>
        <input
          type="date"
          id="dob"
          placeholder="DD/MM/YYYY or Age in Years"
          {...register("dob")}
        />

        <label htmlFor="sex">Sex</label>
        <select id="sex" name="sex" {...register("sex")}>
          <option>Enter Sex</option>
          <option name="male" value="male">
            Male
          </option>
          <option name="female" value="female">
            Female
          </option>
        </select>

        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter Mobile"
          {...register("mobile")}
        />

        <label htmlFor="ID">Govt Issued ID</label>
        <select id="ID" name="ID" {...register("ID")}>
          <option>Enter Govt ID</option>
          <option name="aadhar" value="aadhar">
            Aadhar
          </option>
          <option name="pan" value="pan">
            PAN
          </option>
        </select>

        <h3>Contact Details:</h3>
        <label htmlFor="guardian">Guardian Details</label>
        <select id="guardian" name="guradian" {...register("guardian")}>
          <option>Enter Label</option>
          <option name="mr" value="mr">
            Mr
          </option>
          <option name="mrs" value="mrs">
            Mrs
          </option>
        </select>
        <input
          type="text"
          id="guardian"
          placeholder="Enter Guardian Name"
          {...register("guardian")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          {...register("email")}
        />

        <label htmlFor="telno">Emergency Contact Number</label>
        <input
          type="tel"
          id="telno"
          name="telno"
          maxLength={10}
          {...register("telno")}
        />

        <h3>Address Details:</h3>

        <label htmlFor="address">Address</label>
        <input type="text" id="address" {...register("address")} />

        <label htmlFor="state">State</label>
        <select id="state" {...register("state")}>
          <option>Enter state</option>
          <option name="up" value="up">
            UP
          </option>
          <option name="uk" value="uk">
            UK
          </option>
          <option name="ap" value="ap">
            AP
          </option>
          <option name="jk" value="jk">
            J&K
          </option>
        </select>

        <label htmlFor="city">City</label>
        <select id="city" {...register("city")}>
          <option>Enter City</option>
          <option name="delhi" value="delhi">
            Delhi
          </option>
          <option name="dehradun" value="dehradun">
            Dehradun
          </option>
          <option name="noida" value="noida">
            Noida
          </option>
          <option name="chennai" value="chennai">
            Chennai
          </option>
        </select>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          placeholder="Enter Country"
          {...register("country")}
        />

        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          placeholder="Enter Number"
          {...register("pincode")}
        />

        <h3>Other Details:</h3>

        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          placeholder="Enter Occupation"
          id="occupation"
          {...register("occupation")}
        />

        <label htmlFor="religion">Religion</label>
        <select id="religion" {...register("religion")}>
          <option>Enter Religion</option>
          <option name="hindu" value="hindu">
            Hindu
          </option>
          <option name="muslim" value="muslim">
            Muslim
          </option>
          <option name="sikh" value="sikh">
            Sikh
          </option>
          <option name="christian" value="christian">
            Christian
          </option>
        </select>

        <label htmlFor="maritalstatus">Marital Status</label>
        <select id="maritalstatus" {...register("maritalstatus")}>
          <option>Enter Marital Status</option>
          <option name="unmarried" value="unmarried">
            UnMarried
          </option>
          <option name="married" value="married">
            Married
          </option>
          <option name="divorced" value="divorced">
            Divorced
          </option>
        </select>

        <label htmlFor="bloodgroup">Blood Group</label>
        <select id="bloodgroup" {...register("bloodgroup")}>
          <option>Group</option>
          <option name="a+" value="a+">
            A+
          </option>
          <option name="b+" value="b+">
            B+
          </option>
          <option name="o+" value="o+">
            O+
          </option>
        </select>

        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          placeholder="Enter Nationlaity"
          id="nationality"
          {...register("nationality")}
        />
        <button>SUBMIT</button>
      </form>

      <DevTool control={control} />
      <br />
      {/* <div className="buttonContainer">
        <button>CANCEL</button>
      </div> */}
    </div>
  );
}

export default Form;
