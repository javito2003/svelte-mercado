<script>
    import Api from "../api";
    import { navigate } from "svelte-routing";
    import { setStorageUser, authlogin } from "../store/store";

    const usuario = {
        email: "",
        password: "",
    };

    const logIn = function () {
        Api.post("/login", usuario)
            .then((res) => {
                console.log(res);
                const auth = {
                    token: res.token,
                    userData: res.userData,
                };
                authlogin.loginUser(auth);
                setStorageUser(auth);
                navigate("/mercado");
            })
            .catch((err) => {
                console.log("error " + err);
            });
    };
</script>

<main>
    <div class="container text-center">
        <h1>Sign In</h1>
        <form on:submit|preventDefault={logIn}>
            <div class="form-group">
                <input
                    type="email"
                    class="form-control my-5"
                    placeholder="Ingresa su email"
                    bind:value={usuario.email}
                />
                <input
                    type="password"
                    class="form-control my-5"
                    placeholder="Ingresa su password"
                    bind:value={usuario.password}
                />
                <button class="btn btn-warning btn-block" type="submit"
                    >Ingresar</button
                >
            </div>
        </form>
    </div>
</main>
