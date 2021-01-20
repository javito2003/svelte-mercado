<script>
	import { Router, Link, Route } from "svelte-routing";
	import LogIn from "./pages/LogIn.svelte";
	import Home from "./pages/Home.svelte";
	import Register from "./pages/Register.svelte";

	export let url = "";
</script>

<Router {url}>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-10">
		<a class="navbar-brand" href="/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarColor03"
			aria-controls="navbarColor03"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarColor03">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/"
						>Home
						<span class="sr-only">(current)</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/login">Log In</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/register">Register</a>
				</li>
				<!-- <li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						data-toggle="dropdown"
						href="#"
						role="button"
						aria-haspopup="true"
						aria-expanded="false">Dropdown</a
					>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a
						>
						<div class="dropdown-divider" />
						<a class="dropdown-item" href="#">Separated link</a>
					</div>
				</li> -->
			</ul>
			<!-- <form class="form-inline my-2 my-lg-0">
				<input
					class="form-control mr-sm-2"
					type="text"
					placeholder="Search"
				/>
				<button class="btn btn-secondary my-2 my-sm-0" type="submit"
					>Search</button
				>
			</form> -->
		</div>
	</nav>
	<div>
		<Route path="/" component={Home} />
		<Route path="/login" component={LogIn} />
		<Route path="/register" component={Register} />
	</div>
</Router>
