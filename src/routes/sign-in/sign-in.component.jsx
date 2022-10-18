import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  /*useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await CreateUserDocumentFromAuth(response.user);
      }
    };
    fetchData();
  }, []);*/

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await CreateUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
