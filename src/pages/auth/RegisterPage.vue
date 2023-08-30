<script setup>
import { useFirebaseAuth  } from 'vuefire';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { ref } from 'vue';

const userInputs = ref({ email: '', password: '' });

const auth = useFirebaseAuth();

async function register() {

	try {
		const credential = createUserWithEmailAndPassword(
			auth,
			userInputs.value.email,
			userInputs.value.password,
		);
		console.log(credential);
	} catch (error) {
		console.error(error);
	}
}
</script>
<template>
	<v-sheet class="rounded-0" width="400" height="700">
		<h1 class="mb-2">Register</h1>
		<v-form @submit.prevent="register">
			<v-text-field label="Name" clearable v-model="userInputs.email" />
			<v-text-field
				label="Password"
				type="password"
				clearable
				v-model="userInputs.password"
			/>

			<v-btn-group>
				<v-btn class="bg-red-accent-3" variant="outlined" type="reset">Reset</v-btn>
				<v-btn class="bg-green-accent-1" variant="outlined" type="submit">Register</v-btn>
			</v-btn-group>

      <div>{{userInputs}}</div>
		</v-form>
	</v-sheet>
</template>

<style></style>
