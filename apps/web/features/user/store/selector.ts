import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store'
export const selectorUserData = (state: RootState) => state.user
