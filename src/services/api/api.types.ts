type DefaultResponse<T = any> = {
  data: T
  status: 'success' | 'failed'
}

export type CreateUser = (params: {
  name: string
  username: string
}) => Promise<DefaultResponse>

export type TimeInterval = {
  day: string
  startTimeInMinutes: number
  endTimeInMinutes: number
}

export type SaveUserTimeIntervals = (params: {
  timeIntervals: TimeInterval[]
}) => Promise<DefaultResponse>

type Profile = {
  bio: string
}

export type UpdateUserProfile = (params: {
  profile: Profile
}) => Promise<DefaultResponse>

export type GetProfileByUsername = (params: { username: string }) => Promise<
  DefaultResponse<{
    profile: {
      name: string
      username: string
      avatarUrl: string
      bio: string
    }
  }>
>
