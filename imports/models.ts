export enum MessageType {
  TEXT = <any>'text'
}

export interface Idea {
  _id?: string;
  title?: string;
  createdAt?: Date;
}

export interface Note {
  _id?: string;
  ideaId?: string;
  content?: string;
  createdAt?: Date;
  type?: MessageType;
}
