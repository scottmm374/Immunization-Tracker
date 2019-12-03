import React, { useState } from "react";
//import styled from "styled-components";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import api from "../utils/api";
import styled from "styled-components";

export const Button = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solclassName #ffffff;
    color: #ffffff;
  }
  border-radius: 4px;
  border: none;
  margin-top: 21px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

const NForm = styled.form`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NewField = styled.input`
  background: white;
  &:hover {
    background: #fdebe1;
  }
`;

// const NewCard = styled(Card)`
//   max-wclassNameth: 100%;
// `;

function AddChild() {
  const [child, setChild] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    isChild: true,
    patientEmail: "",
    userId: ""
  });

  const handleChange = e => {
    setChild({
      ...child,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/user/addpatient", child)
      .then(res => {
        console.log("Child Res", res);
        // resetForm();
        // props.setRefresh(true);
      })
      .catch(err => {
        console.log("Add child err", err);
      });
  };
  console.log(child);
  return (
    // <NewCard>
    <div className="form-cont">
      <NForm onSubmit={handleSubmit}>
        <NewField
          type="text"
          name="firstName"
          placeholder="First Name"
          value={child.firstName}
          onChange={handleChange}
          className="patient-Form"
        />

        <NewField
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={child.lastName}
          onChange={handleChange}
          className="patient-Form"
        />

        <NewField
          type="text"
          name="age"
          placeholder="Age (years)"
          value={child.age}
          onChange={handleChange}
          className="patient-Form"
        />

        <NewField
          type="dropdown"
          name="gender"
          placeholder="Gender"
          value={child.gender}
          onChange={handleChange}
          className="patient-Form"
        />
        {/* <option value="male">Male</option>
          <option value="female">Female</option>
        </input> */}

        <NewField
          type="text"
          name="weight"
          placeholder="Weight (Lbs)"
          value={child.weight}
          onChange={handleChange}
          className="patient-Form"
        />

        <NewField
          type="text"
          name="height"
          placeholder="Height (inches)"
          value={child.height}
          onChange={handleChange}
          className="patient-Form"
        />

        <Button type="submit">Add</Button>
      </NForm>
    </div>
  );
}

export default AddChild;

// const AddChild = ({ values, touched, errors }) => {
//   console.log(values);
//   return (
//     // <NewCard>
//     <div className="form-cont">
//       <Form>
//         <Field
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           className="patient-Form"
//         />
//         {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
//         {/* </FormContainer> */}
//         {/* <FormContainer> */}
//         {/*  <NewLable htmlFor="lastName">Last Name</NewLable> */}
//         <Field
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           className="patient-Form"
//         />
//         {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

//         <Field
//           type="text"
//           name="age"
//           placeholder="Age (years)"
//           className="patient-Form"
//         />
//         {touched.age && errors.age && <p>{errors.age}</p>}

//         <Field
//           component="select"
//           name="gender"
//           placeholder="Gender"
//           className="patient-Form"
//         >
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </Field>
//         {touched.gender && errors.gender && <p>{errors.gender}</p>}

//         <Field
//           type="text"
//           name="weight"
//           placeholder="Weight (Lbs)"
//           className="patient-Form"
//         />
//         {touched.weight && errors.weight && <p>{errors.weight}</p>}

//         <Field
//           type="text"
//           name="height"
//           placeholder="Height (inches)"
//           className="patient-Form"
//         />
//         {touched.height && errors.height && <p>{errors.height}</p>}

//         <Button type="submit">Add</Button>
//       </Form>
//     </div>
//   );
// };

// const FormikAddChildForm = withFormik({
//   mapPropsToValues({
//     firstName,
//     lastName,
//     age,
//     gender,
//     weight,
//     height,
//     patientEmail,
//     isChild,
//     userId
//   }) {
//     return {
//       firstName: firstName || "",
//       lastName: lastName || "",
//       age: age || "",
//       gender: gender || "",
//       weight: weight || "",
//       height: height || "",
//       patientEmail: patientEmail || "",
//       //patientPhone: patientPhone || "",
//       isChild: isChild || true,
//       userId: userId || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     firstName: Yup.string().required("Enter first name."),
//     lastName: Yup.string().required("Enter last name."),
//     age: Yup.string().required("Select an age."),
//     gender: Yup.string().required("Select a gender."),
//     weight: Yup.string().required("Enter a weight in pounds."),
//     height: Yup.string().required("Enter a height in inches."),
//     patientEmail: Yup.string().required("Please enter Parents Email")
//     /*patientPhone: Yup.string(),*/
//   }),

//   handleSubmit(values, { props, resetForm }) {
//     console.log(values);
//     api()
//       .post("/user/addpatient", values)
//       .then(res => {
//         console.log(res);
//         resetForm();
//         props.setRefresh(true);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// })(AddChild);

// export default FormikAddChildForm;
