/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FormEvent, useState } from 'react';

const Form = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        conditionsAccepted: false,
    });

    const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value as typeof state[keyof typeof state];
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        setState({ ...state, [event.target.name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state.email);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input name="name" onChange={onFieldChange} />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" value={state.email} name="email" onChange={onFieldChange} />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onFieldChange} />
            </div>
            <div className="field">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" name="confirmPassword" onChange={onFieldChange} />
            </div>
            <div className="field checkbox">
                <input type="checkbox" name="conditions" onChange={onFieldChange} />
                <label htmlFor="conditions">I agree to the terms and conditions</label>
            </div>
            <button type="submit">Sign up</button>
        </form>
    );
};

export default Form;
