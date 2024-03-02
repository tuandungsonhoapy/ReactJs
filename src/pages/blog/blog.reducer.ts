import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { blogAction } from 'interfaces/blog.interface'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editPostValue: Post | null | undefined
}

const initalState: BlogState = {
  postList: initalPostList,
  editPostValue: null
}

export const addPost = createAction('blog/addPost', (post: Post) => {
  const newPost: blogAction = {
    payload: {
      ...post,
      id: nanoid()
    }
  }
  return newPost
})

export const deletePost = createAction<string>('blog/deletePost')

export const setEditPost = createAction<string>('blog/setEditPost')

export const editPost = createAction<Post>('blog/editPost')

export const cancelEditPost = createAction('blog/cancelEditPost')

const blogReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.postList.push(action.payload)
    })
    .addCase(deletePost, (state, action) => {
      const indexPost = state.postList.findIndex((post) => post.id === action.payload)
      if (indexPost !== -1) {
        state.postList.splice(indexPost, 1)
      }
    })
    .addCase(setEditPost, (state, action) => {
      const post = state.postList.find((post) => post.id === action.payload)
      state.editPostValue = post
    })
    .addCase(editPost, (state, action) => {
      const indexPost = state.postList.findIndex((post) => post.id === action.payload.id)
      state.postList[indexPost] = action.payload
    })
    .addCase(cancelEditPost, (state, action) => {
      state.editPostValue = null
    })
    .addDefaultCase((state, action) => state)
})

export default blogReducer
