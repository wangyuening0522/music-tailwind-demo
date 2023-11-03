import type {Personalized} from '../models/personalized.ts';
import http from './http.ts'
export async function usePersonalized(){
	const {result} =await http.get<{result:Personalized[]}>('/personalized');
	return result;
};

