import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useImage2Cb() {
	const onClick = useCallback(callbackFactory("Image2", "Assignment", "/Assignment", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton17Cb() {
	const onClick = useCallback(callbackFactory("Button17", "Assignment", "/Assignment", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}