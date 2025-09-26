// import { memo, type FC } from "react";
// import { createImageUrl } from "@/shared/utils";
// import { useReviews } from "../model/useReview";

// interface Props{
//   id: string
// }

// export const ReviewsView: FC<Props> = memo((props) => {
//   const { id } = props;
//   const { getReviews } = useReviews()
//   const { data } = getReviews(id)
//   console.log(data);
//   return (
//     <div className="container mx-auto flex gap-5 overflow-x-auto mt-5">
//       {data?.map((item: any) => (
//           <div className="w-[620px] hover:bg-slate-100 rounded-xl" key={item.id}>
//             <img
//               className=" object-cover rounded-xl"
//               src={createImageUrl(item.profile_path)}
//               alt=""
//             />
//             <h3 className="w-[150px] font-semibold mt-3">{item.original_name}</h3>
//           </div>
//         ))}
//     </div>
//   );
// });
