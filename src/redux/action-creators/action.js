
export const addTask = (feilds) => {
    // debugger;
    return (dispatch) => {

        const { task } = feilds;
        // debugger;

        fetch("http://localhost:5000/api/task/addtask", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
            },

            body: JSON.stringify({
                task
            }),
        })
            .then((response) => response.json())

            .then((response) => {
                //  console.log(response.sucess)
                // toast.success(response?.sucess)

                if (!response?.sucess) {
                    throw Error(response.error)
                }
                //  console.log(response);       
            })
            .catch((err) => {
                // setError(err.message);
                //  toast.error(err);     

            })
    }
}

export const fetchTasks = () => {
    // debugger
    return (dispatch) => {
        fetch("http://localhost:5000/api/task/fetchalltask", {

            method: "GET",
            headers: {
                "content-type": "application/json",
                'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch(saveData(response))
                // setSettingsData(response);/
            })
            .catch(error => {
                // console.log(error, "joih");
            });
    }
}


const saveData = (amount) => {
    // debugger;
    return {
        type: "alltheData",
        payload: amount
    }
}

export const deletData = (feilds) => {
    // debugger  
    return (dispatch) => {
        const { _id } = feilds
        fetch(`http://localhost:5000/api/task/deletetask/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
            },
        })
            .then((response) => response.json())

            .then((response) => {
                console.log(response);
                dispatch(deleteddata(response))
            })
            .catch((err) => {
            })
    }
}
const deleteddata = (amount) => {
    return {
        type: "deleteddata",
        payload: amount
    }
}

export const signIn = (navigate, field) => {
    return (dispatch) => {
        const { email, password } = field;


        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())


            .then((response) => {
                // toast.success(response?.toast)
                console.log(response, "casdvas")
                if (!response?.success) {
                    throw Error(response.error)
                }
                // debugger;
                localStorage.setItem("Authorization", JSON.stringify(response.authtoken));
                dispatch(authtoken(JSON.stringify(response.authtoken).replaceAll('"', '')))
                navigate("/")

            })
            .catch((err) => {
                console.log(err, "cvdsavs");
            });

    }

}

const authtoken = (amount) => {
    // debugger;
    return {
        type: 'authtoken',
        payload: amount
    }
}

export const signUp = (input) => {
    // debugger;
    return (dispatch) => {
        const { name, email, password } = input;
        fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(
                {
                    name, email, password
                })
        })

            .then(response => response.json())
            .then(response => {

                if (!response?.success) {
                    // throw Error(response.error)

                    console.log(response);
                }
                //  console.log(response);
                // toast.success(response?.message)
                // setMessage(response);
                //  navigate("/sign-in")

            })
            .catch((error) => {
                console.log(error);
                // toast.error(error?.message);

            });

    }
}