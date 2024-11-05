import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Target } from "../models/target";

export const targetApi = createApi({
  reducerPath: "targetApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // Fetch all targets
    getTargets: builder.query<Target[], void>({
      async queryFn() {
        try {
          const targetCollectionRef = collection(db, "target");
          const querySnapshot = await getDocs(targetCollectionRef);
          const targets = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Target),
          }));

          return { data: targets };
        } catch (error) {
          return { error: { message: (error as Error).message } };
        }
      },
    }),

    // Fetch a single target by ID
    getTargetById: builder.query<Target, string>({
      async queryFn(targetId) {
        try {
          const targetDocRef = doc(db, "target", targetId);
          const targetDoc = await getDoc(targetDocRef);

          if (targetDoc.exists()) {
            const target = {
              id: targetDoc.id,
              ...(targetDoc.data() as Target),
            };
            return { data: target };
          } else {
            return { error: { message: "Target not found" } };
          }
        } catch (error) {
          return { error: { message: (error as Error).message } };
        }
      },
    }),
  }),
});

export const { useGetTargetsQuery, useGetTargetByIdQuery } = targetApi;
