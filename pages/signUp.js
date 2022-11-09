import Link from "next/link";

const signUp = () => {
    return (  
        <div className="signup__container">
            <h1>Sign Up!</h1>
            <div className="panel-primary">
                <div className="panel-heading">
                    <h2>Registration Form</h2>
                </div>
                <div className="panel-body">
                    <form action="login.php" method="POST">
                        <div className="form-group">
                            <label for="userName">User Name:</label>
                            <input type="text" className="form-control" id="userName" name="userName"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="text" className="form-control" id="password" name="password"/>
                        </div>
                        <input type="submit" className="signUp__btn" value="Sign In"/>
                    </form>
                </div>
                <div className="panel-footer">
                    <small>&copy; Boba Thoughts</small>
                </div>
                <div> 
                    <Link href="/login.html"><h3>Already have an account?</h3></Link>
                </div>
            </div>
        </div>
    );
}
 
export default signUp;