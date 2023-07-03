import { useFormik } from 'formik';
import * as Yup from 'yup';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "./DateCalc.scss"

export const DateCalc = () => {

  const formik = useFormik({
    initialValues: {
      date: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      date: Yup.number()
      .min(1, "Must be a number 1-31")
      .max(31, "Must be number 1-31")
      .required("This field is required"),
      month: Yup.number()
      .min(1, "Must be a number 1-12")
      .max(12, "Must be a number 1-12")
      .required("This field is required"),
      year: Yup.number()
      .min(0, "Must be number 0-2023")
      .max(2023, "Must be number 0-2023")
      .required("This field is required"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div className='calcContainer'>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="inputBoxes">
          <div className="input">
          <label htmlFor='date' className='label'>DAY</label>
            <input className='inputBox'
              id='date'
              name='date'
              type='text'
              placeholder='DD'
              onChange={formik.handleChange}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="fieldError">{formik.errors.date}</div> 
            ) : null}
          </div>
          <div className="input">
            <label className='label' htmlFor='month'>MONTH</label>
            <input className="inputBox" 
              id='month'
              name='month'
              type='text'
              placeholder='MM'
              onChange={formik.handleChange}
              value={formik.values.month}      
            />
            {formik.touched.month && formik.errors.month ? (
              <div className="fieldError">{formik.errors.month}</div> 
            ) : null}
          </div>
          <div className="input">
            <label className='label' htmlFor='year'>YEAR</label>
            <input className="inputBox"
              id='year'
              name='year'
              type='text'
              placeholder='YYYY'
              onChange={formik.handleChange}
              value={formik.values.year}
            />
            {formik.touched.year && formik.errors.year ? (
              <div className="fieldError">{formik.errors.year}</div> 
            ) : null}
          </div>
          </div>
        </form>
        <div className='dividerContainer'>
            <hr className='horizontalLine'></hr>
            <ExpandCircleDownIcon sx={{width:"90px",height:"90px", color:"hsl(259, 100%, 65%)"}} type="submit" onClick={formik.handleSubmit}/>
        </div>
    </div> 
  )
}

export default DateCalc;