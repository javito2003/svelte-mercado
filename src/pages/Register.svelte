<script>
    import Api from "../api.js";
    import { navigate } from "svelte-routing";
    import swal from "sweetalert";
    let user = {
        name: "",
        email: "",
        password: "",
    };
    const register = function () {
        Api.post("/register", user)
            .then((res) => {
                console.log(res);
                swal("Good job!", "You clicked the button!", "success");
                navigate("/home");
            })
            .catch((err) => {
                console.log("error " + err);
            });
    };
</script>

<main>
    <div class="container">
        <h1 class="text-center">Registrarse</h1>
        <form on:submit|preventDefault={register}>
            <div class="form-group">
                <input
                    bind:value={user.name}
                    type="text"
                    class="form-control my-5"
                    placeholder="Ingrese su nombre"
                />
                <input
                    bind:value={user.email}
                    type="email"
                    class="form-control my-5"
                    placeholder="Ingrese su email"
                />
                <input
                    bind:value={user.password}
                    type="password"
                    class="form-control my-5"
                    placeholder="Ingrese su password"
                />
                <button class="btn btn-success btn-block"
                    ><strong>Registrarse</strong></button
                >
            </div>
        </form>
    </div>
</main>
