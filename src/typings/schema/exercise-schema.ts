export interface ExerciseSchema {
	name: string;
	reps?: number;
	time?: number;
	sets?: number;
	tags?: Array<string>;
}
