export function getClick(ev: MouseEvent): CustomEvent {
	const payload = {
		ctrlKey: ev.ctrlKey,
		shiftKey: ev.shiftKey,
		metaKey: ev.metaKey,
	};
	const event = new CustomEvent("wf-click", {
		detail: {
			payload,
		},
	});
	return event;
}

export function getKeydown(ev: KeyboardEvent): CustomEvent {
	const payload = {
		key: ev.key,
		ctrlKey: ev.ctrlKey,
		shiftKey: ev.shiftKey,
		metaKey: ev.metaKey,
	};
	const event = new CustomEvent("wf-keydown", {
		detail: {
			payload,
		},
	});
	return event;
}
