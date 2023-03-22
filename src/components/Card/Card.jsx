const { default: Image } = require("next/image");

const Card = ({ pokename, urlImage }) => (
    <div className=" bg-white rounded-xl shadow-zinc-600 overflow-hidden relative shadow">
        <div className="z-20 pb-[45px] pt-4 relative flex justify-center">
            <Image  width={200} height={200} src={urlImage} />
        </div>
        <div className="rounded-tl-[12px] rounded-tr-[12px] h-[35%] w-full bg-gray-300 absolute bottom-0 text-gray-300 flex flex-col justify-end items-center">
            .
            <h1 className="text-black mt-8 pb-2 text-xl">{pokename}</h1>
        </div>
    </div>
)

export default Card;