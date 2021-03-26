const SignUp = () => {

    window.addEventListener('beforeunload', e => {
        e.preventDefault();
        return false;
      });

    return (
        <div>
            sign up page
        </div>  
    );
}

export default SignUp;