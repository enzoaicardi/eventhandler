import { Symbols } from "./symbols";

type EventHandlerCallback<EventType extends Event, ContextType> = (
    event: EventType,
    context: ContextType
) => unknown;

type EventHandlerParametters<
    EventType extends Event,
    ContextType
> = ContextType extends undefined
    ? [callback: EventHandlerCallback<EventType, ContextType>]
    : [
          callback: EventHandlerCallback<EventType, ContextType>,
          context: ContextType
      ];

export class EventHandler<
    EventType extends Event = Event,
    ContextType = undefined
> {
    /** @internal */
    [Symbols.callback]: EventHandlerCallback<EventType, ContextType>;
    /** @internal */
    [Symbols.ctx]: ContextType;

    constructor(...args: EventHandlerParametters<EventType, ContextType>) {
        this[Symbols.callback] = args[0];
        this[Symbols.ctx] = args[1] as ContextType;
    }

    handleEvent(event: EventType) {
        this[Symbols.callback](event, this[Symbols.ctx]);
    }
}
