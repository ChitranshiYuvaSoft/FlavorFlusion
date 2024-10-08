import { Bounce, toast } from "react-toastify";

export const errorMessage = () => {
    toast.error('Something Went Wrong!!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}