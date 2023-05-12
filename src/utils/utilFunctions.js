import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const getItem = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return Item;
};

const Email_Password_Verifcation = (email, password, errorEmail, errorPassword ) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
    if (!(emailRegex.test(email))) {
        return errorEmail.current.textContent = "email must accept the standards";
    } else {
        errorEmail.current.textContent = "";
    }

    if (!(passwordRegex.test(password))) {
        return errorPassword.current.textContent = "Password must contain at least 8 caracters letters & numbers";
    } else {
        errorPassword.current.textContent = "";
    }
}

const Register_Verification = (FieldState, errorUsername, errorEmail, errorPassword, errorFirstn, errorAddress, errorCity, errorState, errorCountry, errorPhone) =>{
    const fetch_error = Email_Password_Verifcation(FieldState.email, FieldState.password, errorEmail, errorPassword);
    if(fetch_error){
        return "Email Or Password Wrong";
    }
    const ruleRegex1 = /^[a-zA-Z\s]{5,}$/;
    const ruleRegex2 = /^.{5,}$/;
    const phoneRegex = /^(\+216|00216)?[25-9]\d{7}$/;
    
    if(!ruleRegex2.test(FieldState.username)){
        return errorUsername.current.textContent = "username must be over 5 caracters";
    }else{
        errorUsername.current.textContent = ""
    }

    if(!ruleRegex1.test(FieldState.full_name)){
        return errorFirstn.current.textContent = "First name must be over 5 caracters & contain only letters";
    }else{
        errorFirstn.current.textContent = "";
    }
    let age = parseInt(FieldState.age);
    if( !(18 <= age && age <= 120)){
        return errorAddress.current.textContent = "age must be between 18 and 120 !";
    }else{
        errorAddress.current.textContent = "";
    }
    if(!ruleRegex1.test(FieldState.country)){
        return errorCountry.current.textContent = "City must be over 5 caracters & contain only letters";
    }else{
        errorCountry.current.textContent = "";
    }
    if(!ruleRegex1.test(FieldState.state)){
        return errorState.current.textContent = "City must be over 5 caracters & contain only letters";
    }else{
        errorState.current.textContent = "";
    }
    if(!ruleRegex1.test(FieldState.city)){
        return errorCity.current.textContent = "City must be over 5 caracters & contain only letters";
    }else{
        errorCity.current.textContent = "";
    }
    if(!phoneRegex.test(FieldState.phone)){
        return errorPhone.current.textContent = "Tunisian Phone number must be this format : +216XXXXXXXX";
    }else{
        errorPhone.current.textContent = "";        
    }
}



export {getItem, Email_Password_Verifcation, Register_Verification};