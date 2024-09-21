//this is to defined the content either movie or the Tv show
import { create } from "zustand";

export const useContentStore = create((set) => ({
	contentType: "movie",
	setContentType: (type) => set({ contentType: type }),
}));