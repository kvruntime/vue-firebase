<script setup>
import { useFirebaseAuth } from 'vuefire';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { ref } from 'vue';

const userInputs = ref({ email: '', password: '' });
const validations = ref({ error: '', raised: false });

const auth = useFirebaseAuth();

async function register() {
	try {
		const credential = await createUserWithEmailAndPassword(
			auth,
			userInputs.value.email,
			userInputs.value.password,
		);
		console.log(credential);
	} catch (error) {
		console.log(error.message);
		validations.value.error = error.message;
		validations.value.raised = true;
	} finally {
		userInputs.value.email=""
		userInputs.value.password=""
	}
}
</script>
<template>
	<v-sheet class="rounded-0" width="400" height="700">
		<h1 class="mb-2">Register</h1>
		<v-form @submit.prevent="register">
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
					>Register</v-btn
				>
			</v-btn-group>

			<div>{{ userInputs }}</div>
		</v-form>

		<div>
		<span>Already Have Account?:</span> <router-link to="/login">Login</router-link>
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
