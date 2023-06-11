export default function dailyTemperatures(temperatures: number[]): number[] {
	const result = new Array(temperatures.length).fill(0);
	const stack: number[][] = [];

	for (let i = 0; i < temperatures.length; i++) {
		while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
			const index = stack[stack.length - 1][0];

			result[index] = i - index;
			stack.pop();
		}

		stack.push([i, temperatures[i]]);
	}

	return result;
}
