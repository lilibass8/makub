import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    UserCredential,
    onAuthStateChanged,
    NextOrObserver,
} from "firebase/auth";
import { auth } from "./firebase";

/**
 * Sign up a new user with email and password
 */
export const signUpUser = async (
    email: string,
    password: string
): Promise<UserCredential> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential;
    } catch (error: any) {
        throw new Error(getAuthErrorMessage(error.code));
    }
};

/**
 * Sign in an existing user with email and password
 */
export const signInUser = async (
    email: string,
    password: string
): Promise<UserCredential> => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential;
    } catch (error: any) {
        throw new Error(getAuthErrorMessage(error.code));
    }
};

/**
 * Sign out the current user
 */
export const signOutUser = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error: any) {
        throw new Error("حدث خطأ أثناء تسجيل الخروج");
    }
};

/**
 * Get the current authenticated user
 */
export const getCurrentUser = (): User | null => {
    return auth.currentUser;
};

/**
 * Listen to authentication state changes
 */
export const onAuthStateChange = (callback: NextOrObserver<User>): (() => void) => {
    return onAuthStateChanged(auth, callback);
};

/**
 * Convert Firebase auth error codes to Arabic messages
 */
const getAuthErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return "هذا البريد الإلكتروني مستخدم بالفعل";
        case "auth/invalid-email":
            return "البريد الإلكتروني غير صحيح";
        case "auth/operation-not-allowed":
            return "العملية غير مسموحة";
        case "auth/weak-password":
            return "كلمة المرور ضعيفة جداً. يجب أن تكون 6 أحرف على الأقل";
        case "auth/user-disabled":
            return "تم تعطيل هذا الحساب";
        case "auth/user-not-found":
            return "لا يوجد حساب بهذا البريد الإلكتروني";
        case "auth/wrong-password":
            return "كلمة المرور غير صحيحة";
        case "auth/too-many-requests":
            return "تم تجاوز عدد المحاولات المسموحة. يرجى المحاولة لاحقاً";
        case "auth/network-request-failed":
            return "خطأ في الاتصال بالشبكة";
        default:
            return "حدث خطأ أثناء المصادقة. يرجى المحاولة مرة أخرى";
    }
};
