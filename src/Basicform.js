import { useFormik } from "formik"
import * as yup from 'yup';

const validateForm = (values) => {
  const errors = {};
  console.log("validateForm", values);

  // email min 5 character
  if (values.email.length < 5){
    errors.email = "please provide min 5 email charcaters"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  };
  // email pattern
  
  // min 8 characters
  if (values.password.length < 8){
    errors.password = "please provide min 8 characters"
  } else if (values.password.length > 12){
    errors.password = "please provide max 12 characters"
  }
  console.log(errors);
  return errors;
}
// 1. Without Destructured Method:

// export function Basicform() {
//   const formik = useFormik({initialValues : {email: "", password: ""},
//   validate : validateForm,
//   onSubmit: (values) =>{
//     console.log("onSubmit", values);
//   }
// }); 
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input 
//       id="email"
//       name="email"
//       value={formik.values.email} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       type="email" 
//       placeholder="Enter Your Email"/>
//       {formik.errors.email &&
//       formik.touched.email &&
//       formik.errors.email}
      
//       <input 
//       id="password"
//       name="password"
//       value={formik.values.password} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       type="password" 
//       placeholder="Enter Your Password"/>
//       {/* only when the user moves away show the error */}
//       {formik.errors.password &&
//       formik.touched.password &&
//       formik.errors.password}
     
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// 2. Destructured Method:
// export function Basicform() {
//   const {handleSubmit,values,handleChange,handleBlur,errors,touched} = 
//   useFormik ({
//   initialValues : {email: "", password: ""},
//   validate : validateForm,
//   // only when no errors, onSubmit.
//   onSubmit: (values) =>{ console.log("onSubmit", values) },
//   });
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//       id="email"
//       name="email"
//       value={values.email} 
//       onChange={handleChange}
//       onBlur={handleBlur}
//       type="email" 
//       placeholder="Enter Your Email"/>

//       {/* only when the user moves away show the error */}
//       {errors.email && touched.email && errors.email}
      
//       <input 
//       id="password"
//       name="password"
//       value={values.password} 
//       onChange={handleChange}
//       onBlur={handleBlur}
//       type="password" 
//       placeholder="Enter Your Password"/>

//       {/* only when the user moves away show the error */}
//       {errors.password && touched.password && errors.password}
     
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// 3.Using YUP Library 

const formValidationSchema = yup.object({
  email: yup
  .string()
  .min(5, "Need a bigger email 😄")
  .required ("wh not fill this email? 😏")
  .matches (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matched 😑"),
  password: yup
  .string()
  .min(8, "Need a longer password 😄")
  .max(12, "password is too long 😅")
  .required ("why not fill this password? 😏"),
});

export function Basicform() {
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} = 
  useFormik ({
  initialValues : {email: "", password: ""},
  validationSchema : formValidationSchema,
  // only when no errors, onSubmit.
  onSubmit: (values) =>{ console.log("onSubmit", values) },
  });
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      id="email"
      name="email"
      value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur}
      type="email" 
      placeholder="Enter Your Email"/>

      {/* only when the user moves away show the error */}
      {errors.email && touched.email && errors.email}
      
      <input 
      id="password"
      name="password"
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur}
      type="password" 
      placeholder="Enter Your Password"/>

      {/* only when the user moves away show the error */}
      {errors.password && touched.password && errors.password}
     
      <button type="submit">Submit</button>
    </form>
  );
}