import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

/**
 * Custom hook for signing up a user with email and password.
 * 
 * @returns {Object} An object containing the loading state, error state, and the signup function.
 * @property {boolean} loading - A boolean indicating whether the signup process is in progress.
 * @property {string|null} error - The error message, if any, occurred during the signup process.
 * @property {Function} signup - The function to initiate the signup process.
 */
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

        // Using Firestore to check if the username is already taken
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("username", "==", inputs.username));
        const querySnapShot = await getDocs(q);
        if (!querySnapShot.empty) {
            showToast("Error", "Username already exists", "error");
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
