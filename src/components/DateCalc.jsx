import { useFormik } from 'formik';

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
    <div className='container'>
      <form className="formInputs" onSubmit={formik.handleSubmit}>
        <label htmlFor='date'>Day</label>
        <input className='inputLabel'
          id='date'
          name='date'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <label htmlFor='month'>Month</label>
        <input 
          id='month'
          name='month'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.month}      
        />

        <label htmlFor='year'>Year</label>
        <input 
          id='year'
          name='year'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.year}
        />
      </form>
    </div>
  )
}

export default DateCalc;