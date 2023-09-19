<script setup>
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

import { ref } from 'vue';

const router = useRouter();
const userInputs = ref({ email: '', password: '' });
const validations = ref({ error: '', raised: false });

const auth = useFirebaseAuth();

async function login() {
	try {
		await signInWithEmailAndPassword(
			auth,
			userInputs.value.email,
			userInputs.value.password,
		);
		console.log(...useCurrentUser().value.email);
	} catch (error) {
		console.log(error.message);
		validations.value.error = error.message;
		validations.value.raised = true;
	} finally {
		userInputs.value.email = '';
		userInputs.value.password = '';

		router.push({ name: 'landing-page' });
	}
}
</script>
<template>
	<v-sheet class="rounded-0" width="400" height="700">
		<h1 class="mb-2">Login</h1>
		<v-form @submit.prevent="login">
			<v-text-field
				label="Email"
				clearable
				v-model="userInputs.email"
				type="email"
				required
			/>
			<v-text-field
				label="Password"
				type="password"
				clearable
				v-model="userInputs.password"
			/>

			<v-btn-group>
				<v-btn class="bg-red-accent-3" variant="outlined" type="reset"
					>Reset</v-btn
				>
				<v-btn class="bg-green-accent-1" variant="outlined" type="submit"
					>Login</v-btn
				>
			</v-btn-group>

			<div>{{ userInputs }}</div>
		</v-form>

		<div>
		<span>Don't have account?:</span> <router-link to="/register">Create Account</router-link>
		</div>

	</v-sheet>

	<v-snackbar
		y="top"
		:timeout="2000"
		color="blue-grey"
		rounded="pill"
		v-model="validations.raised"
	>
		Error
	</v-snackbar>
</template>

<style></style>
