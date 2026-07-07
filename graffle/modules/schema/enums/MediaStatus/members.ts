/**
* Has completed and is no longer being released
*/
export type FINISHED = "FINISHED"
/**
* Currently releasing
*/
export type RELEASING = "RELEASING"
/**
* To be released at a later date
*/
export type NOT_YET_RELEASED = "NOT_YET_RELEASED"
/**
* Ended before the work could be finished
*/
export type CANCELLED = "CANCELLED"
/**
* Version 2 only. Is currently paused from releasing and will resume at a later date
*/
export type HIATUS = "HIATUS"