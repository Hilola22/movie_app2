import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { Title } from "@/shared/ui/title/Title";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div>
      <section className="container mx-auto">
        <img src={createImageUrl(data?.backdrop_path)} alt="" />
      </section>
      <section className="container">
        <h1 className="text-3xl">{data?.title}</h1>
        <p>{data?.budget?.toLocaleString()} USD</p>
        <a href={data?.homepage} target="_blank">
          Link
        </a>
      </section>
      <section className="flex overflow-x-auto container">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px]"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
      </section>
      <section className="container mt-10">
        <Title>Tabs</Title>
        <div className="flex gap-4">
          <Link to={"review"}>Review</Link>
          <Link to={"cast"}>Cast</Link>
          <Link to={"other"}>Others</Link>
        </div>
      </section>
    </div>
  );
});
