/**
 * class which captures any type of DOM Event
 * and calls the matching prototype method
 */
export class EventHandler<T> {
    /**
     * standard Object method to handle Event
     * @param {Event} event DOM Event
     */
    static handleEvent(event: Event): void {
        // call the matching method
        // "click" -> handleclick(event)
        this["handle" + event.type](event);
    }

    /** @type {T} arbitrary value */
    context: T;

    constructor(context: T) {
        this.context = context;
    }

    handleEvent = EventHandler.handleEvent;
}
