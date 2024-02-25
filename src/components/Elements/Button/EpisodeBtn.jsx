/* eslint-disable react/prop-types */
import Hading from "../Hading/Hading";
import Button from "./Button";

const EpisodeButton = (props) => {
  const { episode, title, date } = props;
  return (
    <Button classname="bg-[#141518] px-4 py-4 rounded-lg text-start">
      <div className="flex items-center justify-between gap-10">
        <div className="overflow-hidden">
          <Hading classname="text-lg capitalize text-neutral-100">
            episode {episode}
          </Hading>
          <Hading classname="overflow-hidden text-sm text-neutral-300 whitespace-nowrap text-ellipsis">
            {title}
          </Hading>
        </div>
        <Hading classname="text-sm text-neutral-400">{date}</Hading>
      </div>
    </Button>
  );
};

export default EpisodeButton;
