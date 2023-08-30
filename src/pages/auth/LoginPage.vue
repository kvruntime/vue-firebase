<script setup>

</script>
<template>
	<v-sheet class="rounded-0" width="400" height="700">
		<h1 class="mb-2">Login</h1>
		<v-form>
			<v-text-field label="Name" clearable  />
			<v-text-field
				label="Password"
				clearable
			
				:type="password"
			/>

			<v-btn-group>
				<v-btn class="bg-red-accent-3" variant="outlined">Reset</v-btn>
				<v-btn class="bg-green-accent-1" variant="outlined"
					>Login
				</v-btn>
			</v-btn-group>


		</v-form>
	</v-sheet>
</template>

<style></style>
