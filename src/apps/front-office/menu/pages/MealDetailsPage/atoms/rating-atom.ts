import { atom } from "@mongez/react-atom";

export const ratingAtom = atom<number>({ key: "rating", default: 0 });

// export const reviewAtom = atom<Review>({
//   key: "review data",
//   default: {
//     email: userAtom.use("email"),
//     review: "",
//     rating: 0,
//     meal: undefined,
//     name: userAtom.use("name"),
//   },
// });
