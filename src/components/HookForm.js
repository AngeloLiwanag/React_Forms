import React from 'react';
import styles from './HookForm.module.css';

const HookForm = props => {
    const{inputs, setInputs} = props;

    const onChangeHandler = event => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div>
            <form className={styles.myForm}>
            <table>
                <tr>
                    <th>
                        <label className={styles.myLabel}>First Name</label>
                    </th>
                    <th>
                        <input className={styles.myInput} type="text" name="firstName" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Last Name</label>
                    </th>
                    <th>
                        <input className={styles.myInput} type="text" name="lastName" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Email</label>
                    </th>
                    <th>
                        <input className={styles.myInput} type="email" name="email" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Password</label>
                    </th>
                    <th>
                        <input className={styles.myInput} type="password" name="password" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Confirm Password</label>
                    </th>
                    <th>
                        <input className={styles.myInput} type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    </th>
                </tr>     
            </table>
            </form>
        </div>
    )
}

export default HookForm;