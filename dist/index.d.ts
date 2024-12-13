// Generated by dts-bundle-generator v9.5.1

/**
 * class which captures any type of DOM Event
 * and calls the matching prototype method
 */
export declare class EventHandler<T> {
	/**
	 * standard Object method to handle Event
	 * @param {Event} event DOM Event
	 */
	static handleEvent(event: Event): void;
	/** @type {T} arbitrary value */
	context: T;
	constructor(context: T);
	handleEvent: typeof EventHandler.handleEvent;
}

export {};
