type EventHandlerCallback<EventType extends Event, ContextType> = (
    event: EventType,
    context: ContextType
) => unknown;

type EventHandlerParametters<
    EventType extends Event,
    ContextType
> = ContextType extends undefined
    ? [
          callback: EventHandlerCallback<EventType, ContextType>,
          context?: ContextType
      ]
    : [
          callback: EventHandlerCallback<EventType, ContextType>,
          context: ContextType
      ];

export class EventHandler<
    EventType extends Event = Event,
    ContextType = undefined
> {
    callback: EventHandlerCallback<EventType, ContextType>;
    context: ContextType;

    constructor(...args: EventHandlerParametters<EventType, ContextType>) {
        this.callback = args[0];
        this.context = args[1] as ContextType;
    }

    handleEvent(event: EventType) {
        this.callback(event, this.context);
    }
}
