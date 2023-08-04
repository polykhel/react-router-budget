import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: 'username'
    })

    // return redirect
    return redirect('/')
}