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
          <Hading classname="text-neutral-300 overflow-hidden whitespace-nowrap text-ellipsis text-sm">
            {title}
          </Hading>
        </div>
        <Hading classname="text-neutral-400 text-sm">{date}</Hading>
      </div>
    </Button>
  );
};

export default EpisodeButton;
