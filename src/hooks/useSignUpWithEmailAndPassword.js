import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login);

    const signup = async (inputs) => {
        if (
            !inputs.email ||
            !inputs.password ||
            !inputs.fullName ||
            !inputs.username
        ) {
            // use showToast hook if any of the fields are empty to show an error
            showToast("Error", "Please fill all the fields", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(
                inputs.email,
                inputs.password
            );
            if (!newUser && error) {
                console.log(error.message)
                showToast("Error", error.message, "error");
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
                // setting in state using zustand (similar to redux)
                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error", error.message, "error");

        }
    };
    return { loading, error, signup }
};

export default useSignUpWithEmailAndPassword
