import type { Events } from './events';

type Event = string;
type Callback<T> = (data: T) => void;

// Define the event names and their corresponding event data types

// Create a mapping from event names to arrays of callbacks
const callbacks: Record<Event, Callback<any>[]> = {}; // eslint-disable-line @typescript-eslint/no-explicit-any

// Create the event hub object
export const eventHub = {
	on: <T extends keyof Events>(event: T, callback: Callback<Events[T]>) => {
		callbacks[event] = callbacks[event] || [];
		callbacks[event].push(callback);
	},
	off: <T extends keyof Events>(event: T, callback: Callback<Events[T]>) => {
		if (callbacks[event]) {
			callbacks[event] = callbacks[event].filter((cb) => cb !== callback);
		}
	},
	emit: <T extends keyof Events>(event: T, data: Events[T]) => {
		if (callbacks[event]) {
			callbacks[event].forEach((cb) => cb(data));
		}
	}
};
