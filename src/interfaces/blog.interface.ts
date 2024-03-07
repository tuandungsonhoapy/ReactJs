import { Post } from 'types/blog.type'

export interface blogAction {
  payload: Post
}

export interface postParam {
  id: string
}
