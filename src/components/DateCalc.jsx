import { useFormik } from 'formik';
import "./DateCalc.scss"

export const DateCalc = () => {

  const formik = useFormik({
    initialValues: {
      date: 'DD',
      month: 'MM',
      year: 'YYYY'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div className='calcContainer'>
        <form className="formInputs" onSubmit={formik.handleSubmit}>
          <div className="dateInput">
          <label htmlFor='date'>Day</label>
            <input className='dateInputBox'
              id='date'
              name='date'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>
          <div className="monthInput">
            <label htmlFor='month'>Month</label>
            <input className="monthInputBox" 
              id='month'
              name='month'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.month}      
            />
          </div>
          <div className="yearInput">
            <label htmlFor='year'>Year</label>
            <input className="yearInputBox"
              id='year'
              name='year'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.year}
            />
          </div>
        </form>
    </div>
  )
}

export default DateCalc;