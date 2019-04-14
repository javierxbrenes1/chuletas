import React from 'react'
import useFormal from '@kevinwolf/formal-web';
import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    gender: yup.string().required(),
});
const initialValue = {
    name: '',
    lastName: '',
    gender: ''
}

const FormFormal = () => {
    console.log('render');
const formal = useFormal(initialValue, {schema, onSubmit: value => console.log(value)});

  return (
    <div>
      <form {...formal.getFormProps()}>
        <div>
            <label htmlFor="name">name</label>
            <input {...formal.getFieldProps("name")} type="text"/>
            {formal.errors.name && <div>{formal.errors.name}</div>}
        </div>
        <div>
        <label htmlFor="lastName">lastName</label>
            <input {...formal.getFieldProps("lastName")} type="text"/>
            {formal.errors.lastName && <div>{formal.errors.lastName}</div>}
        </div>
        <div>
        <label htmlFor="gender">Gender</label>
            <input {...formal.getFieldProps("gender")} type="text"/>
            {formal.errors.gender && <div>{formal.errors.gender}</div>}
        </div>

        <button {...formal.getSubmitButtonProps}>
            submit
        </button>

      </form>
    </div>
  )
}

export default FormFormal
