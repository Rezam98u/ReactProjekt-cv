import React from 'react';
import { Grid, TextField } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form';
// import { useForm } from 'react-hook-form';

/////////////////////////
const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    // const { register } = useForm();

    return (
        <Grid item xs={12} sm={4}>
            <Controller
                render={({ field }) =>
                    <TextField {...field}
                        label={label} fullWidth required={required}
                    // {...register(name)}
                    // error
                    // id="outlined-error"
                    // label="Error"
                    // defaultValue="Hello World"
                    // helperText="Incorrect entry."
                    />}
                control={control}
                name={name}
            />
        </Grid>
    );
}

export default FormInput;
