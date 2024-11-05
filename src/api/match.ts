// src/store/matchApi.ts
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface MatchData {
  userId: string;
  targetId: string;
  score: number;
  percentageMatched: number;
  maxScore?: number;
}

interface AccumulatedScoreResponse {
  userId: string;
  totalScore: number;
}

// Define your API using `createApi`
export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // 1. Fetch accumulated score for a userId
    getAccumulatedScore: builder.query<AccumulatedScoreResponse, string>({
      async queryFn(userId) {
        try {
          const q = query(
            collection(db, "matches"),
            where("userId", "==", userId),
          );
          const querySnapshot = await getDocs(q);

          let totalScore = 0;
          querySnapshot.forEach((doc) => {
            const matchData = doc.data() as MatchData;
            totalScore += matchData.score;
          });

          return { data: { userId, totalScore } };
        } catch (error: any) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),

    // 2. Fetch match data for a specific userId and targetId
    getMatchData: builder.query<
      MatchData,
      { userId: string; targetId: string }
    >({
      async queryFn({ userId, targetId }) {
        try {
          const q = query(
            collection(db, "matches"),
            where("userId", "==", userId),
            where("targetId", "==", targetId),
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const matchData = querySnapshot.docs[0].data() as MatchData;
            return { data: matchData };
          } else {
            return {
              error: { status: "NOT_FOUND", error: "No match data found" },
            };
          }
        } catch (error: any) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
  }),
});

// Export the hooks for the defined endpoints
export const { useGetAccumulatedScoreQuery, useGetMatchDataQuery } = matchApi;
