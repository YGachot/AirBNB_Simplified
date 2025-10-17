import { create } from 'zustand';

export const useReviewStore = create((set) => ({
  reviews: [],
  responses: {},
  
  setReviews: (reviews) => set({ reviews }),
  
  addResponse: (reviewId, responseText) => set((state) => ({
    responses: {
      ...state.responses,
      [reviewId]: responseText
    }
  })),
}));