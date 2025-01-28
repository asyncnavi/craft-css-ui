// src/slice/matchSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  addDoc,
} from "firebase/firestore";

// Define types for match data
interface MatchData {
  userId: string;
  targetId: string;
  score: number;
  percentageMatched: number;
  maxScore?: number;
}

interface MatchState {
  data: MatchData | null;
  loading: boolean;
  error: string | null;
}

// Async thunk for storing or updating match data in Firebase
export const storeMatchData = createAsyncThunk<
  MatchData, // Return type of the thunk
  MatchData, // Argument type for the thunk
  { rejectValue: string } // Type for rejection errors
>(
  "match/storeMatchData",
  async (
    { userId, targetId, score, percentageMatched },
    { rejectWithValue }
  ) => {
    try {
      // Query Firestore to check if a document with the same userId and targetId exists
      const q = query(
        collection(db, "matches"),
        where("userId", "==", userId),
        where("targetId", "==", targetId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Document already exists, update the existing document
        const docRef = querySnapshot.docs[0].ref; // Get the reference to the first matching document
        const existingData = querySnapshot.docs[0].data() as MatchData;

        // Calculate the new maxScore
        const maxScore = Math.max(existingData.score, score);

        // Update the document with the new score and maxScore
        await updateDoc(docRef, {
          score,
          maxScore,
          percentageMatched,
        });

        return { userId, targetId, score, percentageMatched, maxScore };
      } else {
        // No matching document, create a new one
        const docRef = await addDoc(collection(db, "matches"), {
          userId,
          targetId,
          score,
          percentageMatched,
          maxScore: score, // Initial maxScore is the same as the first score
        });
        return {
          id: docRef.id,
          userId,
          targetId,
          score,
          percentageMatched,
          maxScore: score,
        };
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

// Initial state with type
const initialState: MatchState = {
  data: null,
  loading: false,
  error: null,
};

// Create the slice with proper typings
export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(storeMatchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        storeMatchData.fulfilled,
        (state, action: PayloadAction<MatchData>) => {
          state.loading = false;
          state.data = action.payload; // Store the returned data
        }
      )
      .addCase(
        storeMatchData.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});

export default matchSlice.reducer;
