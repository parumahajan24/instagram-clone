import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        if (
            !inputs.email ||
            !inputs.password ||
            !inputs.fullName ||
            !inputs.username
        ) {
            console.log("Please fill all the fields");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(
                inputs.email,
                inputs.password
            );
            if (!newUser && error) {
                console.log(error);
                return;
            }
            if (newUser) {
                // Create a user document in your Firestore database
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    follwoing: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                //  create a new document 'users' collection in db (firestore) with the uid of the user as key
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

                // setting in local storage
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        } catch (error) {
            console.error("Error...in catch: ",error);
        }
    };

    return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword
