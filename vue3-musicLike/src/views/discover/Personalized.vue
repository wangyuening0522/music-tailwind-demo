<template>
	<div>
		<Title title="你的专属歌单"/>
		<div>
			<div v-for="(item,index) in personalized.sampleSize(10)"  :key="index">

			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import Title from '../../components/common/Title.vue'
import {useMusicStore} from "../../stores/music"
const {getPersonalized} =useMusicStore();
import {toRefs} from 'vue'
const {personalized} =toRefs(useMusicStore());
</script>