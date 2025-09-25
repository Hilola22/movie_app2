import { memo, type FC } from "react";
import { useCasts } from "../model/useCast";
import { createImageUrl } from "@/shared/utils";

interface Props{
  id: string
  type: string
}

export const CastView: FC<Props> = memo((props) => {
  const { id, type } = props;
  const { getCasts } = useCasts()
  const { data } = getCasts(id)
  console.log(data && data[type]);
  return (
    <div className="container mx-auto flex gap-5 overflow-x-auto mt-5">
      {data &&
        data[type]?.map((item: any) => (
          <div className="w-[620px] hover:bg-slate-100 rounded-xl" key={item.id}>
            <img
              className=" object-cover rounded-xl"
              src={createImageUrl(item.profile_path)}
              alt=""
            />
            <h3 className="w-[150px] font-semibold mt-3">{item.original_name}</h3>
            <h4 className="text-gray-500">{type === "cast" ? item.character : item.job}</h4>
          </div>
        ))}
    </div>
  );
});
