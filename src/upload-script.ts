// uploadImages.js
import { storage, db } from "./firebase"; // Adjust the path according to your structure
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const allTargets = [
  { id: 1, image: "/test1.png", colors: ["#3F4869", "#F4DA64", "#E25C57"] },
  { id: 2, image: "/test2.png", colors: ["#6B7CBE", "#ABC497", "#FFFEFE"] },
  { id: 3, image: "/test3.png", colors: ["#FADE8B", "#594C94"] },
  { id: 4, image: "/test4.png", colors: ["#E6E9E3", "#61A74E", "#33572B"] },
  { id: 5, image: "/test5.png", colors: ["#3F4869", "#61A74E", "#242A42"] },
  { id: 6, image: "/test6.png", colors: ["#434B92", "#EAC049"] },
  { id: 7, image: "/test7.png", colors: ["#6592CF", "#243D83"] },
  { id: 8, image: "/test8.png", colors: ["#8AB8B6", "#D96C7B", "#F3EAD2"] },
  { id: 9, image: "/test9.png", colors: ["#b5e0ba", "#5d3a3a"] },
  {
    id: 10,
    image: "img/test10.png",
    colors: ["#62306D", "#AA445F", "#E38F66"],
  },
  {
    id: 11,
    image: "img/test11.png",
    colors: ["#6592CF", "#243D83", "#EEB850"],
  },
  { id: 12, image: "img/test12.png", colors: ["#3F4869", "#61A74E"] },
  { id: 13, image: "img/test13.png", colors: ["#61A74E", "#F7F3D7"] },
  { id: 14, image: "img/test14.png", colors: ["#434B92", "#434B92"] },
];

export const uploadImagesAndCreateCollection = async () => {
  try {
    const targetCollectionRef = collection(db, "target");

    for (const target of allTargets) {
      const imageFile = target.image; // Assuming the images are available in your project directory
      const imageRef = ref(storage, `targets/${target.id}.png`);

      // Convert image path to a File object
      const response = await fetch(imageFile);
      const blob = await response.blob();

      await uploadBytes(imageRef, blob);

      // Get the download URL
      const downloadURL = await getDownloadURL(imageRef);

      // Create a document in Firestore
      await addDoc(targetCollectionRef, {
        image: downloadURL,
        colors: target.colors,
      });
    }

    console.log(
      "All images uploaded and Firestore documents created successfully!",
    );
  } catch (error) {
    console.error(
      "Error uploading images and creating Firestore documents: ",
      error,
    );
  }
};
