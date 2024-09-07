import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseHelper/firebaseConfigForServer";
import { useState } from "react";
import ErrorFromFirebase from "../../Helpers/FirebaseErrorMessages";
import GenericSpinner from "../GenericComponents/FormComponent/GenericSpinner";

const provider = new GoogleAuthProvider();

function LoginWithGoogle({ onAuthSuccess }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true);
            await signInWithPopup(auth, provider);
            await onAuthSuccess();
        }
        catch (e) {
            setError(e);
        }
    }

    if (error) {
        return <ErrorFromFirebase error={error} />
    }

    if (isLoading) {
        return <GenericSpinner />
    }

    return (
        <div className="max-Width-250 mx-auto">
            <img
                onClick={loginWithGoogle}
                src={"./googleSignIn.png"}
                className="card-img-top"
                alt="..." />
        </div>
    );
}

export default LoginWithGoogle;