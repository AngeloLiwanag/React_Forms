import React from 'react';
import styles from './HookForm.module.css';

const HookForm = props => {
    const{inputs, setInputs} = props;

    let message1;
    let message2;
    let message3;
    let message4;
    let message5;

    if(inputs.firstName.length < 2){
        message1=<p>Must be at least 2 characters</p>
    }
    if(inputs.lastName.length < 2){
        message2=<p>Must be at least 2 characters</p>
    }
    if(inputs.email.length < 5){
        message3=<p>Must be at least 5 characters</p>
    }
    if(inputs.password.length < 8){
        message4=<p>Must be at least 8 characters</p>
    }
    if(inputs.submit && inputs.password === inputs.confirmPassword){
        message5=<p>Its Match</p>
    }else{
        message5=<p>Passwords Must Match</p>
    }

    const onChangeHandler = event => {
        setInputs({
            ...inputs,
            submit: true,
            [event.target.name]: event.target.value,
        });
        console.log(inputs.confirmPassword + " reg")
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
                        <p>{message1}</p>
                        <input className={styles.myInput} type="text" name="firstName" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Last Name</label>
                    </th>
                    <th>
                        <p>{message2}</p>

                        <input className={styles.myInput} type="text" name="lastName" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>

                        <label className={styles.myLabel}>Email</label>
                    </th>
                    <th>
                        <p>{message3}</p>
                        <input className={styles.myInput} type="email" name="email" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Password</label>
                    </th>
                    <th>
                        <p>{message4}</p>
                        <input className={styles.myInput} type="password" name="password" onChange={onChangeHandler}/>
                    </th>
                </tr>
                <tr>
                    <th>
                        <label className={styles.myLabel}>Confirm Password</label>
                    </th>
                    <th>
                        <p>{message5}</p>
                        <input className={styles.myInput} type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    </th>
                </tr>     
            </table>
            </form>
        </div>
    )
}

export default HookForm;